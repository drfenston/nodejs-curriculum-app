const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../../auth/auth.js')
const helper = require('../../../helper.js')
const prefix = helper.prefix
const multer = require("multer");

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
  };

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      const extension = MIME_TYPES[file.mimetype];
      cb(null, uniqueSuffix + '.' + extension)
    }
})

const upload = multer({
    dest: "uploads/",
    limits: {
        fileSize: 1000000
    },
    storage: storage,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload a valid image file'))
        }
        cb(undefined, true)
    }
})

module.exports = (app) => {
    app.post(prefix + '/api/uploadProfileImage', upload.single("upload"), async (req, res) => {
        try {
            const message = `L'image a bien été transférée.`
            res.status(201).json({ message, data: req.file })
        } catch (error) {
            console.log(error)
            res.status(400).send({ data: error })
        }
    }
    );

}