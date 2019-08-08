// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp({
	apiKey: 'AIzaSyCpV_WLCHGbRZP2MVIIeNlWW1NV_xopYnI',
	authDomain: 'fish-selling-app.firebaseapp.com',
	projectId: 'fish-selling-app',
	storageBucket: 'fish-selling-app.appspot.com'
});

const firestore = admin.firestore();
const storage = admin.storage();

module.exports = {
	admin,
	firestore,
	storage
};
