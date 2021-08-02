// Hoisting -> JS hoisting referes to the process whereby the compiler allocates the memory for the variable and function declarations prior to execution of the code.

// one of the advantages of JS putting function declarations into memory before it executes any code segment is that it allows us to use a function before we declare it in the code.
// example:
cats("tiger");

function cats(name) {
    console.log("My cat's name is " +name);
}

cats("Boris");
// Even though we call the function in our code first, before the function is written, the code still works.

// example2:
console.log(myFunction());

function myFunction() {
    return 100;
}

// Only declarations are hoisted - JS hoists only Declarations not Initializations.
// example:
var x; // declaration
console.log(x); // returns "undefined" from hoisted var declaration.
x = 100; // initialization

// example2:
console.log(num); // Throws ref - error
num = 6; // Initialization

// example3:
x = 1;
console.log(x +''+ y);
var y = 2;

x = 'cran';
y = 'berry';
console.log(x +''+ y);

// var and functions are only hoisted