const express = require("express");
const router = express.Router();
const AlbumModel = require('../models/Album');
const fileUploader = require("../config/cloudinary");
const LabelModel = require("../models/Label");
const ArtistModel = require("../models/Artist");

// get dashboard page

router.get('/', (req, res, next) => {
    AlbumModel.find().populate("label artist")
    .then((albums) => res.render("dashboard/albums", {albums}))
    .catch((err) => next(err));
})

router.get("/delete/:id", (req, res, next) => {
    AlbumModel.findByIdAndDelete(req.params.id)
    .then((dbSuccess) => { 
      console.log("the album has been removed from the database", dbSuccess)
      res.redirect("/dashboard/album")
    })
    .catch((err) => next(err));
  });

router.get("/create", (req, res, next) => {

})

module.exports = router;