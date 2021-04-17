const express = require("express");
const router = express.Router();

const onetomanyController = require('../controllers/onetomanyController');

router.post("/", onetomanyController.create)
router.get("/", onetomanyController.findAll)

module.exports = router;