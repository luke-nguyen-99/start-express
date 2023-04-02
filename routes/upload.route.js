const express = require("express");
const router = express.Router();
const multer  = require('multer');
const controller = require('../controllers/upload.controller');

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/uploads');
    },
    filename: (req, file, cb) => {
      cb(null , Date.now() + '_' + file.originalname);
    }
  })
})

router.post('', upload.single('file'), controller.upload);

module.exports = router;