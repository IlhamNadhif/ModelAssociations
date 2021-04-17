const express = require("express");
const router = express.Router();

const onetooneController = require('../controllers/onetooneController');

router.post("/", onetooneController.create)
router.get("/", onetooneController.findAll)

module.exports = router;