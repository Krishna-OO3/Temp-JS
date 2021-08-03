// example - for
// for (let i = 0 ; i < 5; i++) {
//     console.log(i);
// }

// For is a general looping statement
// Let i = 0 -> which executes before start.
// i < 5 -> which is the "condition" for running the block of code within your loop
// i++ -> which runs after each "iteration" of your loop
// Our i starts at 0 , and as long as i smaller than 5 , we will run the code block.
// However after each loop , we add 1 to our i, as shown in the iterative statement "i++".


// example: 
const foodavail= [
    {name: 'Burrito'},
    {name: 'Pizza'},
    {name: 'Burger'},
    {name: 'Tacos'},
    {name: 'Pasta'}
];

// general for loop
// for (let i=0 ; i < foodavail.length; i++) {
//     console.log(`i value : ${i} | Food name :`, foodavail[i]);
// }

// Using forEach
// foodavail.forEach((Food,Index) => {
//     console.log(`i value : ${Index} | Food name : `, Food);
// });

// forEach method exist within all arrays.
// foodavail is an array that inherits all the various methods from Array.prototype
// In forEach method we pass in a function that will be executed in each iteration.

// 1.forEach keeps the variable's scope to the bloack
// example 1.1:
// const num = 4;
// const batarang = [1,3,5];

// batarang.forEach(num => {
//     console.log(num);
// });
// result : 1 3 5
// console.log(num);
// result : 4

// 2.Lower chance of accidental errors with forEach 

// 3.forEach is easier to read.

// 4.You can break out of a for loop earlier
// --> using break