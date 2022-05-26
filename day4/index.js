// importing express module
let express = require("express");
// importing body-parser module
let bodyParser = require("body-parser");
// accessing the top level object of express
let app = express();
// starting the server
let PORT = 9090;
app.listen(PORT, () => console.log(`Webservices is ready to serve at ${PORT}`));
// add body parser to read json and convert to Javascript

app.use(bodyParser.json()); // now request.body returns JS object

app.post("/store", (request, response) => {
    let data = request.body;
    // you must have a code that stores the data in either DB or JSON files
    response.json({"message":`${data.id} is stored`});
});
app.get("/fetch/:id", (request, response) => {
    let id = parseInt(request.params.id);
    // you must have a code that fetches the data in either DB or JSON files
    response.json({"message":`Fetching ${id}`});
});
app.put("/update/:id/:name", (request, response) => {
    let id = parseInt(request.params.id);
    let name = request.params.name;
    // you must have a code that updates the name based on id
    response.json({"message":`Updated name: ${name} for an id: ${id}`});
})
