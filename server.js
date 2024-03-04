console.log("server")
// express : for routing

const express=require("express")

let app = express()
app.get('/',(req,res)=>{
    return res.send("i am running")
})
app.listen(3000,()=>{
    console.log("server is running on 3000 port")
})
