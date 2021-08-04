
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


// const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async () => {
//   try {
//     const first = await readFile('./content/first.txt', 'utf8')
//     const second = await readFile('./content/second.txt', 'utf8')
//     await writeFile(
//       './content/result-mind-grenade.txt',
//       `THIS IS AWESOME : ${first} ${second}`,
//       { flag: 'a' }
//     )
//     console.log(first, second)
//   } catch (error) {
//     console.log(error)
//   }
// }

// start();
