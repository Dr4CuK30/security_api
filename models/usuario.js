const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
	usuario: {
		type: String,
		required: true,
		unique: true,
	},
	correo: {
		type: String,
		required: true,
		unique: true,
	},
	telefono: {
		type: String,
		required: true,
	},
	direccion: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	dispositivos: {
		type: Array,
		default: [],
	},
});

UsuarioSchema.methods.toJSON = function () {
	const { password, __v, _id, ...user } = this.toObject();
	user.uid = _id;
	return user;
};

module.exports = model("Usuario", UsuarioSchema);
