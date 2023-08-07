// Importing built-in Node.js modules
const fs = require('fs');
const http = require('http');

// Defining a function to handle HTTP requests
const handleRequest = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello, World!\n');
};

// Creating a server and starting it on port 3000
const server = http.createServer(handleRequest);
server.listen(3000, () => {
  console.log('Server listening on port 3000...');
});

// Reading a file asynchronously
fs.readFile('example.txt', 'utf8', (error, data) => {
  if (error) {
    console.error('Error reading file:', error);
    return;
  }

  console.log('File contents:', data);
});

// Writing to a file asynchronously
const contentToWrite = 'This is some content to write to a file.';
fs.writeFile('output.txt', contentToWrite, (error) => {
  if (error) {
    console.error('Error writing file:', error);
    return;
  }

  console.log('File written successfully!');
});