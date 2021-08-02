setInterval(() => {
    console.log('I will run second');
}, 2000);
console.log(' I will run first');
// process stays alive unless i kill it
// unexpected error