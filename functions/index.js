const functions = require('firebase-functions');

const getOrders = require('./getOrders').getOrders;
const createOrder = require('./createOrder').createOrder;
const processSignIn = require('./processSignIn').processSignIn;
const getProductImages = require('./getProductImages').getProductImages;

module.exports = {
	createOrder: functions.https.onRequest(createOrder),
	processSignIn: functions.https.onRequest(processSignIn),
	getOrders: functions.https.onRequest(getOrders),
	getProductImages: functions.https.onRequest(getProductImages)
};
