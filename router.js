const express = require("express");
const router = express.Router();
const productController = require("./controllers/product")

router.get("/product", productController.show);

router.post("/product", productController.create);


module.exports = router;
