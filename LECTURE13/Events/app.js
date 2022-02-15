const btn = document.querySelector('#btn');

function shout() {
    console.log("SHOUT!!!");
}

function scream() {
    console.log("SCREAM!!!");
}

// btn.onclick = (event) => {
//     console.log(event.target);
//     console.log("DON'T CLICK ME");
// }

//on using onclick event we can only call 1 method 2methods cannot be called
//in below schenario scream function is called because called at last this is 
//disadvantage of onclick event
// btn.onclick = shout;
// btn.onclick = scream;



//-------------EVENT LISTENER-------------
btn.addEventListener('click', shout);
btn.addEventListener('click', scream);

