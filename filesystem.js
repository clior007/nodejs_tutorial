const fs = require('fs');
const EventEmitter = require('events');

class FileSystem extends EventEmitter {
    writeFile() {
        let now = new Date()
        fs.mkdir('./test', (err) => {
            if(err)
                console.log(`failed to create folder. err: ${err}`);
            else{
                fs.writeFile('./test/data.txt', 'this is the data to write', (err) => {
                    if (err)
                        console.log(`${now} failed to open the file. err: ${err}`);
                    else
                        console.log(`${now} succeeded to open and write to file`);
                        fs.readFile('./test/data.txt', 'utf8', (err, data) => {
                            if (err)
                                console.log(`${now} failed to read from file. err: ${err}`);
                                
                            else {
                                console.log(`${now} this is the data from the file: ${data}`);
                                this.emit('writeFileFinished');
                            }
                        })
                });
            }
        })
    }

    renameFile() {
        let now = new Date()
        fs.rename('./test/data.txt', './test/new_data.txt', (err) => {
            if(err)
                console.log(`${now} failed to rename the file. err: ${err}`);
            else {
                console.log(`${now} succeeded to rename the file`);
                this.emit('renameFileFinished');
            }
        });
    }

    appendToFile() {
        let now = new Date()
        fs.appendFile('./test/new_data.txt', '/nthis is the new data to append', (err) => {
            if(err)
                console.log(`${now} failed to append to file ${err}`);
            else {
                console.log(`${now} succeeded to append data to file`);
                this.emit('appendFileFinished');
            }
        });
    }

    deleteFile() {
        let now = new Date()
        fs.readdir('./test', (err, files) => {
            if (err)
                console.log(`${now} failed to delete the file. err: ${err}`);
            else {
                for (let file of files){
                    fs.unlink(`./test/${file}`, (err) => {
                        if (err)
                            console.log(`${now} failed to delete the file. err: ${err}`);
                        else {
                            console.log(`${now} succeeded to delete the file: ${file}`);
                        }
                    });
                }
                fs.rmdir('test', (err) => {
                    if (err)
                        console.log(`failed to delete folder. err: ${err}`);
                    else {
                        console.log(`succeeded to delete the folder: test`);
                        this.emit('deleteFileFinished');
                    }
                });
            }
        });
    }
}

module.exports = {FileSystem : FileSystem}