//Task 7
const http = require('http');
const karachi = require('./karachi');
const lahore = require('./lahore');
const islamabad = require('./islamabad');
const multan = require('./multan');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  const messages = [
    karachi.displayMessage(),
    lahore.displayMessage(),
    islamabad.displayMessage(),
    multan.displayMessage(),
  ].join('\n');

  res.end(messages);
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});