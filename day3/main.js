
let jsObject = {id: 100, name : "Raj", salary : 25000};
let jsonData = JSON.stringify(jsObject); // converts Javascript object to JSON
let obj = JSON.parse(jsonData); // converts JSON to Javascript object
console.log(`Javascript object: ${jsObject}`);
console.log(`JSON data: ${jsonData}`)
console.log(`Javascript obj : ${obj}`)