var express = require("express");
var isStaff = require("../middlewares/is_staff");
var db = require("../models/index");
var upload = require("../middlewares/upload");
var router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res, next) {
  //Ambil data template dari database
  let templates = await db.OutgoingType.findAll();

  for (let i = 0; i < templates.length; i++) {
    templates[i].isBahasa = templates[i].lang == "id" ? true : false;
  }

  console.log(templates);
  //Tampilkan halaman template/index
  res.render("template/index", { templates: templates });
});

router.get("/create", function (req, res, next) {
  res.render("template/create");
});

router.post(
  "/store",
  upload.single("template_file"),
  async (req, res, next) => {
    let name = req.body.name;
    let lang = req.body.lang;
    let status = req.body.status == "on" ? 1 : 0;
    let generated = req.body.generated == "on" ? true : false;
    let template_file = req.file ? req.file.filename : null;

    await db.OutgoingType.create({
      name: name,
      lang: lang,
      status: status,
      generated: generated,
      template_file: template_file,
    });

    res.redirect("/template");
  }
);

router.get("/edit/:id/attributes", async function (req, res, next) {
  let id = req.params.id;
  let template = await db.OutgoingType.findByPk(id);

  res.render("template/attributes", { template: template });
});

module.exports = router;
