const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//-------------MAP METHOD---------------
// function square(num) {
//     return num * num;
// }

// function squareRoot(num) {
//     return Math.sqrt(num);
// }

// const squaredArray = numbers.map(square);
// const squareRoots = numbers.map(squareRoot);
// const cubeArray = numbers.map(function (n) {
//     return n ** 3;
// })

// console.log(numbers);
// console.log(squaredArray);
// console.log(squareRoots);
// console.log(cubeArray);

// -------------------------------------

//---------------FILTER METHOD-----------------

// function isEven(num) {
//     if (num % 2 === 0) {
//         return true;
//     } else
//         return false;
// }

// const evenNums = numbers.filter(isEven);
// console.log(evenNums);

//----------------------------------------------

// ----------------SORT METHOD--------------------

const num = [1, 2, 99, 0, -19, 45, 10, 11];

num.sort(function (a, b) {
    return a - b;
});
console.log(num);