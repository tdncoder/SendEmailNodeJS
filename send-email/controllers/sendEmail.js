const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "aileen.mclaughlin52@ethereal.email",
      pass: "RQ56Vg9P6gjTNmyqUP",
    },
  });

  let info = await transporter.sendMail({
    from: '"Test User" <testuser@gmail.com>',
    to: "bar@example.com",
    subject: "Hello",
    text: "Hello world, this is a test email.",
    html: "<h2>Sending Email with NodeJS</h2>",
  });

  res.json(info);
};

module.exports = sendEmail;
