const functions = require('firebase-functions');

const { getOrders } = require('./getOrders');
const { createOrder } = require('./createOrder');
const { processSignIn } = require('./processSignIn');
const { getProductImages } = require('./getProductImages');
const { sendPushNotification } = require('./sendPushNotification');

module.exports = {
	createOrder: functions.https.onRequest(createOrder),
	processSignIn: functions.https.onRequest(processSignIn),
	getOrders: functions.https.onRequest(getOrders),
	getProductImages: functions.https.onRequest(getProductImages),
	sendPushNotification: functions.https.onRequest(sendPushNotification)
};
