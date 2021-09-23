const multer = require("multer");
const path = require("path");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "dsac23krl",
  api_key: "535737795587498",
  api_secret: "PDIjadXr7BS7umtrFuIWFOrnMaM",
});

module.exports = (fieldName) => {
  try {
    const storage = new CloudinaryStorage({
      cloudinary: cloudinary,
      params: {
        folder: "laptops",
        resource_type: "raw",
        public_id: (req, file) => "image - " + new Date().getTime() + path.extname(file.originalname),
      },
    });

    const upload = multer({ storage: storage }).single(fieldName);

    return (req, res, next) => {
      upload(req, res, (err) => {
        return next();
      });
    };
  } catch (error) {}
};
