const express = require("express");
const router = express.Router();
const LabelModel = require('../models/Label')
const fileUploader = require('../config/cloudinary');

/* GET dashboard page  */
router.get("/", (req, res) => {
  LabelModel.find()
  .then((labels) => res.render("dashboard/labels", {labels}))
  .catch((err) => next(err));
});

// GET create page
router.get("/create", (req, res, next) => {
  res.render("dashboard/labelCreate");
});

// GET update page
router.get("/update/:id", (req, res, next) => {
  LabelModel.findById(req.params.id)
  .then((label) => res.render("dashboard/labelUpdate", {label}))
  .catch((err) => next(err));
});

// GET delete
router.get("/delete/:id", (req, res, next) => {
  LabelModel.findByIdAndDelete(req.params.id)
  .then((dbSuccess) => { 
    console.log("the label has been removed from the database", dbSuccess)
    res.redirect("/dashboard/label")
  })
  .catch((err) => next(err));
});

// POST
router.post("/addnew", fileUploader.single("logo"), (req, res, next) => {
  const { name, city, country, street, streetNumber, zipCode, logo } = req.body;
  console.log(req.file);
  LabelModel.create({
    name,
    city,
    country,
    street,
    streetNumber,
    zipCode,
    logo: req.file.path
  })
  .then((label) => {
    console.log(label);
    res.redirect("/dashboard/label")
  })
  .catch((err) => next(err));
});

// POST with id
router.post("/:id", fileUploader.single("logo"), (req, res, next) => {
  const { name, city, country, street, streetNumber, zipCode, logo } = req.body;
  let logoURL;
  req.file ? logoURL = req.file.path : logoURL = req.body.existingLogo;
  LabelModel.findByIdAndUpdate(req.params.id, {
    name, city, country, street, streetNumber, zipCode, logo: logoURL
  })
  .then(() => res.redirect("/dashboard/label"))
  .catch((err) => next(err));
});

module.exports = router;
