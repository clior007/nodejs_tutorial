const fs = require('fs');
const { EventEmitter } = require('stream');
const zlib = require('zlib')

class ReadWriteStreams extends EventEmitter {
    constructor(){ super(); }
    
    readStream(){
        var readStream = fs.createReadStream('read_stream.txt', 'utf-8');
        readStream.on('data', (chunk) => {
            // console.log(chunk);
        });
    }

    writeStream(){
        var writeStream = fs.createWriteStream('write_stream.txt', 'utf-8');
        var readStream = fs.createReadStream('read_stream.txt', 'utf-8');
        readStream.on('data', (chunk) => {
            writeStream.write(chunk, (err) => {
                if (err)
                    console.log(`failed to write stream. err ${err}`);
            });
        });
    }

    pipeStream(){
        var writeStream = fs.createWriteStream('writeStream_pipe.txt', 'utf-8');
        var readStream = fs.createReadStream('read_stream.txt');
        readStream.pipe(writeStream);
    }

    gzipStream(){
        var gzip = zlib.createGzip()
        var writeStream = fs.createWriteStream('write_stream_zip.txt.gz');
        var readStream = fs.createReadStream('read_stream.txt');
        readStream.pipe(gzip).pipe(writeStream);
        writeStream.on('finish', () => {
            console.log(`reached to on finish`)
            this.emit('writeGzipStreamFinished');
        });
    }

    gunzipStream(){
        var gunzip = zlib.createGunzip()
        var writeStream = fs.createWriteStream('write_stream_unzip.txt', 'utf-8');
        var readStream = fs.createReadStream('write_stream_zip.txt.gz');
        readStream.pipe(gunzip).pipe(writeStream);
    }
}

module.exports = {ReadWriteStreams}