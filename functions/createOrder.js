const firestore = require('./admin').firestore;

exports.createOrder = (request, response) => {
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
		.set({ ...data, timestamp: new Date().toLocaleString() })
		.then(function() {
			response.send('Document successfully written!');
		})
		.catch(function(error) {
			response.send('Error writing document: ', error);
		});
};
