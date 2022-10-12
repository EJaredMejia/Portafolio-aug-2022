const dotenv = require("dotenv");
const nodemailer = require("nodemailer")

//utils
const { catchAsync } = require("../utils/catchAsync.util");

dotenv.config({ path: "./config.env" });

const sendEmail = catchAsync(async (req, res) => {
  const { title ,message, email } = req.body;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.ETH_USERNAME, // generated ethereal user
      pass: process.env.ETH_USER_PASSWORD, // generated ethereal password
    },
  });

  const msg = {
    from: email, // sender address
    to: "jaredmejia4440@gmail.com", // list of receivers
    subject: title, // Subject line
    text: message, // plain text body 
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(msg);

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  res.send('Email sent!')
});

module.exports = { sendEmail };
