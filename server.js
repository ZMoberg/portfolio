const express = require('express');
const nodemailer = require('nodemailer');
const { reset } = require('nodemon');

const app = express()

const PORT = process.env.PORT || 5500

//Middleware

// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html')
// })

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.log(req.body)
  
  let transporter = nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 465,
    // secure: true,
    auth: {
    user: "zack@zackmoberg.com",
    pass: "creeps03",
    },
    });

    const mailOptions = {
      from: 'zack@zackmoberg.com',
      to: "zack@zackmoberg.com",
      subject: `${req.body.name} sent you a message`,
      text: `${req.body.message} from ${req.body.email}`
      }

      transporter.sendMail(mailOptions, (error,info) => {
        if(error) {
          console.log(error);
          res.send('error')
        } else {
          console.log('Email sent: ' + info.response)
          res.send('success')
        }
      })
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})