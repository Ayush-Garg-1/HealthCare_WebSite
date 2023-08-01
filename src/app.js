require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const bcrypt = require("bcryptjs");
const port = 8000;

// Data Base Requirement
require("./db/connection");
// const Student = require("./models/register");
const User = require("./models/register")
const UserInfo = require("./models/contact");

// Connect static pages
const static_Path = path.join(__dirname,"../public");
app.use(express.static(static_Path));

// set views and partials
const view_Path = path.join(__dirname,"../templates/views");
const partials_Path = path.join(__dirname,"../templates/partials");
app.set("view engine","hbs");
app.set("views",view_Path);
hbs.registerPartials(partials_Path);

// for access data
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Routing for register
app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/tip",(req,res)=>{
    res.render("tip");
});
app.get("/services",(req,res)=>{
    res.render("services");
});
app.get("/app",(req,res)=>{
    res.render("app");
});
app.get("/videos",(req,res)=>{
    res.render("videos");
});
app.get("/login",(req,res)=>{
    res.render("login");
});
app.get("/register",(req,res)=>{
    res.render("register");
});
app.get("/contact",(req,res)=>{
    res.render("contact");
});

// Registe user Details are store in data base
app.post("/register", async (req,res)=>{
    try {
        UserPassword = req.body.password;
        UserConfirmPassword = req.body.cpassword;
        // create Secure Password with hashing algo
        bcryptPassword = await bcrypt.hash(UserPassword,12);
        // Check Password with Confirm Password
        if(UserPassword === UserConfirmPassword){
            const clintRecode = new User({
                name:req.body.name,
                address:req.body.address,
                email:req.body.email,
                phone:req.body.phone,
                gender:req.body.gender,
                password:bcryptPassword,
                cpassword:bcryptPassword
            });
            const data = await clintRecode.save();
            console.log(data);
            res.render("app",{data:"your data are stored successfully...."});
        }
        else
        res.render("app",{data:"Please Enter valid contact details"});
    } catch(error){
        res.render("app",{data:`Please Enter valid contact details ${error}`});
    }
});

// // LogIn Page = match user data from data base then login user
app.post("/login", async (req,res)=>{
    try {
        UserEmail = req.body.email;
        const UserData = await User.findOne({email:UserEmail})
        // compare hash or secure password
        const ismatch = await bcrypt.compare(req.body.password,UserData.password);
        if(ismatch){
            res.render("app",{data:"Your are login successfully"});
        }
        else
        res.render("app",{data:"Please enter valid login details"});
    } catch(error){
        res.render("app",{data:"Please enter valid login details"});
    }
});

// store Contact information of the user into database
app.post("/", async (req,res)=>{
    try {
            const Userrecode = new UserInfo({
                name:req.body.name,
                email:req.body.email,
                phone:req.body.phone,
                date:req.body.date,
                dtype:req.body.dtype,
            });
            const data = await Userrecode.save();
            console.log(data);
            res.render("app",{data:"You are registered successfully..."});
        }
    catch(error){
        res.render("app",{data:"Invaled register details",url:"/#contact"});
    }
});

// Server is listen on port
app.listen(port,()=>{
    console.log(`Server Is Listen On Port ${port}`);
});