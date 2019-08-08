const firestore = require('./admin').firestore;

exports.getOrders = async (request, response) => {
	// Handle CORS error
	response.set('Access-Control-Allow-Origin', '*');
	// console.log(request.headers);
	// console.log(request.body);

    let data = [];
    // FIXME: how to not use await here
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
};
