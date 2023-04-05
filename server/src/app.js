require("dotenv").config();
const express = require("express");
const bodyparser=require("body-parser");
const app = express();
const cors = require("cors");
const passport = require('./auth');
const cookieParser=require("cookie-parser")
const session=require("express-session");
const User = require("./models/user");

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

app.get('/auth/google', passport.authenticate('google', { scope: ['profile','email'] }));
app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('http://localhost:3000/')
  });

  

app.use(cors({
    origin: ["http://localhost:3000"," https://accounts.google.com"],
          methods: "GET,POST,PUT,DELETE",
          credentials: true,
  }));
require("./db/conn");
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded());

require("./models/user");


app.listen(port, '0.0.0.0', ()=>{
    console.log(`listening on port ${port}`);
});


