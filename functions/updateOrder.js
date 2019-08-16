const { firestore } = require('./admin');
const bodyParser = require('body-parser');

exports.updateOrder = (request, response) => {
	// Handle CORS error
	response.set('Access-Control-Allow-Origin', '*');
	// console.log(request.headers);
	// Cannot receive JSON so have to parse text to JSON, fix this
	const data =
		typeof request.body === 'string'
			? JSON.parse(request.body)
			: request.body;
	console.log(data);
	const { orderID, ...updatedOrder } = data;
	// Update order
	firestore
		.collection('orders')
		.doc(orderID)
		.update(updatedOrder)
		.then(function() {
			response.send('Document successfully updated!');
		})
		.catch(function(error) {
			response.status(500).send(error);
		});
};
