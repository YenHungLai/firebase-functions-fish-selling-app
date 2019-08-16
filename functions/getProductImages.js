/**
 * TODO:
 *  - How to send product image and description to frontend
 */

const firestore = require('./admin').firestore;
const { Storage } = require('@google-cloud/storage');

const storage = new Storage();
const bucket = storage.bucket('fish-selling-app.appspot.com');

module.exports.getProductImages = async (request, response) => {
	// const [files] = await storage
	// 	.bucket('fish-selling-app.appspot.com')
	// 	.getFiles({ delimiter: 'imgs/' });

	// console.log('Files:');
	// files.forEach(file => {
	// 	console.log(file.name);
	// });

	// Downloads the file
	await storage
		.bucket('fish-selling-app.appspot.com')
		.file('background-carpentry-construction-326333.jpg')
		.download({ destination: './temp.jpg' });

	console.log(
		`gs://${bucketName}/${srcFilename} downloaded to ${destFilename}.`
	);

	response.end();

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
