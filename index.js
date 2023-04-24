const fs = require('fs')
const url = require('url')
const http = require('http')

http.createServer(function(req, res){
   const q = url.parse(req.url)
    switch (q.pathname) {
        case "/":
            fs.readFile("./index.html", 'utf8', (err, data) => {
                if (err) throw err
                res.writeHead(200, {"Content-Type": "text/html"})
                res.write(data)
                res.end()
            })
            break;
        case "/about":
            fs.readFile("./about.html", 'utf8', (err, data) => {
                if (err) throw err
                res.writeHead(200, {"Content-Type": "text/html"})
                res.write(data)
                res.end()
            })
            break;
    case "/contact-me":
            fs.readFile("./contact-me.html", 'utf8', (err, data) => {
                if (err) throw err
                res.writeHead(200, {"Content-Type": "text/html"})
                res.write(data)
                res.end()
            })
            break;
    
        default:
            fs.readFile("./404.html", 'utf8', (err, data) => {
                if (err) throw err
                res.writeHead(200, {"Content-Type": "text/html"})
                res.write(data)
                res.end()
            })
            break;
    }
}).listen(8080)