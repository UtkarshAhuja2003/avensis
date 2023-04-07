const mongoose = require("mongoose");
const  express = require("express");
const router = express.Router();
const form=mongoose.model("Form")


router.post("/form",async(req,res)=>{
    try{
        const {name,email,desc }  = req.body;

        const forms = new form({
            name,
            email,
            desc
        })
        forms.save();
    }
    catch(e){
        res.status(400).send("Invalid Details")
    }
});

module.exports=router;