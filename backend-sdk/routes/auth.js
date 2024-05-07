import express from 'express';
const router = express.Router();

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../mongo/models/User.js';
//import Cuser from "../mongo/models/Cuser.js";
// import { Caterer } from '../models/Cuser.js';
//import {dishavail,Cater} from  '../mongo/models/Cater.js';
import Caterers from '../mongo/models/Caterer.js';
import Caterer from '../mongo/models/Caterer.js';
import Userposts from '../mongo/models/Userposts.js';
import Book from '../mongo/models/Book.js'
router.get("/",(req,res)=>{
    res.send("User API");
});
// user signup
router.post("/usignup", async(req, res) => {
    try {
        console.log(req.body)
        const user = await User.create(
        {...req.body, password: bcrypt.hashSync(req.body.password, 10)}
        );
        res.status(201).json({ user:user._id });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});
// cuser signup
router.post("/csignup2", async(req, res) => {
    console.log("req.body");
    const { cname,caddress,dish,email,ph,password,count } = req.body;
    try {
        console.log("hii")
       
        const salt = bcrypt.genSaltSync(10)
        const user = await Caterers.create(
            {cname:cname,caddress:caddress,dish:dish,email:email,ph:ph,password:password,count:count}
        );
        console.log(user)

      
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});
//  user delete
router.delete("/udelete/:id",async(req,res)=>{
    try{
        const user = await User.findOneAndDelete({username:req.params.id});
        if(!user){
            return res.status(404).json({error:"Not Found"});
        }else{
            console.log("User deleted");
            res.status(200).json(user);
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:err.message});
    }
});

router.delete("/cdelete/:id",async(req,res)=>{
    try{
        const user = await Caterers.findOneAndDelete({c_username:req.params.id});
        if(!user){
            return res.status(404).json({error:"Not Found"});
        }else{
            console.log("User deleted");
            res.status(200).json(user);
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:err.message});
    }
});
//  user login
router.post("/ulogin",async (req,res)=>{
    try{
        console.log(req.body)
        const {username,password} = req.body;
        const auth = await User.findOne({username: username});
        console.log(auth)
        if (auth){
            if(bcrypt.compareSync(password,auth.password)){
                const token = jwt.sign({id:auth._id},"secret-key");
                res.status(200).json({auth:auth._id,token:token,username:username});
                
            }
            else{
            res.status(500).json({message:"Invalid Password"});
            }
        }
        else{
            res.status(500).json({message:"Invalid Email"});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:err.message});
    }
})

// cuser login
router.post("/clogin2",async (req,res)=>{
    try{
        const cname=req.body.username
        const password=req.body.password
        console.log(req.body)
       console.log(cname)
        const auth = await Caterers.findOne({cname,password});
        console.log(auth)
        if (auth){
                const token = jwt.sign({id:auth._id},"secret-key");
                res.status(200).json({auth:auth._id,token:token});
                console.log(auth)
                
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:err.message});
    }
})
//fill
// request for booking
router.post('/book',async (req,res)=>{
    console.log("book")
    console.log(req.body.dataToSubmit)
    console.log(req.body.description)
    console.log(req.body)
    console.log(req.body.date)
    try {
        const create=await Book.create({cname:req.body.cname,uname:req.body.uname,event:req.body.description,cid:req.body.cid,
            uid:req.body.uid,grandTotal:req.body.total,booked:req.body.dataToSubmit,date:req.body.date,
            response:false,rejected:false
        
        })
        res.json("done")
        
    } catch (error) {
        console.log(error)
    }
})
router.post('/response',async (req,res)=>{
    console.log(req.body)
    const up=await Book.findOneAndUpdate({_id:req.body.id},{response:true})
    res.json("done")
})
router.post('/reject',async (req,res)=>{
    console.log(req.body)
    const up=await Book.findOneAndUpdate({_id:req.body.id},{rejected:true})
    res.json("done")
})
router.post('/bookings',async (req,res)=>{
    console.log("bookings")
    console.log(req.body)
    const booking=await Book.find({cid:req.body.id})
    console.log(booking)
    res.json(booking)
})
router.post('/date',async (req,res)=>{
    const date=await Userposts.find({post_description:req.body.desc})
    console.log(date)
    res.json(date)

})
router.post("/fill",async (req,res)=>{
    console.log(req.body)
    const uid=req.body.uid
    const dish=req.body.dish
    const price=req.body.price
    const count=req.body.maxcount
    try {
        console.log("hii")
        const user=await Caterer.updateOne({_id:uid},{"$push":{dishavail:{name:dish,price:price}}})
        const user2= await Caterer.updateOne({_id:uid},{count:count})
        console.log(user)
        console.log(user2)
    } catch (error) {
        
    }
})
// user secret route
router.get("/ulogin",async (req,res)=>{
    if (req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token,"secret-key",(err,decoded)=>{
            if(err){
                res.status(401).json({error:"Invalid Token"});
            }
            else{
                res.status(200).json({message:"Authorized"})
            }
        })
    }
    else{
        res.status(401).json({error:"Token not provided"});
    }   
}
);
//get all caters
router.get("/caters",async (req,res)=>{
    console.log("hii")
    const allCaters=await Caterers.find({})
     res.json({caters:allCaters})

})
//get caterbyid
router.post("/caterbyid",async (req,res)=>{
    const id=req.body.id;
    //console.log(id)
    const cater=await Caterers.findById({_id:id})
    //console.log(cater)
    res.json(cater)
})
//
router.post("/bookingsdesc",async (req,res)=>{
    console.log("hii")
    const response=await Book.find({event:req.body.desc})
    console.log(response)
    res.json(response)
})
//get userposts
router.get("/userposts",async(req,res)=>{
    const allPosts=await Userposts.find({})
})
router.get("/clogin",async (req,res)=>{
    if (req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token,"secret-key",(err,decoded)=>{
            if(err){
                res.status(401).json({error:"Invalid Token"});
            }
            else{
                res.status(200).json({message:"Authorized"})
            }
        })
    }
    else{
        res.status(401).json({error:"Token not provided"});
    }
});
// user profile
router.get("/uprofile/:id",async(req,res)=>{
    try{
        const user = await User.findOne({username:req.params.id});
        if(!user){
            console.log("User not found");
            res.status(404).json({error:"Not Found"});
        }else{
            res.status(200).json(user);
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:err.message});
    }
});

router.get("/cprofile/:id",async(req,res)=>{
    try{
        const user = await Caterers.findOne({c_username:req.params.id});
        if(!user){
            return res.status(404).json({error:"Not Found"});
        }
        else{
            res.status(200).json(user);
        }
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
});
export default router;