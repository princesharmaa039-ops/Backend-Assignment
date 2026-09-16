// File manager (CRUD) using the fs module
const fs = require('fs');
const path = require('path');
const { log } = require('./modules/logger');

const FILE_PATH = path.join(__dirname, 'test.txt');

function createFile() {
  log('Creating File...', 'INFO');
  fs.writeFile(FILE_PATH, 'Hello Node.js', (err) => {
    if (err) return log(`Create failed: ${err.message}`, 'ERROR');
    log('File Created', 'SUCCESS');
    readFile(updateFile);
  });
}

function readFile(next) {
  log('Reading File', 'INFO');
  fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') return log('File does not exist', 'ERROR');
      return log(`Read failed: ${err.message}`, 'ERROR');
    }
    console.log(data);
    if (next) next();
  });
}

function updateFile() {
  fs.appendFile(FILE_PATH, ' Learning FS Module', (err) => {
    if (err) return log(`Update failed: ${err.message}`, 'ERROR');
    log('File Updated', 'SUCCESS');
    readFile(deleteFile);
  });
}

function deleteFile() {
  fs.unlink(FILE_PATH, (err) => {
    if (err) {
      if (err.code === 'ENOENT') return log('File already deleted / does not exist', 'ERROR');
      return log(`Delete failed: ${err.message}`, 'ERROR');
    }
    log('File Deleted', 'SUCCESS');
  });
}

createFile();
