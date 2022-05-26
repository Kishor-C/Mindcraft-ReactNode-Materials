// This program reads JSON file and converts the JSON data to Javascript object
let fs = require("fs");
let data = fs.readFileSync("demo.json");
let jsonString = data.toString(); // here the binary data is converted to string i.e., JSON
// convert JSON to Javascript object
let obj = JSON.parse(jsonString); 
console.log(`Id = ${obj.id}, Name = ${obj.name}, Salary = ${obj.salary}`);