const { Storage } = require('@google-cloud/storage');
const storage = new Storage();

exports.getProductOptions = async (request, response) => {
	// Lists files in the bucket
	const [files] = await storage
		.bucket('fish-selling-app.appspot.com')
		.getFiles({ directory: 'imgs' });

    const result = [];
    files.forEach(file => {
        if (/\.(gif|jpg|jpeg|tiff|png)$/i.test(file.name)) {
            // Gets the metadata for the file
            storage
                .bucket('fish-selling-app.appspot.com')
                .file(file.name)
                .getMetadata()
                .then(res => console.log(res))
            // console.log(metadata.name);
            // console.log(metadata.metadata.MainTitle);
            // result.push(metadata.metadata.MainTitle);
        }
    })
	// Promise.all(
	// 	files.map(file => {
	// 		if (/\.(gif|jpg|jpeg|tiff|png)$/i.test(file.name)) {
	// 			// Gets the metadata for the file
	// 			return storage
	// 				.bucket('fish-selling-app.appspot.com')
	// 				.file(file.name)
	// 				.getMetadata();
	// 			// console.log(metadata.name);
	// 			// console.log(metadata.metadata.MainTitle);
	// 			// result.push(metadata.metadata.MainTitle);
	// 		}
	// 	})
	// ).then(res => {
	// 	res.forEach(item => {
    //         console.log(item);
    //     });
	// });
	response.end();
};
