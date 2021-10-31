/*Basic Hello World*/
const http = require("http")
 
const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;
 
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
const {readFile, readFileSync} = require("fsfs");
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