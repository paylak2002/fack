const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require("body-parser")
var arrayMassig = []
var text = ""
var header = "<html><head></head><body>"
var footer = "</body></html>"
app.listen(port,()=>{console.log("start")})
app.use(express.static('./public'))
app.use(bodyParser())
app.get("/",(req,res)=>{res.sendFile(__dirname + "/public/index.html")})
app.post("/",(req,res) => {
	arrayMassig.push(req.body.text)
	res.sendFile(__dirname + "/public/index.html")
})
app.get("/admin",(req,res)=>{
	for(var i in arrayMassig)
	{
		text = text + "<h1>" + arrayMassig[i] + "</h1>"
	}
	res.send(header + text + footer)
})
