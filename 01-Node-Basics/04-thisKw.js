// This keyword
// const object2 = {
//     myFunction4(){
//         console.log(this);
//     }
// }
// const obj = {
//     myFunction(){
//         console.log(this); // == global
//     },
//     myFunction3() {
//         function myFunction4() {
//             console.log(this);
//         }
//         return obj.myFunction4()
//     }
// }

function myFunction2(){
    return this;
}

// const test1 = obj.myFunction
//test1(); [ Funvtion invoked directly ] --> We got the global variable 
//obj.myFunction(); --> [ We call the Function from the Object {invoked on object}]We got the object itself from this
//obj.myFunction3(); -->  We get the global variable

// new keyword
const myOwn = myFunction2();
const myOwn2 = myFunction2();

myOwn.a = 100;
myOwn2.a = 200;

console.log(myOwn.a);
console.log(myOwn2.a);
// When new keyword is used:
// - An object is created pointing to the constructor function
// - " This " iside the particular function actually points to the new object " myOwn " 
