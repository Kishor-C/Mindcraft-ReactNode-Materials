// this program must convert Javascript to JSON & write the JSON to JSON file
let fs = require('fs');
let emp = {id: 100, name : "Raj", salary : 35000};
// convert Javascript to JSON
let jsonString = JSON.stringify(emp); 
fs.writeFileSync('demo.json', jsonString);
console.log('done!')