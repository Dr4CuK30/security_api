const { response, request } = require("express");
const usuario = require("../models/usuario");
const bcrypt = require("bcryptjs");
const generarJWT = require("../helpers/generarJWT");

const login = async (req = request, res = response) => {
	const datos = req.body;
	try {
		const usuariox = await usuario.findOne({
			usuario: datos.usuario.toLowerCase(),
		});
		if (!usuariox) {
			res.status(400).json({
				msg: "Este usuario no existe",
			});
		}
		if (!bcrypt.compareSync(datos.password, usuariox.password)) {
			res.status(400).json({
				msg: "Contraseña invalida",
			});
		}
		const token = await generarJWT(usuariox.id);
		res.json({
			usuariox,
			token,
		});
	} catch (e) {
		res.status(500).json({
			error: "Error inesperado",
		});
	}
};

module.exports = {
	login,
};
