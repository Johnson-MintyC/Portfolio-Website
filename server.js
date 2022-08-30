///////////////////////////////////
//  Dependencies
//////////////////////////////////

const express = require("express");
const router = express.Router();

const cors = require("cors");
const nodemailer = require("nodemailer");

//////////////////////////////////
//  Instantiation
//////////////////////////////////

const app = express();

//////////////////////////////////
//  Middleware
//////////////////////////////////

app.use(cors());
app.use(express.json());

//////////////////////////////////
//  Routes
//////////////////////////////////

app.use("/", router);

//////////////////////////////////
//  Listener
//////////////////////////////////

app.listen(5000, () => console.log("server running"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "****@gmail.com",
    pass: "",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: "*********@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
            <p>Name: ${email}</p>
            <p>Name: ${message}</p>
      `,
  };
  contactEmail.sendEmail(email, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
