const express = require("express");
const router = express.Router();
const laptop = require("../controllers/laptopController");
const auth = require("../middlewares/auth");
const upload = require("../middlewares/upload");
const uploadCloud = require("../middlewares/uploadCloud");

router.post("/", auth , uploadCloud("image"), laptop.postLaptop);

module.exports = router;