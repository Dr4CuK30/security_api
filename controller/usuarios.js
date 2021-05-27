const { response, request } = require("express");
const Usuario = require("../models/usuario");
const bcrypt = require("bcryptjs");

const getAction = (req, res = response) => {
	res.json({
		msg: "Get - Controlador",
	});
};

const postAction = async (req = request, res = response) => {
	const { dispositivos, activo, ...otros } = req.body;
	const { usuario, correo } = otros;
	otros.usuario = usuario.toLowerCase();
	const usuarioI = new Usuario(otros);
	const salt = bcrypt.genSaltSync();
	usuarioI.password = bcrypt.hashSync(usuarioI.password, salt);
	try {
		await usuarioI.save();
	} catch (e) {
		return res.status(400).json({ error: "Error Inesperado F" });
	}
	res.json(usuarioI);
};

const putAction = (req, res = response) => {
	res.json({
		msg: "Put - Controlador",
	});
};

const patchAction = (req, res = response) => {
	res.json({
		msg: "Patch - Controlador",
	});
};

const deleteAction = (req, res = response) => {
	res.json({
		msg: "Delete - Controlador",
	});
};

module.exports = {
	getAction,
	postAction,
	putAction,
	patchAction,
	deleteAction,
};
