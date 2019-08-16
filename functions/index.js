const functions = require('firebase-functions');

const { getOrders } = require('./getOrders');
const { createOrder } = require('./createOrder');
const { updateOrder } = require('./updateOrder');
const { processSignIn } = require('./processSignIn');
const { getProductImages } = require('./getProductImages');
const { sendPushNotification } = require('./sendPushNotification');
const { deleteOrder } = require('./deleteOrder');
const { sendEmail } = require('./sendEmail');

module.exports = {
	createOrder: functions.https.onRequest(createOrder),
	processSignIn: functions.https.onRequest(processSignIn),
	getOrders: functions.https.onRequest(getOrders),
	getProductImages: functions.https.onRequest(getProductImages),
	sendPushNotification: functions.https.onRequest(sendPushNotification),
	updateOrder: functions.https.onRequest(updateOrder),
	deleteOrder: functions.https.onRequest(deleteOrder),
	sendEmail: functions.https.onRequest(sendEmail)
};
