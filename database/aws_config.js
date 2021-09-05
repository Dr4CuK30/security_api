const AWS = require('aws-sdk');

const getS3 = () => {
	AWS.config.update({
		region: 'us-east-2',
		credentials: {
			accessKeyId: process.env.AWS_KEY,
			secretAccessKey: process.env.SECRET_AWS_KEY,
		},
	});
	return new AWS.S3({ apiVersion: '2006-03-01' });
};

module.exports = {
	getS3,
};
