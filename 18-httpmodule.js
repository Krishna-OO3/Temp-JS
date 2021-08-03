// basic http module

const http = require ('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Welcome to our home page');
        res.end()
        //return;
    }
    if(req.url === '/about'){
        res.write('Here is the history');
        res.end()
       // return;
    }
    res.write(`
    <h1>00PS!</h1>
    <p> We cannot seem to find the page you are looking for</p>
    <a href="/"> back home</a>
    `)
    res.end()
    return;
})

server.listen(5000)