const express = require("express");
const router = express.Router();

/* GET dashboard page  */
router.get("/", (req, res) => {
  res.render("dashboard/labels");
});

// GET create page
router.get("/create", (req, res, next) => {
  res.render("dashboard/labelCreate");
});

// GET update page
router.get("/update/:id", (req, res, next) => {
  res.render("dashboard/labelUpdate");
});

// GET delete
router.get("/delete/:id", (req, res, next) => {});

// POST
router.post("/", (req, res, next) => {});

// POST with id
router.post("/:id", (req, res, next) => {});

module.exports = router;