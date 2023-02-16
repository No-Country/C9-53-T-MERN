const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: '465',
  secure: true,
  auth: {
    user: 'diegogaraycullas@gmail.com',
    pass: 'ikeanvgwiwpjakuo',
  },
});

module.exports = transporter;