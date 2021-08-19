const fsPromises = require('fs').promises;

// function for parsing data in server to send to requestees
const getDataFromFile = (pathToFile) => {
  return fsPromises.readFile(pathToFile, {encoding: 'utf-8'})
  .then(data => JSON.parse(data))
  .catch(err => console.log(err))
}

module.exports = getDataFromFile;