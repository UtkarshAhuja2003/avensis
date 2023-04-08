const mongoose=require("mongoose")
const validator = require("validator")
const passportLocalMongoose=require("passport-local-mongoose");
const findOrCreate=require("mongoose-findorcreate");
const shortid=require("shortid");



const userSchema = new mongoose.Schema({
    username:{
        type:String,
        default:shortid.generate
    },
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true,
        validate:validator.isEmail,
    },
    googleId:String
    
})

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User= mongoose.model("User",userSchema);
module.exports=User;