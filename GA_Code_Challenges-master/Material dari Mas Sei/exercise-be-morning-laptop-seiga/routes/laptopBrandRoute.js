const express = require("express");
const router = express.Router();
const laptopBrand = require("../controllers/laptopBrandController");
const auth = require("../middlewares/auth");
const upload = require("../middlewares/upload");
const uploadCloud = require("../middlewares/uploadCloud");

router.post("/", auth , laptopBrand.postLaptopBrand);
router.get("/", laptopBrand.getLaptopBrands);
router.put("/:id", auth, uploadCloud("image"), laptopBrand.updateLaptopBrand);
router.delete("/:id", auth, laptopBrand.deleteLaptopBrand);

module.exports = router;