// const User = require("../models/user")

// // Get all users
// async function handleGet(req, res) {
//   try {
//     const allDbUsers = await User.find({})
//     if (!allDbUsers || allDbUsers.length === 0) {
//       return res.status(404).json({ message: "No users found" })
//     }
//     res.setHeader("myName", "Vijay Badsila")
//     return res.json(allDbUsers)
//   } catch (err) {
//     console.error(err)
//     return res.status(500).json({ error: "Server error" })
//   }
// }

// // Get user by ID
// async function handleGetUserById(req, res) {
//   try {
//     const user = await User.findById(req.params.id)
//     if (!user) return res.status(404).json({ error: "User not found" })
//     return res.json(user)
//   } catch (err) {
//     console.error(err)
//     return res.status(500).json({ error: "Server error" })
//   }
// }

// // Update user by ID
// async function handleUpdateUserById(req, res) {
//   try {
//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       { gender: "changed" }, // example update
//       { new: true }
//     )

//     if (!updatedUser) {
//       return res.status(404).json({ error: "User not found" })
//     }

//     return res.json({ status: "success", data: updatedUser })
//   } catch (err) {
//     console.error(err)
//     return res.status(500).json({ error: err.message })
//   }
// }

// // Create user
// async function handleCreateUser(req, res) {
//   const body = req.body
//   if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
//     return res.status(400).json({ message: "All fields are required" })
//   }

//   try {
//     const result = await User.create(body)
//     console.log(result)
//     return res.status(201).json({ message: "success", id: result._id })
//   } catch (err) {
//     console.error("Error", err)
//     return res.status(500).json({ error: err.message })
//   }
// }

// // Delete user by ID
// async function handleUserDelete(req, res) {
//   try {
//     await User.findByIdAndDelete(req.params.id)
//     return res.json({ status: "success", data: "deleted" })
//   } catch (err) {
//     console.error(err)
//     return res.status(500).json({ error: err.message })
//   }
// }

// module.exports = {
//   handleCreateUser,
//   handleGet,
//   handleGetUserById,
//   handleUpdateUserById,
//   handleUserDelete,
// }

const User= require("../models/User")
async function handleGetAllUsers(req,res){
  console.log('vijay')
   try{
      const allDbUser= await User.find({})
    res.setHeader("myheader","vijay")
 return   res.json(allDbUser)

   }
   catch(err){
    res.json({err})
   }
}


async function getUserById(req,res){
      const Data= await User.findById(req.params.id)

res.send(Data)
}
async function handleCreateUserByIdd(req,res){
      const body= req.body;
   if(!body || !body.first_name || !body.gender || !body.email|| !body.last_name || !body.job_title){
    return res.status(404).json({mess:"All field are Required  to filed"})
   }
const result=  await User.create({
first_name:body.first_name,
last_name:body.last_name,
email:body.email,
job_title:body.job_title,
gender:body.gender
   })

   console.log(result) 
 return res.status(201).json({message:"Created"})
}
async function DeleteData(req,res){
  await User.findByIdAndDelete(req.params.id )
       return res.status(200).json({mess:"Deleted"})
}
async function handleUpdateUserByIdd(req,res){
  await User.findByIdAndUpdate(req.params.id, { gender: "CHanged" })
  return res.status(200).json({ mess: "seccuss" })
}
module.exports={
  handleGetAllUsers,
  getUserById,
  handleUpdateUserByIdd,
  DeleteData,
  handleCreateUserByIdd
}