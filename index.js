// const express = require("express")
// const app=express();
// const userRouter=require("./routes/user")
// const {connectMongoDb}=require("./connection")

// const {logReqRes} = require ("./middleware/")
// app.use(express.urlencoded({extended:false}))


// app.use(logReqRes('log.txt'))

// app.use('/user',userRouter)

// app.listen(8000,()=>{
//     console.log("server started")
// }) 

// const fs=require("fs")
// const express=require("express")
// const app=express();
// const users =require("./MOCK_DATA (1).json")
// app.use(express.urlencoded({extended:false}))
// app.use((req,res,next)=>{
//     fs.appendFile(
//         "log.txt",`${Date.now()}:${req.method}:${req.path}\n`,(err,data)=>{
//             next()
//         }
//     )
// })
// app.get("/users",(req,res)=>{
//  const html=
// `
// <ul>
// ${users.map((user)=>`<li>${user.first_name} ,${user.email}</li>`)}
// </ul>
// `
// res.send(html)
// })
// app.get("/api/users",(req,res)=>{
//     res.setHeader("myheader","vijay")
//  return   res.json(users)

// })

// app.get("/api/users/:id",(req,res)=>{
// const id=req.params.id
// const User=users.find((users)=>users.id==id)
// res.send(User)
// })


// app.post("/api/users",(req,res)=>{
//     const body= req.body;
//     users.push({...body,id:users.lengh+1})
//     fs.writeFile("./MOCK_DATA (1).json",JSON.stringify(users),(err,data)=>{
//         return res.status(200).json({mess:"seccess"})
//     })
 
//    console.log(body) 
// })
// app.patch("/api/users/:id",(req,res)=>{
//     return res.status(200).json({mess:"pending"})
// })
// app.delete("/api/users/:id",(req,res)=>{
//        return res.status(200).json({mess:"pending"})
// })
// app.listen(3000,(req,res)=>console.log("server started"))
// const fs=require("fs")
// const mongoose=require("mongoose")
// const express=require("express")
// const app=express();
// const users =require("./MOCK_DATA (1).json")
// app.use(express.urlencoded({extended:false}))
// mongoose
//   .connect("mongodb://127.0.0.1:27017/delimp")
//   .then(() => console.log("Mongoose connected"))
//   .catch((err) => console.error("Error", err));

// const UserSchema=mongoose.Schema(    {
// first_name:{
//     type:String,
//     required:true
// },
// last_name:{
//     type:String
// },
// email:{
//     type:String,
//     unique:true
// },
// gender:{
//     type:String
// },
// job_title:{
//     type: String
// }

// })
// const User=mongoose.model("user",UserSchema)

// app.use((req,res,next)=>{
//     fs.appendFile(
//         "log.txt",`${Date.now()}:${req.method}:${req.path}\n`,(err,data)=>{
//             next()
//         }
//     )
// })
// app.get("/users", async (req,res)=>{
//     const allDbUser= await User.find({})
//  const html=
// `
// <ul>
// ${allDbUser.map((user)=>`<li>${user.first_name} ,${user.email}</li>`)}
// </ul>
// `
// res.send(html)
// })
// app.get("/api/users", async (req,res)=>{
//     const allDbUser= await User.find({})
//     res.setHeader("myheader","vijay")
//  return   res.json(allDbUser)

// })

// app.get("/api/users/:id" , async(req,res)=>{
//     const Data=User.findById(req.params.id)

// res.send(Data)
// })


// app.post("/api/users", async (req,res)=>{
//     const body= req.body;
//    if(!body || !body.first_name || !body.gender || !body.email|| !body.last_name || !body.job_title){
//     return res.status(404).json({mess:"All field are Required  to filed"})
//    }
// const result=  await User.create({
// first_name:body.first_name,
// last_name:body.last_name,
// email:body.email,
// job_title:body.job_title,
// gender:body.gender


//    })
//    console.log(result) 
//  return res.status(201).json({message:"Created"})

// })
// app.patch("/api/users/:id", async (req, res) => {
//   await User.findByIdAndUpdate(req.params.id, { gender: "CHanged" })
//   return res.status(200).json({ mess: "seccuss" })
// })

// app.delete("/api/users/:id", async (req,res)=>{
//       await User.findByIdAndDelete(req.params.id, { gender: "CHanged" })
//        return res.status(200).json({mess:"Deleted"})
// })
// app.listen(3000,(req,res)=>console.log("server started"))







const express=require("express")
const app=express();
const {connectMongDB} =require("./connection")
const {logReqRes}=require("./middlewarre");
// const  router = require("./routes/user");
app.use(express.json());

 const userRouter =require("./routes/user") 
// app.use('/api',router)

connectMongDB("mongodb://127.0.0.1:27017/stu")

app.use(express.urlencoded({extended:false}))
// 
app.use("/users",userRouter)

app.use(logReqRes("log.txt"))

app.listen(3000,(req,res)=>console.log("server started"))

