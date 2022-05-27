// we need to store and retreive the data using a single json file & we need webservice
// import 3 libraries fs, express and body-parser
let fs = require("fs");
let express = require("express");
let bodyParser = require("body-parser");

// create top level object of express by calling express()
let app = express();
// create port number for the application
let port = 9091;
// start the server
app.listen(port, () => console.log(`Server running at ${port}, restart if code changes`))
// use a middleware to parse the JSON data from the body
app.use(bodyParser.json());
// post to store the json data
app.post('/employee', (request, response) => {
    // assuming data has id, name, salary
    let data = request.body;
    let fileData = fs.readFileSync('users.json');
    let fileDataString = fileData.toString(); // json data
    let jsData = JSON.parse(fileDataString); // convert json to javascript, now it gives array
    // array as a function called push() to add the data
    jsData.push(data); // data will be pushed to the array & existing data also will be there
    // since the jsData is Javascript you cannot write javascript object to file
    // convert javascript object to json string and write to the json file
    let jsonArray = JSON.stringify(jsData);
    fs.writeFileSync("users.json", jsonArray);
    response.status(201).json({"message":`${data.name} is stored`});
});
// get all the json data
app.get('/employee', (request, response) => {
    let fileData = fs.readFileSync('users.json');
    let fileDataString = fileData.toString(); // json data
    let jsData = JSON.parse(fileDataString); // convert json to javascript, now it gives array
    response.status(200).json(jsData);
});
// get a single json data from the id return json or an error message in json format
app.get('/employee/:id', (request, response) => {
    // extract the path parameter & convert it to the int as it will be in string format
    let id = parseInt(request.params.id);
    let fileData = fs.readFileSync('users.json');
    let fileDataString = fileData.toString(); // json data
    let jsData = JSON.parse(fileDataString); // convert json to javascript, now it gives array
    let flag = false;
    let position = 0;
    jsData.forEach((employee, index) => {
        if(id == employee.id) {
            flag = true;
            position = index; 
            // here you can use response.json(employee) to stop iterating
        }
    });
    if(flag) {
        response.json(jsData[position]);
    } else {
        response.status(404).json({"message":`${id} not found`})
    }
});

