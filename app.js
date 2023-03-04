/******** moduls ********/
const moduls = require('./moduls');
result = moduls.sum(2, 3);
console.log(result);
console.log(moduls.PI);
console.log(new moduls.SomeMAthObject());
moduls.varLetScope();

let x = 1;
var y = 2;
console.log('let x = %d', this.x);
console.log('var y = %d', this.y);
/************************/

/******** events ********/
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('tutorial_events', (num1, num2) => {
    console.log(`event was triggered ${num1 + num2}`);
});
eventEmitter.emit('tutorial_events', 1, 3);

const events = require('./events');
let person = new events.Person('lior');
person.on('new_person_event', () => {
    console.log('on new person %s event was triggered', person.name());
});
person.emit('new_person_event %s', person.name);

person = new events.Person('hagar');
person.on('new_person_event', () => {
    console.log('on new person %s event was triggered', person.name);
});
person.emit('new_person_event %s', person.name);
/************************/

/******** readline ********/
const readline = require('./readline');
readline.readLine();
/************************/

/******** filesystem ********/
const filesystem = require('./filesystem');
let fs = new filesystem.FileSystem();
fs.writeFile();
fs.on('writeFileFinished', () => { fs.renameFile(); });
fs.on('renameFileFinished', () => fs.appendToFile());
fs.on('appendFileFinished', () => fs.deleteFile());
/************************/

/******** streams ********/
const readWritestreams = require('./streams');
let rw_streams = new readWritestreams.ReadWriteStreams();
rw_streams.readStream();
rw_streams.writeStream();
rw_streams.pipeStream();
rw_streams.gzipStream();
rw_streams.on('writeGzipStreamFinished', () => rw_streams.gunzipStream());
/************************/

/******** HttpServer ********/
const http_module = require('./httpserver');
var server = new http_module.HttpServer();
server.reqRes();
server.servingStaticFiles();
/************************/

/******** ExpressHttpServer ********/
const express_module = require('./express');
var expressServer = new express_module.ExpressHttpServer();
expressServer.reqRes();