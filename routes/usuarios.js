const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validations');
const {
	getAction,
	postAction,
	deleteAction,
	putAction,
	patchAction,
} = require('../controller/usuarios');
const { validarCorreo, validarUsuario } = require('../helpers/db-validations');

const router = Router();

router.get('/', getAction);
router.post(
	'/',
	[
		check('correo').isEmail(),
		check('correo').custom(validarCorreo),
		check('usuario').not().isEmpty(),
		check('usuario').custom(validarUsuario),
		check('password').isLength({ min: 8 }),
		validarCampos,
	],
	postAction
);
router.put('/', putAction);
router.delete('/', deleteAction);
router.patch('/', patchAction);

module.exports = router;
