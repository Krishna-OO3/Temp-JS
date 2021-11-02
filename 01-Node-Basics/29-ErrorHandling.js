// Errors and error handling

// Errors in js
// Error
//console.log(Error);
// console.log(new Error('Oops vijay'));

// Error
//throw new Error('oops this is not right to be in mute!');
//Error
const myError = new Error('oops');
// 3 built in properties
//console.log(myError.name);
//console.log(myError.message);
//console.log(myError.stack)

//ex
function a() {
    const b = new Error('what??');
    return b;
}

//console.log(a());
//console.log(a().name)

// built in errors
//new Error
//SyntaxError
//(,)
//ReferenceError
//console.log(something);

// The flow in js
// Error -> catch -> catch ->

// 1. Try/ catch
// 2. Catch method

// Try/catch
function fail() {
    try {
        console.log('THis works');
    } catch (err) {
        console.log('We have made some error' + err);
    }
}

//fail();
function fail1() {
    try {
        conso.log('THis works');
    } catch (err) {
        console.log('We have made some error ' + err);
    }
}

//fail1();
function fail2() {
    try {
        throw new Error('Same nasty Error');
        console.log('THis works');
    } catch (err) {
        console.log('We have made some error' + err);
    }
}

// finally
function fail4() {
    try {
        console.log('THis works');
        throw new Error('Same nasty Error');
    }catch (err){
        console.log('We have made some error' + err);
    }finally {
        console.log('Still good');
    }
}

//fail4();
function fail5(){
    try{
        console.log('THis works');
        throw new Error('Same nasty Error');
    }catch (err){
        console.log('We have made some error' + err);
    }finally {
        console.log('Still good');
    }
    console.log('!!!!!!!!!!!!!!!11#######');
}

//fail5();
function fail6(){
    try {
        try {
            something();
        }catch (e){
            throw new Error('VIJAy');
        }
    }catch (e){
        console.log('got it',e);
    }
}

/*
Promise.resolve('Async failed')
    .then(resp => {
        throw new Error('No 1 Failed');
        return resp;
    }).then(res => {
    console.log(res);
}).catch(err => {
    return err;
}).then(resp => {
    console.log(resp);
})*/

/* Promise.resolve('Async failed')
    .then(resp => {
        throw new Error('No 1 failed');
        return resp
    }).then(resp => {
        console.log(resp)
}).catch(err => {
    return err
}).then(resp => {
    throw new Error('gg');
}).catch(err => {
    console.log('Final error',err);
})*/

//Extending error
// Error -
class AuthenticationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'autherror';
        this.favouriteAnimal = 'dog';
        this.erroCode = 2445;
    }
}
class DatabaseError extends Error {
    constructor(message) {
        super(message);
        this.name = "DB connection error";
        this.version = "v2";
    }
}
const a1 = new AuthenticationError('oops');
console.log(a1.favouriteAnimal);