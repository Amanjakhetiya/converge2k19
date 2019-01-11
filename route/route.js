const route=require('express').Router();
const user=require('../schema/user.js')



route.post('/usersignup',(req,res)=>{
  console.log(req.body)
 var use=new user()


 use.fname=req.body.fname;
 use.lname=req.body.lname;
 use.email=req.body.email;
 use.team_id=Math.floor(Math.random()*(1000-1)+1)
 use.password=req.body.password
 use.college=req.body.college
 console.log(use)
 user.findOne({email:use.email}).then((us)=>{
   if(!us)
   {
     use.save().then((used)=>{
       console.log(used+' saved')
     })
   }
   else {
     console.log("User already exist")
   }
 })
})

route.get('/home.html',function(req,res){
  res.render('home')
})

route.get('/',function(req,res){
  res.render('home')
})
route.get('/team.html',(req,res)=>{
  res.render('team')
})

route.get('/highlights.html',(req,res)=>{
  res.render('highlights')
})

module.exports=route
