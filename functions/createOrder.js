const { firestore } = require('./admin');
const cors = require('cors')({ origin: true });

exports.createOrder = (request, response) => {
	cors(request, response, () => {
		// console.log(request.headers);
		console.log(request.body);
		const data = request.body;
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
	});
};
