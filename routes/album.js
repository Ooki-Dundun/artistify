const express = require("express");
const router = express.Router();
const fileUploader = require("../config/cloudinary");
const AlbumModel = require('../models/Album');
const LabelModel = require("../models/Label");
const ArtistModel = require("../models/Artist");
const StyleModel = require('../models/Style');


// get dashboard page

router.get('/', (req, res, next) => {
    AlbumModel.find().populate("label artist")
    .then((albums) => res.render("dashboard/albums", {albums}))
    .catch((err) => next(err));
})

// GET update page
router.get("/update/:id", (req, res, next) => {
  AlbumModel.findById(req.params.id)
  .then((album) => {
    LabelModel.find()
    .then((labels) => {
      ArtistModel.find()
      .then((artists) => {
        res.render("dashboard/albumUpdate.hbs", {
          album: album,
          labels: labels,
          artists: artists,
        })
      })
    })
    
  })
  .catch((err) => next(err));
});

router.get("/delete/:id", (req, res, next) => {
    AlbumModel.findByIdAndDelete(req.params.id)
    .then((dbSuccess) => { 
      console.log("the album has been removed from the database", dbSuccess)
      res.redirect("/dashboard/album")
    })
    .catch((err) => next(err));
  });

router.get('/create', (req, res, next) => {
  LabelModel.find()
  .then((labels) => {
    ArtistModel.find()
    .then((artists) => {
      res.render('../views/dashboard/albumCreate.hbs', {
        labels: labels,
        artists: artists
      })
    })
  })
})

router.post("/addnew", fileUploader.single("cover"), (req, res, next) => {
  console.log(req.body);
  const {title, releaseDate, cover, label, artist} = req.body;
  console.log(req.file);
  AlbumModel.create({title, releaseDate, cover, label, artist})
  .then((album) => {
    console.log(album);
    res.redirect('/dashboard/album')
  })
  .catch((err) => next(err))
});

router.post('/:id([a-z0-9]{24})/edited', fileUploader.single("cover"), (req, res, next) => {
  const { title, releaseDate, cover, label, artist } = req.body;
  AlbumModel.findByIdAndUpdate(req.params.id, ({title, releaseDate, cover, label, artist}))
  .then((album) => res.redirect('/dashboard/album'))
  .catch((err) => next(err))
});

module.exports = router;