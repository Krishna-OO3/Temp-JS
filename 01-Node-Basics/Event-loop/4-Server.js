const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('Hi There')
})

server.listen(4000, () => {
    console.log('Server Listening on port : 4000....');
})
