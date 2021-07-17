const exp=require('express')

const userApi=exp.Router();
const errorhandler= require("express-async-handler")
const bcryptjs=require("bcryptjs")
const jwt =require("jsonwebtoken")
require("dotenv").config()

//body parser middleware
userApi.use(exp.json())





//getuser by asycn and await
userApi.get('/getusers',errorhandler(async(req,res)=>{

    let userCollectionObj = req.app.get("userCollectionObj")
    let userlist= await userCollectionObj.find().toArray()
    
    res.send({message:userlist})
}))





//get user by username using async and await
userApi.get('/getuser/:username',errorhandler(async(req,res)=>{
    let userCollectionObj = req.app.get("userCollectionObj")
    let un=req.params.username
    let userobj = await userCollectionObj.findOne({username:un})
    if(userobj===null){
        res.send("no user existed with username" )
    }
    else{
        res.send({message:userobj})
    }
}))





//creating a new user with async and await
userApi.post("/createuser",errorhandler(async(req,res)=>{
    let userCollectionObj = req.app.get("userCollectionObj")
    newuser=req.body;
    let user= await userCollectionObj.findOne({username:newuser.username})
    if(user===null){
        //hash password
        let hashedpassword=await bcryptjs.hash(newuser.password,7)
        //replace password
        newuser.password=hashedpassword
        //insert
       await userCollectionObj.insertOne(newuser)
        res.send({message:"regestration is successfull"})
    }
    else{
        res.send({message:"user already existed"})
    }
}))


//taking rating from user
userApi.post("/movierating",errorhandler(async(req,res)=>{
    let ratingcollectionobj = req.app.get("ratingcollection")
    rating=req.body;
    let user= await ratingcollectionobj.findOne({username:rating.username})
    if(user===null){
        //insert
       await ratingcollectionobj.insertOne(rating)
        res.send({message:"rating is successfull"})
    }
    else{
        res.send({message:"user already gave rating"})
    }
}))

userApi.get("/ratings",errorhandler(async(req,res)=>{
    let ratingcollectionobj = req.app.get("ratingcollection")
    let ratinglist= await ratingcollectionobj.find().toArray()
    
    res.send({message:ratinglist})
    
}))




userApi.post("/login",errorhandler(async(req,res)=>{
    let userCollectionObj = req.app.get("userCollectionObj")
    let credentials=req.body;
    let user = await userCollectionObj.findOne({username:credentials.username})
    if(user===null){
        res.send({message:"please Register to Login"})
    }
    else{
       let result=await bcryptjs.compare(credentials.password,user.password)
       if(result===false){
           res.send({message:"invalid password"})
       }
       else{
           //create a token 
           let signedtoken=jwt.sign({username:credentials.username},'abcdef',{expiresIn:120})
           //send token to client
           res.send({message:'login success',token:signedtoken,username:credentials.username,userObj: user})
       }
    }
}))

userApi.post("/contactform", errorhandler(async(req,res)=>{
    let contactscollection = req.app.get("contactscollection")
    query=req.body;
    await contactscollection.insertOne(query)
    res.send({message:"your query successfully submitted"})

}))

module.exports=userApi