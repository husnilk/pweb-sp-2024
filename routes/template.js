var express = require("express");
var isStaff = require("../middlewares/is_staff");
var db = require("../models/index");
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

module.exports = router;
