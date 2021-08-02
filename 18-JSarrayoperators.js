// 1. Reduce operation
// 1.1 array.reduce() - method

// array.reduce(callback,[initialValue]) 
//reduces the array to a value by invoking vallback function as a reducer.
// each iteration callback (accumulator, item[,index,[,array]]) is invoked with arguments such as:
// accumulator, current item , index and the array itself. It should return the accumulator.

// example:
// const items = [1,2,3];

// function Avail(accumulator, nade) {
//     return accumulator + nade;
// }
// const sum = items.reduce(Avail, 0);
// console.log(sum);

// 2. Map operation
// 2.1 array.map() - method

// array.map(callback) method creates to a new array by using callback invocation result on each arrayitem.
// On each iteration callback(item[, index[, array]]) is involked with arguments such as:
// current item, index and the array itself. It should return a new item.

// example:
// const newItems = items.map(function increment(item){
//     return item + 1;
// });

// console.log(newItems);

// 2.2 array.from() function:

// const newnum = Array.from(items, 
//     function increment(item) {
//         return item + 1;
//     }
// );

// console.log(newnum);

// Slice -> array.slice() method
// Returns a slice of the array starting "fromIndex" and ending "toIndex". fromIndex optional arguments defaults to "0" , toIndex optional argument defaults to array.length

// example
const names = ['Batman', 'Nightwing', 'Robin', 'Catwoman', 'joker', 'Poison-ivy', 'Bane'];

const heroes = names.slice(0,3);
const neutral = names.slice(3,4);
const villans = names.slice(4,7);

// console.log(heroes);
// console.log(villans);
// console.log(neutral);

// Search methods:
// array.includes()
// array.includes(itemToSearch[, fromIndex]) Returns a boolean whether array contains intemtoSearch. The optional argument fromIndex, defaulting to '0', indicates the index to start searching.

// example:
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(99));
console.log(numbers.includes(2));

// array.find()
// array.find(predicate) method returns the first array item that satisfies the predicate function.
// On each iteration predicate function is invoked with the arguments : iterated item, index, and the array itself.

// example:

function isEven(number) {
    return number % 2 == 0;
}

const evenNumber = numbers.find(isEven);
console.log(evenNumber);

// array.indexOf()
// Returns the indexx of the first appearance item to search in array. 
// The optional argument from index , defaulting '0', is the index to start searching.
// example:

const index = names.indexOf('joker');
console.log(index);

// Filter -> array.filter()
// array.filter(predicate) method returns a new array with items that have passed predicate check.
// on each iteration predicate function is invoked with the arguments: integrated item , index and the array itself.

// example:

const num = [1, 5, 7, 20];

function even(nums) {
    return nums % 2 == 0;
}

const evens = num.filter(even);
console.log(evens);

// Remove -> array.pop(), array.push(), array.splice(), spread operator
// array.pop():
// this method removes the last item from an array, then returns that item.
// examples:

const colors = [ 'blue', 'green', 'yellow'];

const lastColor = colors.pop();
console.log(lastColor);
console.log(colors);

// array.splice();
// array.splice() removes items from an array and inserts new items instead.
// examples:

names.splice(3,4, 'Bat-Woman');

console.log(names);

// array.splice()
// this removes items from an array and inserts new items instead
// if remove count argument is omitted then array.splice() removes all elements of the array starting from index
// examples:

colors.splice(0);
console.log(colors);

// concat -> array.concat() method
// Concatenates to the original array one or more arrays.

const everyone = heroes.concat(neutral);
console.log(everyone);
// creates new array without mutating the original one.

// query -> array.some() methods
// array.every() :
// array.every  method returns true if every item passes predicate check.
// On each iteration predicate function is invoked with the arguments: interated item, index and array itself.
// example:

const evenNum = [0, 2, 4, 6];
const n = [0, 1, 4, 6];

function Eve(numb) {
    return numb % 2 == 0;
}

console.log(evenNum.every(Eve));
console.log(n.every(Eve));

// insert method
// array.unshift()
// This method appends one or more items to the begenning of an array , returning the new length of the array.
const Name = ['Bruce Wayne'];
Name.unshift('Selena kyle');

console.log(Name);

// flatten method
// array.flat()
// This method creates a new array by recursively flattening the items that are arrays until certain depth.
// depth optional argument defaults to 1.
// example:

const arr = [0,[1,2,3],[4,5],6];

const flatarray = arr.flat();
console.log(flatarray);

// sort method
// array.sort()
// This method sorts the items of the array.
// When the compare function is omitted , the method converts the items to strings, then orders them in ascending UTF - 16 code units values.
// example:
const letters = ['B', 'C', 'A'];
letters.sort();
console.log(letters);

// fill method
// array.fill()
// array.fill -> fills the array with value startng from index until to index.
// example:

const ducks = [ 1, 2, 5, 9];
ducks.fill(20);
console.log(ducks);
