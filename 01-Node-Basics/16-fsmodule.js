// FS Module

const {readFileSync, writeFileSync} = require('fs');
console.log('start');
// readfilesync
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

console.log(first, second);

// writefilesync

writeFileSync(
    './content/result-sync.txt',
    ` Here is the result : ${first}, ${second}`,
    {flag:'a'} // append
)
console.log('done with the task');
console.log('starting the next one');