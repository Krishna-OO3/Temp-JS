// Even loop Handler
const fs = require('fs')

console.log('Started a first task');
// Check File Path?
fs.readFile('./content/first.txt', 'utf-8', (err, res) => {
    if(err){
        console.log(err);
        return
    }
    console.log(res);
    console.log('completed first task');
})
console.log('starting next task');
// because readfile is asyncoronous 