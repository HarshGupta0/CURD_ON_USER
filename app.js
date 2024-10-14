const express = require('express');
const app = express();
const path = require('path');
const userModel = require("./model/user");
const user = require('./model/user');
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>{
    res.render("index");
})
app.get('/read',async(req,res)=>{
    let users =await userModel.find()
    res.render("read",{users:users});
});
app.post('/create',async(req,res)=>{
    let createdUser= await userModel.create({
        userName:req.body.name,
        email:req.body.email,
        img:req.body.image,
    });
    res.redirect("/read");
});
app.get("/delete/:id",async(req, res)=>{
    let users = await userModel.findOneAndDelete({_id:req.params.id});
    res.redirect("/read");
});
app.get("/edit/:userid", async (req,res)=>{
    let user = await userModel.findOne({_id:req.params.userid});
    res.render("edit",{user});
    console.log(user);
})
app.listen(3000);
 