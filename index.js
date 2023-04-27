const express = require('express')
const path = require('path')

const app = express()

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/index.html"))
})

app.get("/about", function (req, res) {
    res.sendFile(path.join(__dirname, "/about.html"))
})

app.get("/contact-me", function (req, res) {
    res.sendFile(path.join(__dirname, "/contact-me.html"))
})

app.use(function(req, res){
    res.sendFile(path.join(__dirname, "/404.html"))
})

app.listen(3000, function(){
    console.log("Now listening on port 3000")
})