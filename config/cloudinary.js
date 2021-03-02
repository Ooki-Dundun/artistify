const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary,
    folder: "Artistify",
    allowedFormats: ['jpg', 'png'],
    filename: function(req, res, cb) {
        cb(null, file.originalname)
    }
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;