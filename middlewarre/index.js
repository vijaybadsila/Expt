const fs=require("fs")
function logReqRes(filename){
    return (req,res,next)=>{
 
    fs.appendFile(
        "filename",`${Date.now()}:${req.method}:${req.path}\n`,(err,data)=>{
            console.log("middleware started")
            next()
        }
    )

    }



}
module.exports={
    logReqRes
}