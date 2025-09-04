// const mongoose=require("mongoose")
//  async function connectMongoDb(){
//     return mongoose.connect("mongodb://127.0.0.1:27017/mydb")
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.error(err));
//  }
//  module.exports={
//     connectMongoDb
//  }
const mongoose = require("mongoose");

async function connectMongDB(url){
  return mongoose
  .connect(url)
  .then(() => console.log("Mongoose connected"))

}
module.exports={
  connectMongDB
}