const { request, response } = require('express');
const { getS3 } = require('../database/aws_config');
var jwt = require('jsonwebtoken');
const usuario = require('../models/usuario');

const getImages = async (req = request, res = response) => {
	decodedJwt = jwt.decode(req.header('tokenx'));
	userData = await usuario.findById(decodedJwt.uid);
	res.send(userData.images);
};

const postImage = async (req = request, res = response) => {
	console.log('------------------------------------------');
	console.log(req.body);
	console.log('------------------------------------------');
	s3 = getS3();
	decodedJwt = jwt.decode(req.header('tokenx'));
	userData = await usuario.findById(decodedJwt.uid);
	const uploadParams = {
		Bucket: 'securityapi',
		Key: `${userData._id}_${Date.now()}`,
		Body: req.body.file,
		ContentType: 'image/jpeg',
		ACL: 'public-read',
		ContentEncoding: 'base64',
	};
	s3.upload(uploadParams, (err, data) => {
		if (err) {
			res.status(400).send(err);
		}
		if (data) {
			console.log(data);
			userData.images.push(data.Location);
			userData.save();
			res.send(data.Location);
		}
	});
};

module.exports = {
	postImage,
	getImages,
};
