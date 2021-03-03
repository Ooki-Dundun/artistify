const express = require("express");
const { on } = require("../models/Artist");
const router = express.Router();
const ArtistModel = require("../models/Artist");
const fileUploader = require('../config/cloudinary');
const StyleModel = require('../models/Style');

/* GET dashboard page  */
router.get("/", (req, res, next) => {
  ArtistModel.find().populate("style")
    .then((artists) => {
      res.render("dashboard/artists", {
        artists: artists,
      });
    })
    .catch(err => next(err));
});

// GET create page
router.get("/create", (req, res, next) => {
  StyleModel.find()
  .then((styles) =>  res.render("dashboard/artistCreate.hbs", {styles}))
  .catch((err) => next(err));
});

// GET update page
router.get("/update/:id", (req, res, next) => {
  ArtistModel.findById(req.params.id).populate("style")
  .then((artist) => { 
    StyleModel.find()
    .then((styles) => {
      res.render("dashboard/artistUpdate.hbs", {
        artist: artist,
        styles: styles
      })
    })
  })
  .catch((err) => next(err));
});

// GET delete
router.get("/delete/:id", (req, res, next) => {
    ArtistModel.findByIdAndDelete(req.params.id)
    .then((dbSuccess) => { 
      console.log("the artist has been removed from the database", dbSuccess)
      res.redirect("/dashboard/artist")
    })
    .catch((err) => next(err));
  });

// create
router.post("/addnew", fileUploader.single("picture"), (req, res, next) => {
  const {name, isBand, description, pciture, style} = req.body;
  console.log(req.file);
  ArtistModel.create({
    name,
    isBand: isBand === "on",
    description,
    picture: req.file ? req.file.path : undefined,
    style
  })
  .then((newArtist) => res.redirect("/dashboard/artist"))
  .catch((err) => next(err));
});

// POST with id
router.post("/:id", fileUploader.single("picture"), (req, res, next) => {
  const { name, isBand, description, picture, style } = req.body;
  let pictureURL;
  req.file ? pictureURL = req.file.path : pictureURL = req.body.existingPicture;
  ArtistModel.findByIdAndUpdate(req.params.id, {
    name,
    isBand: isBand === 'on',
    description,
    picture: pictureURL,
    style
  })
  .then(() => res.redirect("/dashboard/artist"))
  .catch((err) => next(err))
});

module.exports = router;
