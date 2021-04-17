const express = require("express");
const router = express.Router();

const manytomanyController = require('../controllers/manytomanyController');

router.post("/paket", manytomanyController.createPaket)
router.get("/paket", manytomanyController.findAllPaket)

router.get("/", manytomanyController.findAll)
router.post("/userpaket", manytomanyController.createUserPaket)

module.exports = router;