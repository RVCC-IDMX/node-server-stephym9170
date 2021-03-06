/*Basic Hello World*/
const http = require("http")
 
const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 5500;
 
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Hello World");
});
 
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
 
 
/* Global Properties */
console.log(__filename);
console.log(__dirname);
 
/*Reading Files*/
const {readFile, readFileSync} = require("fs");
try{
const data = readFileSync("hi.txt", "utf8");
console.log(data);
} catch (err) {
console.error(err);
}
 
console.log("Log from outside");
 
/* Writing Files */
const{appendFile} = require("fs");
 
const newContent = "\n This is some more new text";
 
appendFile("hi.txt", newContent, (err) => {
    if (err){
        console.error(err);
        return;
    }
    console.log("content written");
})
 
/* Renaming and Deleting Files */
const{ unlink } = require("fs");
 
unlink("hello.txt", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File deleted!");
})
 
/* Export and Import */
import {addNums} from "./addNums.js";
 
const addNums = require("./addNums")
 
const sum = addNums(2, 2)
console.log(sum);

/* Basic HTML Content */
const http = require("http");
const fs = require ("fs")

const PORT = process.env.PORT || 5500;

const server = http.createServer((req, res) => {

    res.setHeader("Content Type", "text/html");
    
    let path = "./";
    switch(req.url) {
        case "/":
            path += index.html
            res.statusCode = 200;
            break;
            case "/about":
                path += "about.html"
                res.statusCode = 200;
                break;
                default:
                    path += "404.html"
                    res.statusCode = 404;
                    break;
    }
    fs.readFile("./index.html", (err, data) => {
        if (err) {
            console.error(err);
            res.end();
        } else {
        res.end(data);
        }
    })
    });
server.listen(PORT, () => console.log(`Server listening on port 
${PORT}`));
