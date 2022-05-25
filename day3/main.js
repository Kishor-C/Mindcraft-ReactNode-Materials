console.log('main script begins');
// anonymous function 
setTimeout(function() { 
    console.log('callback executes after 0s')
} , 0);
// arrow function as a callback
setTimeout(() => console.log('callback executes after 1s'), 1000);
console.log('main script ends');