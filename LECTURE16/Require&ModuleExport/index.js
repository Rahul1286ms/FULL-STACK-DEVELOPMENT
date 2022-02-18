
//Requiring a file
// const math = require('./math');
// console.log(math.PI);
// console.log(math.add(2,3));
// console.log(math.squareNum(9));

//requiring a file and destructuring it
const { PI, square, add, magicNumber } = require('./math');
console.log(square(9));
console.log(PI);
console.log(magicNumber);
console.log(add(4, 5));

const obj = {
    firstName: 'Rahul',
    agr: 20
}

const { firstName: myname, age } = obj;
console.log(myname);

const car = {
    name: "BMW",
    price: 100000
}

const racingCar = {
    ...car,
    maxspeed: 400
}

console.log(racingCar);