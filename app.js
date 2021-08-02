// npm --global command , comes with node
// npm -- version

// local dependency - use it only in particular project
// npm i <packagename>

// global dependency - use it in any project
// npm install -g <packagename>

// package.json - manifest file ( stores important info about project/package )
// manual approach ( create package.json in the root , create properties etc, )
// npm init ( step by step , press enter to skip )
// npm init -y ( everything default )

// const _ = require('lodash')

// const items = [1,[2,[3,[4]]]]
// const newItems = _.flattenDeep(items)
// console.log(newItems);
// console.log('hello people');

// const http = require('http')

// const server = http.createServer((req,res) => {
//     if (req.url === '/') {
//         res.end('Home page')
//     }
//     else if (req.url === '/about') {
//         // Blocking code
//         for (let i = 0; i < 10; i++ ){
//             for (let j = 0; j < 10; j++){
//                 console.log(`${i} ${j}`);
//             }
//         }
//         res.end('About page');
//     }
//     else {
//         res.end(' Error page');
//     }
    
// })

// server.listen(4500, () => {
//     console.log('Server Listening on port 4500...');
// })


// const { readFile, } = require('fs')

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path , 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))


const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf8')
    await writeFile(
      './content/result-mind-grenade.txt',
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: 'a' }
    )
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start();
