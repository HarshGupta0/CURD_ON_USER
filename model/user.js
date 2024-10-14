const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/TestApp");
const UserSchehma= mongoose.Schema({
    userName:String,
    email:String,
    img:String,
});
module.exports=mongoose.model("user",UserSchehma);