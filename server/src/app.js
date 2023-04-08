require("dotenv").config();
const express = require("express");
const bodyparser=require("body-parser");
const app = express();
const cors = require("cors");
const passport = require('./auth');
const cookieParser=require("cookie-parser")
const session=require("express-session");
const User = require("./models/user");
const nodemailer=require("nodemailer")


const sendVerifyMail = async (name, email, user_id) => {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: "avensis2023@msit.in",
          pass: "avensis123"
        }
      });
      const mailOptions = {
        from: "avensis2023@msit.in",
        to: email,
        subject: "for verification mail",
        html: ' <p> Hii '+ name +  `<img src="<a href="https://imgbb.com/"><img src="https://i.ibb.co/pwBCWWK/Untitled.png" alt="Untitled" border="0"></a><br /><a target='_blank' href='https://emoticoncentral.com/category/exhaust'>exhaust emojis</a><br />"></img> </p>`
      }
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        }
        else {
          console.log("email sent :", info.response);
        }
      })
    } catch (error) {
      console.log(error.message)
    }
}

app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null,user.id);
    });
 

    passport.deserializeUser(async function(id, done) {
        try {
            const user = await User.findById(id);
            done(null, user);
        } catch (err) {
            done(err, null);
        }
    });
    

passport.use(User.createStrategy());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
  });

app.get('/auth/google', passport.authenticate('google', { scope: ['profile','email'] }));
app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    console.log(req.user.name)
    res.cookie("name", req.user.name);
    res.cookie("email", req.user.email);
    sendVerifyMail(req.user.name, req.user.email, req.user.id);
    res.redirect('http://localhost:3000/pass')
  });

  
  app.use(cors({
    origin:["http://localhost:3000","https://avensismsit.netlify.app"," https://accounts.google.com"]
}));
require("./db/conn");
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded());

require("./models/user");
require("./models/form");

app.use(require("./routes/form"));


app.listen(port, '0.0.0.0', ()=>{
    console.log(`listening on port ${port}`);
});


