const mongoose = require("mongoose");

const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.MONGO_CN, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		});
		console.log("Base de datos online");
	} catch (e) {
		throw new Error("Error al conectar con la DB");
	}
};

module.exports = dbConnection;
