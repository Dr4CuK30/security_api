const Usuario = require("../models/usuario");

const validarCorreo = async (correo) => {
	if (await Usuario.findOne({ correo })) {
		throw new Error("El correo ya existe");
	}
};

const validarUsuario = async (usuario) => {
	if (await Usuario.findOne({ usuario: usuario.toLowerCase() })) {
		throw new Error("El usuario ya existe");
	}
};

module.exports = { validarCorreo, validarUsuario };
