const express = require("express")
const app = express()
const port = process.env.PORT || 3000
app.listen(port,()=>{console.log("start")})
app.use(express.static('./public'))
app.get("/",(req,res)=>{res.sendFile(__dirname + "/public/index.html")})
