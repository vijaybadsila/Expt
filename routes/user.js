const express = require("express");
const router = express.Router();

const {getUserById,
  handleGetAllUsers,
  handleUpdateUserByIdd,
  DeleteData,
  handleCreateUserByIdd
}=require("../controllers/user")

// router.get("/users", async (req,res)=>{
//     const allDbUser= await User.find({})
//  const html=
// `
// <ul>
// ${allDbUser.map((user)=>`<li>${user.first_name} ,${user.email}</li>`)}
// </ul>
// `
// res.send(html)
// })


// router.get("/",handleGetAllUsers)
// router.get("/:id" , getUserById)
// router.post("/", handleCreateUserByIdd)
// router.patch("/:id", handleUpdateUserByIdd)
// router.delete("/:id",DeleteData)
console.log('from this side.....')
router
  .route("/")
  .get(handleGetAllUsers)   // GET / → get all users
  .post(handleCreateUserByIdd) // POST / → create user

router
  .route("/:id")
  .get(getUserById)         // GET /:id → get user by ID
  .patch(handleUpdateUserByIdd) // PATCH /:id → update user
  .delete(DeleteData)       // DELETE /:id → delete user


module.exports=router;