// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp({
	apiKey: 'AIzaSyCpV_WLCHGbRZP2MVIIeNlWW1NV_xopYnI',
	authDomain: 'fish-selling-app.firebaseapp.com',
	projectId: 'fish-selling-app',
	storageBucket: 'fish-selling-app.appspot.com',
	messagingSenderId: '379493813490'
});

const firestore = admin.firestore();
const storage = admin.storage();
const messaging = admin.messaging();

module.exports = {
	admin,
	firestore,
	storage,
	messaging
};
