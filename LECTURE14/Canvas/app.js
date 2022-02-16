const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');

pen.fillStyle = 'blue';

let init_x;
let init_y;

//width of the canvas
const W = 900;
//height of the canvas
const H = 600;

//Initialises the game
function init() {
    init_x = 10;//initial x coordinate of rect
    init_y = 10;//initial y coordinate of rect
    //30 is width of the rect and 20 is height of the rect 
    pen.fillRect(init_x, init_y, 30, 20);
}

//draw
function draw() {
    //.clearRect() clears all the rect present from 0,0 to w,h
    pen.clearRect(0, 0, W, H);
    //.fillRect() draws a new rect at init_x,init_y with width=30 and height=20
    pen.fillRect(init_x, init_y, 30, 20);
}

//update
function update() {
    //this updates the location in x direction eg init_x =10 after this init_x=40 coordinate of x will change 
    // and rect will move forward
    init_x = init_x + 30;
}


function gameLoop() {
    console.log("Game Loop!!");
    update();
    draw();
}


init();

const id = setInterval(gameLoop, 200);
