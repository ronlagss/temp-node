const http = require('http')

const server = http.createServer((req, res) => { //req = request and res = response
    if(req.url === "/") { // slash means homepage 
        res.end('Hello to our home page')
    }
    else if(req.url === '/about') {
        res.end('this is about page')
    }
    else {res.end(
        `<h1> OOPS!! </h1>
        <p> no page yet </p>
        <a href="/"> go home <a>`    
    )
    }
})

server.listen(5000);