/**
 * TODO:
 *  - How to send product image and description to frontend
 */

const firestore = require('./admin').firestore;
const { Storage } = require('@google-cloud/storage');

const storage = new Storage();
const bucket = storage.bucket('fish-selling-app.appspot.com');

module.exports.getProductImages = (request, response) => {
	const downloadURL = [];
	bucket.getFiles(function(err, files) {
		if (!err) {
			// files is an array of File objects.
			files.forEach(file => {
				console.log(file);
			});
		}
		console.log(downloadURL);
	});

	// Get product images

	// Get product description
	// firestore
	// 	.collection('image-text')
	// 	.get()
	// 	.then(querySnapshot => {
	// 		querySnapshot.forEach(doc => {
	// 			console.log(doc.id + ' => ', doc.data());
	// 		});
	// 	});
};

// const storageRef = storage.ref();
// const listRef = storageRef.child('imgs/');
// // Find all the prefixes and items.
// listRef
//     .listAll()
//     .then(res => {
//         const promises = res.items.map(itemRef => {
//             // All the items under listRef.
//             return itemRef.getDownloadURL();
//         });
//         // Catch all promises
//         Promise.all(promises).then(urls => {
//             console.log(urls);
//         });
//     })
//     .catch(function(error) {
//         // Uh-oh, an error occurred!
//         console.error(error);
//     });
