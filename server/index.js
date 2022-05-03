
const { uniqueNamesGenerator, animals } = require('unique-names-generator');

const randomName = uniqueNamesGenerator({ 
  dictionaries: [animals] 
});

console.log(randomName);