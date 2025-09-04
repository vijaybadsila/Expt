const mongoose =require("mongoose")

const UserSchema=mongoose.Schema(    {
first_name:{
    type:String,
    required:true
},
last_name:{
    type:String
},
email:{
    type:String,
    unique:true
},
gender:{
    type:String
},
job_title:{
    type: String
}

})
const User=mongoose.model("user",UserSchema)
module.exports={User};