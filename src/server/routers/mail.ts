import * as express from "express";
import {
  sendJSONResponse, saveModelAndSendResponse, updateModelAndSendResponse,
  removeModelByIdAndRespond
} from "../utils";
const app = express.Router();
import cors from "cors";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "gator3287.hostgator.com",
  port: 465,
  ignoreTLS: true,
  tls: { rejectUnauthorized: false },
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.RAZZLE_EMAIL_USER, // generated ethereal user
    pass: process.env.RAZZLE_EMAIL_PSWD // generated ethereal password
  }
});

console.log(process.env.RAZZLE_EMAIL_USER, process.env.RAZZLE_EMAIL_PSWD);

app.get("/", cors(), (req: express.Request, res: express.Response) => {
  sendJSONResponse(res, 200, true, "Route is set");
});

app.post("/contact", cors(), async (req: express.Request, res: express.Response) => {
  console.log(req.body.details);
  const { name, email, message } = req.body.details;
  if (name && email && message) {
    const mailOptions = {
      from: "\"Dustin\" <ds@main.mediachemist.com>", // sender address
      to: "dustin@drivensociety.com", // list of receivers
      subject: "DS Contact Form", // Subject line
      text: `
        Name : ${name}
        Email : ${email}
        Message : ${message}
      `, // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
    sendJSONResponse(res, 200, true, name);
  } else {
    sendJSONResponse(res, 400, false);
  }
});

app.post("/newsletter", cors(), async (req: express.Request, res: express.Response) => {
  console.log(req.body.details);
  const { name, email } = req.body.details;
  if (name && email) {
    const mailOptions = {
      from: "\"Dustin\" <ds@main.mediachemist.com>", // sender address
      to: "dustin@drivensociety.com", // list of receivers
      subject: "DS Newsletter Signup", // Subject line
      text: `
        Name : ${name}
        Email : ${email}
      `, // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
    sendJSONResponse(res, 200, true, name);
  } else {
    sendJSONResponse(res, 400, false);
  }
});

app.post("/advice", cors(), async (req: express.Request, res: express.Response) => {
  console.log(req.body.details);
  const { name, email, message } = req.body.details;
  if (name && email && message) {
    const mailOptions = {
      from: "\"Dustin\" <ds@main.mediachemist.com>", // sender address
      to: "dustin@drivensociety.com", // list of receivers
      subject: "DS Member Advice", // Subject line
      text: `
        Name : ${name}
        Email : ${email}
        Message : ${message}
      `, // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
    sendJSONResponse(res, 200, true, name);
  } else {
    sendJSONResponse(res, 400, false);
  }
});

export default app;