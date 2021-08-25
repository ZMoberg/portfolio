const express = require("express");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
const cors = require('cors')
require("dotenv").config();



const app = express();
app.use(cors());

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "https://www.zackmoberg.com/send");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, Basic, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
  });

app.route("/").get(function (req, res) {
    res.sendFile(process.cwd() + "/index.html")
});

const PORT = process.env.PORT || 5500; 
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`)
});

let transporter = nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 465,
    secure: true,
    auth: {
    user: "zack@zackmoberg.com",
    pass: "Creeps03!",
    },
    });

transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages")
    }
});

app.post("/send", (req, res) => {
    //1.
    let form = new multiparty.Form();
    let data = {};
    form.parse(req, function (err, fields) {
      console.log(fields);
      Object.keys(fields).forEach(function (property) {
        data[property] = fields[property].toString();
      });
  
      //2. You can configure the object however you want
      const mail = {
        from: data.name,
        to: process.env.EMAIL,
        subject: data.name,
        text: `${data.name} <${data.email}> \n${data.message}`,
      };
  
      //3.
      transporter.sendMail(mail, (err, data) => {
        if (err) {
          console.log(err);
          res.status(500).send("Something went wrong.");
        } else {
          res.status(200).send("Email successfully sent to recipient!");
        }
      });
    });
  });