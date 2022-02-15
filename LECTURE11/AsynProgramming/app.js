
// function fun() {
//     console.log("Inside Fun");
// }

// function delay(n) {
//     for (let i = 1; i <= n; i++) {
//         const x = new Date().getTime();
//         while (new Date().getTime() < 1000 + x) {
//             //delays the execution of code for 1000millisecond i.e. 1second
//         }
//     }
//     fun();
// }
console.log("START");

setTimeout(function cb() {
    console.log("Inside callback");
}, 5000);

const id = setInterval(() => {
    console.log("Hello!");
}, 1000);

setTimeout(() => {
    clearInterval(id);
}, 10000)

console.log("END");
