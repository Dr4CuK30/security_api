const jwt = require("jsonwebtoken");

const generarJWT = (uid = "") => {
	return new Promise((res, rej) => {
		jwt.sign(
			{ uid },
			process.env.JWTSECRETKEY,
			{ expiresIn: "12h" },
			(err, token) => {
				if (err) {
					rej("No se pudo generar el token");
				} else {
					res(token);
				}
			}
		);
	});
};

module.exports = generarJWT;
