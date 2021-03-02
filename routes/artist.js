const express = require("express");
const { on } = require("../models/Artist");
const router = express.Router();
const ArtistModel = require("../models/Artist");
const fileUploader = require('../config/cloudinary');

/* GET dashboard page  */
router.get("/", (req, res, next) => {
  ArtistModel.find()
    .then((artists) => {
      res.render("dashboard/artists", {
        artists: artists,
      });
    })
    .catch(err => next(err));
});

// GET create page
router.get("/create", (req, res, next) => {
  res.render("dashboard/artistCreate.hbs");
});

// GET update page
router.get("/update/:id", (req, res, next) => {
  ArtistModel.findById(req.params.id)
  .then((artist) => { 
    res.render("dashboard/artistUpdate.hbs", {artist})
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
  const {name, description, isBand} = req.body;
  console.log(req.file);
  ArtistModel.create({
    name,
    isBand: isBand === "on",
    description,
    picture: req.file.path
  })
  .then((newArtist) => res.redirect("/dashboard/artist"))
  .catch((err) => next(err));
});

// POST with id
router.post("/:id", fileUploader.single("picture"), (req, res, next) => {
  const { name, isBand, description, picture } = req.body;
  let pictureURL;
  req.file ? pictureURL = req.file.path : pictureURL = req.body.existingPicture;
  ArtistModel.findByIdAndUpdate(req.params.id, {
    name,
    isBand: isBand === 'on',
    description,
    picture: pictureURL
  })
  .then(() => res.redirect("/dashboard/artist"))
  .catch((err) => next(err))
});

module.exports = router;
