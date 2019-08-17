const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'jacoblai1029@gmail.com',
		pass: 'jacobdase'
	}
});

exports.sendEmail = (request, response) => {
	console.log('sendEmail here');
	cors(request, response, () => {
		console.log(request.body);
		const dest = request.query.dest;
		const content = request.body;
		const html = `
            <ul>
                <li>Sender: ${content.sender}</li>
                <li>Receiver: ${content.receiver}</li>
                <li>Item: ${content.item}</li>
                <li>Amount: ${content.amount}</li>
                <li>Price: ${content['order-price']}</li>
                <li>Receiver Address: ${content['receiver-address']}</li>
                <li>Ordered at: ${content.timestamp}</li>
                <li>Ordered Status: ${content['order-status']}</li>
            </ul>
        `;
		const mailOptions = {
			from: 'jacoblai1029@gmail.com',
			to: dest,
			subject: 'Order Status Changed', // email subject
			html
		};

		// returning result
		return transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return response.send(error.toString());
			}
			return response.send('Sent');
		});
	});
};
