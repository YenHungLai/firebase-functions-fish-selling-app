const admin = require('./admin').admin;
const cors = require('cors')({ origin: true });

exports.processSignIn = (request, response) => {
	cors(request, response, () => {
		console.log(request.query);
		// console.log(request.body);
		// Remember to send data as JSON so object methods work
		const uid = request.query.uid;
		admin
			.auth()
			.setCustomUserClaims(uid, {
				// Set admin only if jacoblai1029@gmial.com and allen signs in
				admin:
					uid === 'kkaynBtQaUQYcIy2ZNVAq7j7eX62' ||
					uid === '2737z8dVW5bmRkehLtQGz39IztL2'
						? true
						: false
			})
			.then(() => {
				// The new custom claims will propagate to the user's ID token the
				// next time a new one is issued.
				// Lookup the user associated with the specified uid.
				admin
					.auth()
					.getUser(uid)
					.then(userRecord => {
						// The claims can be accessed on the user record.
						console.log(userRecord.customClaims);
					});

				response.status(200).send('Done setting claims');
			})
			.catch(err => response.status(400).send(err));
	});
};
