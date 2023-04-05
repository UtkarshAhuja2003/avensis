
const mongoose = require("mongoose");
const  express = require("express");
const router = express.Router();
const News=mongoose.model("User")



router.get("/user", async(req,res)=>{
try{
    const users = await User.find().exec();
    res.json({
      success: true,
      users,
    });
} catch(e){
    console.log(e)
}
})