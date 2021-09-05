const multer = require('multer');

const upload = multer({
	storage: multer.memoryStorage(),
	limits: {
		fileSize: 8000000,
	},
}).single('file');

module.exports = {
	upload,
};
