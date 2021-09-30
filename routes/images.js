const { Router } = require('express');
const { postImage, getImages } = require('../controller/images');
const { upload } = require('../middlewares/upload');
const { validarToken } = require('../middlewares/validar-token');

const router = Router();

router.get('/', [validarToken], getImages);

router.post('/', [validarToken], postImage);

module.exports = router;
