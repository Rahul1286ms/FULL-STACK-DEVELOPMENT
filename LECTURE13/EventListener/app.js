const buttons = document.querySelectorAll('button');

//------CLICK EVENT-------------
for (let btn of buttons) {
    btn.addEventListener('click', (e) => {
        console.log(e.target.innerText);
        console.log("Someone Clicked the Button");
    })
}

//-------------MOUSE EVENTS----------------
for (let btn of buttons) {
    btn.addEventListener('mouseenter', () => {
        btn.style.border = '3px solid black';
        btn.style.backgroundColor = 'lightgreen';
        btn.style.fontWeight = 'bold';
    })
    btn.addEventListener('mouseleave', () => {
        btn.style.border = '';
        btn.style.backgroundColor = '';
        btn.style.fontWeight = '';
    })
}

//------------DOUBLECLICK EVENT---------------
const h1 = document.querySelector('h1');
h1.addEventListener('dblclick', () => {
    console.log("h1 Clicked");
})

//--------------KEYBOARD EVENTS--------------
const inp = document.querySelector('input');
inp.addEventListener('keypress', (e) => {
    // console.log(e);
    // console.log("key pressed");
    if (e.which === 13)
        console.log("YOU HIT THE ENTER KEY");
    if (e.key === 'Enter') {
        console.log("YOU HIT THE ENTER KEY");
    }
})

//-------------FORM EVENTS-------------
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(form.elements);
    const username = form.elements[0].value;
    const height = form.elements[1].value;
    console.log(`username is ${username} and height is ${height}`);
})

//--------------OTHER EVENTS--------------
const para = document.querySelector('p');
para.addEventListener('copy', (e) => {
    console.log('copy');
    alert('STOP COPYING NOW');
})