const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

//Gmail credentials
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'spytechsol01@gmail.com',
        pass: '@Spy1411'
    }
});

app.post('/send-email', (req, res) => {
    const { firstName, lastName, email, message, engagementType } = req.body;

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'recipient-email@gmail.com',
        subject: `New Message from ${firstName} ${lastName}`,
        text: `
            First Name: ${firstName}
            Last Name: ${lastName}
            Email: ${email}
            Engagement Type: ${engagementType}
            Message: ${message}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).json({ message: 'Email sent successfully!' });
    });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
