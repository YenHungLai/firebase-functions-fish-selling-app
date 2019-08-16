const { firestore } = require('./admin');
const bodyParser = require('body-parser');

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
		.doc()
		.set({
			...data,
			'order-status': 'Pending',
			timestamp: new Date().toLocaleString()
		})
		.then(function() {
			response.send('Document successfully written!');
		})
		.catch(function(error) {
			response.send('Error writing document: ', error);
		});
};