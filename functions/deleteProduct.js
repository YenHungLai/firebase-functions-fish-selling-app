const { firestore } = require('./admin');
const { storage } = require('./admin');
const cors = require('cors')({ origin: true });

exports.deleteProduct = (request, response) => {
	cors(request, response, () => {
		console.log(request.query);
		// TODO: check if document exists.
		firestore
			.collection('products')
			.doc(request.query.id)
			.delete()
			.then(() => response.json({ msg: 'Product deleted successfully' }))
			.catch(err => response.json(err));
	});
};
