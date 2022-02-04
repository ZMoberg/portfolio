const express = require('express');
const nodemailer = require('nodemailer');
const { reset } = require('nodemon');
const cors = require('cors');


const app = express()
const PORT = process.env.PORT || 5500

//Middleware

app.use("/public", express.static('./public'))
app.use(express.json())
app.use(cors());

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html')
// })

app.get("/hello-world", (req, res)=>{
  res.status(200).json({
    msg: "hello world"
  })
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  // res.render(__dirname + '/index.html')
})

app.post('/', (req, res) => {
  console.log("req body", req.body)
  
  let transporter = nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 465,
    secure: true,
    auth: {
    user: "zack@zackmoberg.com",
    pass: "Creeps03!",
    },
  });

  console.log("transporter:", transporter)

  const mailOptions = {
      from: `${'zack@zackmoberg.com'}`,
      to: "zack@zackmoberg.com",
      subject: `${req.body.name} sent you a message`,
      text: `${req.body.message} from ${req.body.email}`
  };

  console.log("mailOptions:", mailOptions)

  transporter.sendMail(mailOptions, (error,info) => {
        if(error) {
          console.error("send mail error", error);
          res.status(500).send('error')
        } else {
          console.log('Email sent: ' + info.response)
          res.status(200).send('success')
        }
  })
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})