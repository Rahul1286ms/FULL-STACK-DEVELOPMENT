const fs = require('fs');
const path = require('path');

const data = "Hello from file System. We are learning NodeJS";


console.log(process.cwd());
console.log(__dirname);

//we want new file to be created inside files folder
//for that we need its path
const F1 = path.join(__dirname, 'files', 'xyz.txt');

//Writing into a file
// fs.writeFile(F1, data, {
//     encoding: 'utf-8',
//     flag: 'w'
// }, (err) => {
//     if (err) throw err;
//     console.log("File Written Successfully");
// })

//Reading from a file
fs.readFile(F1, { encoding: 'utf-8', flag: 'r' }, (err, data) => {
    if (err) throw err;

    console.log(data);
})