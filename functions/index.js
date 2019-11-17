const functions = require('firebase-functions');

const { getOrders } = require('./getOrders');
const { createOrder } = require('./createOrder');
const { updateOrder } = require('./updateOrder');
const { processSignIn } = require('./processSignIn');
const { sendPushNotification } = require('./sendPushNotification');
const { deleteOrder } = require('./deleteOrder');
const { sendEmail } = require('./sendEmail');
const { getProductOptions } = require('./getProductOptions');
const { getSingleUserOrders } = require('./getSingleUserOrders');
const { updateProductInfo } = require('./updateProductInfo');

module.exports = {
	createOrder: functions.https.onRequest(createOrder),
	processSignIn: functions.https.onRequest(processSignIn),
	getOrders: functions.https.onRequest(getOrders),
	sendPushNotification: functions.https.onRequest(sendPushNotification),
	updateOrder: functions.https.onRequest(updateOrder),
	deleteOrder: functions.https.onRequest(deleteOrder),
	// sendEmail: functions.https.onRequest(sendEmail),
	getProductOptions: functions.https.onRequest(getProductOptions),
	getSingleUserOrders: functions.https.onRequest(getSingleUserOrders),
	updateProductInfo: functions.https.onRequest(updateProductInfo)
};
