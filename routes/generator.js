const express = require("express");
const db = require("../models/index");
const router = express.Router();
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");
const fs = require("fs");
const path = require("path");
const topdf = require("docx2pdf-converter");
const exceljs = require("exceljs");

// POST /generator/cv
router.post("/cv", async function (req, res, next) {
  const ext = ".pdf";

  const content = fs.readFileSync(
    path.resolve(__dirname + "/../public/templates", "biodata.docx"),
    "binary"
  );
  const zip = new PizZip(content);
  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });

  doc.render({
    nama: "JAHRO SUROYA TAURIN",
    nim: "2011522013",
  });

  const buf = doc.getZip().generate({
    type: "nodebuffer",
    compression: "DEFLATE",
  });

  fs.writeFileSync(path.resolve(__dirname, "output.docx"), buf);

  const inputPath = path.join(__dirname, "output.docx");
  const outputPath = path.join(__dirname, `output${ext}`);

  topdf.convert(inputPath, outputPath);

  res.download(outputPath);
});

router.get("/templatelist", async function (req, res, next) {
  const templates = await db.OutgoingType.findAll();

  const workbook = new exceljs.Workbook();
  const worksheet = workbook.addWorksheet("Templates");

  worksheet.columns = [
    { header: "Nama Kategori", key: "name", width: 40 },
    { header: "Bahasa", key: "lang", width: 20 },
    { header: "Status", key: "status", width: 20 },
    { header: "Template", key: "template", width: 20 },
  ];

  for (let i = 0; i < templates.length; i++) {
    let data = {
      name: templates[i].name,
      lang: templates[i].lang,
      status: templates[i].status,
      template: templates[i].generated,
    };
    worksheet.addRow(data);
  }

  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=" + "templates.xlsx"
  );
  workbook.xlsx.write(res).then(function () {
    res.end();
  });
});

module.exports = router;
