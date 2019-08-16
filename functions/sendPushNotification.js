const messaging = require('./admin').messaging;

// TODO: how to get token from client
const registrationToken =
	'e-TQhFMudAA:APA91bHqd-Iqr27PQcLwxCXNz_HHe3eFimiQ6AhtmvA9r59iNOF_Tw-3VE1KkeDQeG1kufiF4Uet-s5CHFzPHViUXeW7ijHSuHGoSSHBfS2dwlrK166E6zrmECK0VOSZ7K16z-RndQRP';

const message = {
	data: {
        msg: 'Hello from firebase functions'
    },
	token: registrationToken
};

exports.sendPushNotification = (request, response) => {
	// Send a message to the device corresponding to the provided
	// registration token.
	messaging
		.send(message)
		.then(res => {
			// Response is a message ID string.
			console.log('Successfully sent message:', res);
			response.send('Successfully sent message');
		})
		.catch(error => {
			console.log('Error sending message:', error);
		});
};
