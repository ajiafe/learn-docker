const express = require("express")
const app = express()
const PORT = 3000


app.get("/",(req,res)=>{
    res.send("<p>大家好啊！</p>")
})

app.listen(PORT,()=>{
    console.log("running at 3000 prot");
})