const mongoose=require("mongoose")
const validator = require("validator")

const formSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true,
        validate:validator.isEmail,
    },
    desc:{
        type:String
    }
    
})
const Form= mongoose.model("Form",formSchema);
module.exports=Form;