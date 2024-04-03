//Task 2 : Print Hello World on your console
// console.log("Hello World");
// // Syntax for nodejs
// // Server.js
// const express = require(express)
// const path = require(path)
// const bodyparser = require(body-parser)
// const app = express();
// const port = 3003;
// App.use(bodtparser.urlencoded({extended:true}));
// App.use(express.static(path.join(__dirname , "public")));
// App.get("/" , (req , res) =>{
// Res.sendfile(path.join(__dirname , "public" , "index.html"));
// });
// App.post("/login" , (req , res) =>{
// const {username , password} = req.body
// //Code here
// });
// App.listen(port , ()=>{
//    Console.log(`Server is running at http://localhost:${port}`);
// });

// // For making and exporting modules  A string variable
// const myMessage = "Hello from FAST NU!";
// // A function that displays the message
// function displayMessage() {
//   console.log(myMessage);}
// // Export the function and the variable
// module.exports = {
//   displayMessage,
//   myMessage,};

// const http = require('http');
// const myModule = require('./myModule'); // Import your custom module
// // Create an HTTP server
// const server = http.createServer((req, res) => {
//   // Set the response header with content type
//   res.setHeader('Content-Type', 'text/plain');
//   // Call the function from your custom module
//   myModule.displayMessage();
//   // Send a response with the message variable from your module
//   res.send(`Message from myModule: ${myModule.myMessage}\n`);
// });
// // Listen on port 3000
// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });



//Task 3: Create a server using express and set up some routes
// const express = require('express');
// const app = express();
// const port = 3001;

// app.get('/', (req, res) => {
//   res.send('I am your server');
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });




// Task 4 : Implement error handling middleware to catch any errors not caught by other middleware
// const http = require('http');

// const server = http.createServer((req, res) => {
//   const url = req.url;

//   if (url === '/success') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Success!');
//   } else if (url === '/notfound') {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Not Found!');
//   } else if (url === '/internalerror') {
//     res.writeHead(500, { 'Content-Type': 'text/plain' });
//     res.end('Internal Server Error!');
//   } else if (url === '/badrequest') {
//     res.writeHead(400, { 'Content-Type': 'text/plain' });
//     res.end('Bad Request!');
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Not Found!');
//   }
// });

// const port = 3001;
// server.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });



//Task 5  : Create a new HTTP server and implement logging of all requests using the morgan module
// const http = require('http');
// const myModule = require('./temp');

// const server = http.createServer((req, res) => {
//   res.setHeader('Content-Type', 'text/plain');

//   myModule.displayMessage();

//   res.end(`Message from myModule: ${myModule.myMessage}\n`);
// });

// const PORT = 3061;
// server.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });



//Task 7  : Implement error handling for the HTTP server by creating an error handler function that will handle any errors
const http = require('http');
const karachi = require('./karachi/index.js');
const lahore = require('./lahore/index.js');
const islamabad = require('./islamabad/index.js');
const peshawar = require('./peshawar/index.js');
const multan = require('./multan/index.js');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  const messages = [
    karachi.displayMessage(),
    lahore.displayMessage(),
    islamabad.displayMessage(),
    peshawar.displayMessage(),
    multan.displayMessage(),
  ].join('\n');

  res.end(messages);
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});