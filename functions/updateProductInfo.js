const { firestore } = require('./admin');
const { storage } = require('./admin');
const cors = require('cors')({ origin: true });
const Busboy = require('busboy');

exports.updateProductInfo = (request, response) => {
	cors(request, response, () => {
		console.info(request.body);
		firestore
			.collection('products')
			.doc()
			.set(request.body)
			.then(_ => response.json({ msg: 'Product updated successfully' }))
			.catch(err =>
				response.status(400).json({ msg: 'Bad request', err })
			);
	});
};

// If using FormData then use this
// 	const busboy = new Busboy({ headers: request.headers });
// 	busboy.on('file', function(
// 		fieldname,
// 		file,
// 		filename,
// 		encoding,
// 		mimetype
// 	) {
// 		console.log(
// 			'File [' +
// 				fieldname +
// 				']: filename: ' +
// 				filename +
// 				', encoding: ' +
// 				encoding +
// 				', mimetype: ' +
// 				mimetype
// 		);
// 	});
// 	storage
// 		.bucket()
// 		.getFiles({ prefix: 'imgs/' })
// 		.then(files => {
// 			console.log(files);
// 		});
// 	busboy.on('field', (fieldname, value) => {
// 		console.log(fieldname, value);
// 	});
// 	busboy.end(request.body);
