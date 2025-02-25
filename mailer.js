const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/send', (req, res) => {
  const { name, contact , type} = req.body;

  const transporter = nodemailer.createTransport({
   service: 'gmail',
    port: 465,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
   
  });

  let mailOptions;
  
  if (type === 'price') {
    mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: 'Отправка новой формы',
      text: `Ім'я: ${name}\nНомер телефону: ${contact}\nСкачали прайс`
    };
  } else if (type === 'consultation') {
    mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: 'Отправка новой формы',
      text: `Ім'я: ${name}\nНомер телефону: ${contact}\nЗапросив консультацію`
    };
  } else {
    return res.status(400).send('Некорректный тип формы');
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Message Sent');
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});