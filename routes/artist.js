const express = require("express");
const router = express.Router();
const ArtistModel = require("../models/Artist");

/* GET dashboard page  */
router.get("/", (req, res, next) => {
  ArtistModel.find()
    .then((artists) => {
      console.log(artists)
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
  res.render("dashboard/artistUpdate.hbs");
});

// GET delete
router.get("/delete/:id", (req, res, next) => {});

// POST
router.post("/", (req, res, next) => {});

// POST with id
router.post("/:id", (req, res, next) => {});

module.exports = router;
