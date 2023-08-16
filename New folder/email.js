var nodemailer = require('nodemailer');
const admin = require('./firebaseConfig');

//get sender's details
var transporter = nodemailer.createTransport({
    //details
    service: 'Outlook365',
    auth: {
        user: process.env.APP_USER,
        pass: process.env.APP_PASSWORD,
    },
    debug:true
});

//email details
var mailOptions = {
    from: '221641221@tut4life.ac.za',
    to: 'tshetshe203@gmail.com',
    subject: 'Node.js sends emails',
    text: 'Hello, lets connect'
};

//send email
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});