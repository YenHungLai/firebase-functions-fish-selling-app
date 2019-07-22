const functions = require('firebase-functions');
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

const firestore = admin.firestore();

exports.createOrder = functions.https.onRequest((request, response) => {
	// Handle CORS error
	response.set('Access-Control-Allow-Origin', '*');
	console.log(request.headers);
	console.log(request.body);
	// Cannot receive JSON so have to parse text to JSON, fix this
	const data = JSON.parse(request.body);
	// Add order
	firestore
		.collection('orders')
		.doc(`order-${new Date().toISOString()}`)
		.set({ ...data })
		.then(function() {
			response.send('Document successfully written!');
		})
		.catch(function(error) {
			response.send('Error writing document: ', error);
		});
});

exports.processSignIn = functions.https.onRequest((request, response) => {
	response.set('Access-Control-Allow-Origin', '*');
	console.log(request.query);
	// console.log(request.body);
	// Remember to send data as JSON so object methods work
	const uid = request.query.uid;
	admin
		.auth()
		.setCustomUserClaims(uid, {
			// Set admin only if jacoblai1029@gmial.com signs in
			admin: uid == 'kkaynBtQaUQYcIy2ZNVAq7j7eX62' ? true : false
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

exports.getOrders = functions.https.onRequest(async (request, response) => {
	// Handle CORS error
	response.set('Access-Control-Allow-Origin', '*');
	// console.log(request.headers);
	// console.log(request.body);

	let data = [];
	await firestore
		.collection('orders')
		.get()
		.then(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
				// doc.data() is never undefined for query doc snapshots
				console.log(doc.id, ' => ', doc.data());
				data.push(doc.data());
			});
		});
	console.log(data);

	response.json(data);
});
