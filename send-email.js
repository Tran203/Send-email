const nodemailer = require("nodemailer");

async function sendMessage() {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.APP_USER, // email
            pass: process.env.APP_PASSWORD, // app password
        },
    });

    let info = await transporter.sendMail({
        sender: "tshetshe203@gmail.com",
        from: "tshetshe203@gmail.com", // sender address
        to: "homeflix203@gmail.com",
        replyTo: "tshetshe203@gmail.com",
        subject: `Bafo`, // Subject line
        text: `adsds`, // plain text body
        html: `<b>fdfgdaf</b>`, // html body
    });

    info = await transporter.sendMail({
        sender: "homeflix203@gmail.com",
        from: "homeflix203@gmail.com", // sender address
        to: "tshetshe203@gmail.com",
        replyTo: 'homeflix203@gmail.com',
        subject: `Confirmation`, // Subject line
        text: `Hey Bafo`, // plain text body
        html: `
        <p>Dear <b>Bafo</b></p>
        <p>This is to confirm I have received your email. I will get back to you as soon as possible.</p>
        <p>Regards,</p>
        <p>Themba G Chauke</p>
        `, // html body
    });
}

module.exports = { sendMessage }