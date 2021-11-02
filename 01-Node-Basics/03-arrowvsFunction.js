// Arrow function vs Regular function

// Arrow function:
// 1.Arrow functions are not hoisted
// 2. 'This' in arrow function is binded to the previous value

// const obj = {
//     somemethod: () =>{
//         return this
//     }
// }
// The value of " this " in arrow function is basically what its value would have been outside arrow function
// console.log(this);

// var a = obj.somemethod
// console.log(a());
// console.log(obj.somemethod());

// example:
// function myFunction() {
//     return () => {
//         return this;
//     }
// }

// const myobj = new myFunction()
// console.log(myobj());
// If we are using arrow function we cannot use new keyword with it.
// The arrow functions are created in such a way that the value inside them directly points to the parent and does not have a constructor.

// Regular function example:

// function myCar() {
//     this.fuel = 0;
       // this refers to mycar
//     this.refuel = function() {
//         console.log(this);
         // since the settimeout runs after 1.5 sec ,
         // when it calls the particular function which we passed it does not call it with the " ferrari " object 
         // it idependently calls it
//         const _this = this
//         setTimeout(function() {
             // so the this inside the settimeout does not really refer to the object anymore
             // using this.fuel += 100 doesnt change anything.
//             _this.fuel += 100;
//             console.log('refueled! current fuel = '+ _this.fuel);
//         }, 1500);
//     }
// }

// const ferrari = new myCar();
// ferrari.refuel();


// Arrow function with same example:

function myCar() {
    this.fuel = 0;
    // this refers to mycar
    this.refuel = function() {
        setTimeout(() => {
            // once we use arrow function " this " always would refer to parents value
            this.fuel += 100;
            console.log('refueled! current fuel = '+ this.fuel);
        }, 1500);
    }
}

const ferrari = new myCar();
ferrari.refuel();