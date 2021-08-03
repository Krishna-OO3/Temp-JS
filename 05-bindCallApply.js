// this keyword always refers to the current instances of the class.
// In javascript the value of " this " depends on how the function is called.

const person = {
    firstname: 'Krishna',
    lastname: 'Venkat',
    fullname : function () {
        console.log(this.firstname + ' ' + this.lastname);
    }
};

person.fullname();
// we call the fullname() method using the person object 
// So, "this" keyword inside the method refers to the person object


const printfullname = person.fullname;
printfullname();
// We are storing a reference of person.fullname to "printfullname" variable.
// after which we call it without an object reference so, "this" will now refer to the global object or undefined (in strict mode).

// in the strict mode "this" refers to "udefined", so console.log will return an error.

// Call , Bind and Apply
// bind , call & apply are used to set "this" keyword independent of how the function is called.

// BIND():
// The bind method creates a new function and sets the " this " keyword to the specified object

const john = {
    name : 'john',
    age : 24,
};
const jane = {
    name : 'jane',
    age : 27,
};

function greeting(greet, lang) {
    console.log(lang);
    console.log(`${greet}, I am ${this.name} and I am ${this.age} years old - lang = ${lang}`);
}
// We can use " bind " method on the greeting function to bind the " this " keyword to john and jane objects.

const greetjohn = greeting.bind(john, 'Hi' , 'en');
greetjohn();
const greetjane = greeting.bind(jane, 'Hola', 'es');
greetjane();

// Greeting.bind(john) creates a new function with this set to john object.
// Which we then assign to greetjohn variable ... similarly for greetjane.


// CALL():
// The call method sets the "this" inside the fucntion and immediately executes the function.
// The major difference between call and bind is that call sets the " this " keyowrd and executes the function immediately
// And it does not create a new copy of the function, while the bind() creates a copy of that fucntion and sets the " this " keyword.

greeting.call(john, 'Bonjour', 'French');
greeting.call(jane, 'Hey', 'Espanol');

// call does not create a new function. We directly set the " this " keyword using call().


//APPLY():
// The apply method is similar to call.
// the difference is that the apply() method accepts an array of arguments instead of comma seperated values.

greeting.apply(john, ['Bonsoir', 'French']);
greeting.apply(jane, ['Bueanas Tardes', 'Espanol']);

// This keyword behave differently in javascript.
// The call bind and apply methods can be used to set the " this " keyword independent of how a function is called.

// The BIND method creates a copy of the function and sets " This " keyword
// While the CALL and APPLY methods sets the " This " keyword and calls the function immediately.
