const express = require("express");
const router = express.Router();
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");
const fs = require("fs");
const path = require("path");
const topdf = require("docx2pdf-converter");

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

module.exports = router;
