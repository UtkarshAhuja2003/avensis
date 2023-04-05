const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://udaysangwan207:Uday123@cluster0.hmruh6s.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>{
    console.log(`success`);
}).catch((e) =>{
    console.log(e);
})