const firestore = require('./admin').firestore;

exports.getOrders = (request, response) => {
	// Handle CORS error
	response.set('Access-Control-Allow-Origin', '*');
	// console.log(request.headers);
	// console.log(request.body);

	let data = [];
	firestore
		.collection('orders')
		.get()
		.then(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
				// doc.data() is never undefined for query doc snapshots
				console.log(doc.id, ' => ', doc.data());
				data.push({ docID: doc.id, data: doc.data() });
			});
			response.json(data);
		});
};
