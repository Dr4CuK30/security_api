const express = require('express');
const cors = require('cors');
const dbConnection = require('../database/config');

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;
		this.dbConnect();
		this.middlewares();
		this.routes();
	}

	middlewares() {
		this.app.use(cors());
		this.app.use(express.json());
	}

	routes() {
		this.app.use('/api/users', require('../routes/usuarios'));
		this.app.use('/api/auth', require('../routes/auth'));
		this.app.use('/api/images', require('../routes/images'));
	}

	async dbConnect() {
		await dbConnection();
	}

	listen() {
		this.app.listen(process.env.PORT, () => {
			console.log(
				'Aplicacion Funcionando en puerto: ' +
					process.env.PORT
			);
		});
	}
}

module.exports = Server;
