const firestore = require('./admin').firestore;

exports.deleteOrder = (request, response) => {
	// Handle CORS error
	response.set('Access-Control-Allow-Origin', '*');
	// console.log(request.headers);
	console.log(request.query.id);

	let data = [];
	firestore
		.collection('orders')
		.doc(request.query.id)
		.delete()
		.then(res => response.send(res))
		.catch(err => response.send(err));
};
