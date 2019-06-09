function sayHello(name) {
    console.log("Hello "+name);
}

sayHello('Mayank');
//Hello Mayank

console.log(__filename);
// /Users/mayangupta/Desktop/1.Project/nodejs/nodeDemo/testJS.js

console.log(__dirname);
// /Users/mayangupta/Desktop/1.Project/nodejs/nodeDemo

console.log(module);
//Module {
//  id: '.',
//  exports: {},
//  parent: null,
//  filename:
//   '/Users/mayangupta/Desktop/1.Project/nodejs/nodeDemo/testJS.js',
//  loaded: false,
//  children: [],
//  paths:
//   [ '/Users/mayangupta/Desktop/1.Project/nodejs/nodeDemo/node_modules',
//     '/Users/mayangupta/Desktop/1.Project/nodejs/node_modules',
//     '/Users/mayangupta/Desktop/1.Project/node_modules',
//     '/Users/mayangupta/Desktop/node_modules',
//     '/Users/mayangupta/node_modules',
//     '/Users/node_modules',
//     '/node_modules' ] }

//var logger = require('./publicModule')
const logger = require('./publicModule')
console.log(logger);
//{ log: [Function: log] }

logger.log('Successfully Logged the Module');
//Logging :: Successfully Logged the Module

const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);
//{ root: '/',
//  dir: '/Users/mayangupta/Desktop/1.Project/nodejs/nodeDemo',
//  base: 'testJS.js',
//  ext: '.js',
//  name: 'testJS' }


const os = require('os')
var totalObj = os.totalmem(__filename);
console.log("Total Memory: "+totalObj);
//Total Memory: 17179869184

console.log(`Total Memory: ${totalObj}`); //new way
//Total Memory: 17179869184


const fs = require('fs')
var filesObj = fs.readdirSync('./');
console.log(filesObj);
//[ '.DS_Store', 'publicModule.js', 'testJS.js' ]

var filesObj1 = fs.readdir('./', function(err,files) {
    if (err) console.log(err)
    else console.log('Result',files)
});
// Result [ '.DS_Store', 'publicModule.js', 'testJS.js' ]

const EventEmitter = require('events')  //EventEmitter is a class
const emitter = new EventEmitter();
//Register a listener
emitter.on('MessageLogged', function () {
    console.log('Listener Logged')
});
//Register a emitter
emitter.emit('Message is emiited') 

const http = require('http')  //EventEmitter is a class
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }

});

server.on('connection', (socket) => {
   console.log('New Connection...');
});

server.listen(3000);
console.log('Listening 3000 port')









