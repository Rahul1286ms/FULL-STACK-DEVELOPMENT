


// async function add(x, y) {
//     if (x + y <= 5) {
//         throw new Error("SUm is less than 5");
//     }
//     return x + y;
// }

// add(6, 7)
//     .then((val) => {
//         console.log("Inside Resolve");
//         console.log(val);
//     })
//     .catch((err) => {
//         console.log("Inside Reject");
//         console.log(err);
//     });


async function fun() {

    console.log("Starting the fun function");

    console.log("MAKING API CALL USING FETCH");
    const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');

    console.log("Got the response using fetch");

    console.log("Starting to parse the complete response");
    const data = await res.json();

    console.log("parsing of response completed");

    console.log("Getting the data");
    console.log(data);

    console.log('fun function ends');

}

console.log("START")
fun();
console.log("AFTER FUN FUNCTION!!!");
console.log("AFTER FUN FUNCTION!!!");
console.log("AFTER FUN FUNCTION!!!");
console.log("AFTER FUN FUNCTION!!!");

console.log("END");