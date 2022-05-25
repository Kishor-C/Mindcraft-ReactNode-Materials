// import fs module
let fs = require("fs");
let message = 'Simple content\n';
// writeFileSync creates file it doesn't exist
fs.writeFileSync('msg.txt', message, {flag: 'a+'});
console.log('DONE!');