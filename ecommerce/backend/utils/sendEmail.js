const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    
    service: process.env.SMPT_SERVICE,
    auth: {
      user:"ecommerce898989@gmail.com",
      pass:"A@12345678",
    },
  });

  const mailOptions = {
    from: "ecommerce898989@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;