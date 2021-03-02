const express = require("express");
const router = express.Router();
const StyleModel = require('../models/Style')

/* GET dashboard page  */
router.get("/", (req, res, next) => {
  StyleModel.find()
  .then((styles) => res.render("dashboard/styles", {styles}))
  .catch((err) => next(err));
});

// GET create page
router.get("/create", (req, res, next) => {
  res.render("dashboard/styleCreate");
});

// GET update page
router.get("/update/:id", (req, res, next) => {
  StyleModel.findById(req.params.id)
  .then((style) => res.render("dashboard/styleUpdate", {style}))
  .catch((err) => next(err));
  ;
});

// GET delete
router.get("/delete/:id", (req, res, next) => {
  StyleModel.findByIdAndDelete(req.params.id)
  .then((dbSuccess) => { 
    console.log("the style has been removed from the database", dbSuccess)
    res.redirect("/dashboard/style")
  })
  .catch((err) => next(err));
});


// POST
router.post("/addnew", (req, res, next) => {
  const { name, color, wikiURL } = req.body;
  StyleModel.create({
    name,
    color,
    wikiURL
  }) 
  .then((style) => {
    console.log(style)
    res.redirect("/dashboard/style")
  })
  .catch((err) => next(err));
});

// POST with id
router.post("/:id", (req, res, next) => {
  const { name, color, wikiURL } = req.body;
  StyleModel.findByIdAndUpdate(req.params.id, {
    name, color, wikiURL
  })
  .then(() => res.redirect("/dashboard/style"))
  .catch((err) => next(err))
});

module.exports = router;
