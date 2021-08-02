const path = require('path');

console.log(path.sep);

// join
const filepath = path.join('/content', 'subfolder', 'text.txt')
console.log(filepath);


// base name
const base = path.basename(filepath)
console.log(base);

// resolve
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);
