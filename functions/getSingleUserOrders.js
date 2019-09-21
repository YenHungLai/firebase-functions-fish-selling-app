const firestore = require('./admin').firestore;
const cors = require('cors')({ origin: true });

exports.getSingleUserOrders = (request, response) => {
	cors(request, response, () => {
		// console.log(request.headers);
		console.log(request.query);

		let data = [];
		firestore
			.collection('orders')
			.where('userEmail', '==', request.query.userEmail)
			.get()
			.then(function(querySnapshot) {
				querySnapshot.forEach(function(doc) {
					// doc.data() is never undefined for query doc snapshots
					// console.log(doc.id, ' => ', doc.data());
					data.push({ docID: doc.id, data: doc.data() });
				});
				data.sort(
					(a, b) =>
						Date.parse(b.data.timestamp) -
						Date.parse(a.data.timestamp)
				);
				console.log(data);
				response.json(data);
			});
	});
};
