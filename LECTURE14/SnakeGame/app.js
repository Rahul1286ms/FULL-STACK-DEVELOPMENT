const canvas = document.getElementById('canvas');
const pen = canvas.getContext('2d');

pen.fillStyle = 'yellow';

//Height and Width of the Canvas Element
const H = 735;
const W = 1200;

//Width and Height of the snake
const cs = 67;

let food = null;

let score = 0;

let gameOver = false;
//init_len is the initial length of the snake when the game starts

//direction is the initial direction of the snake when the game starts

//cells is an array which stores the position of each block of snakes length like
//if snake length=2 then cells array will store the location of 2blocks(x0,y0),(x1,y1) of snake
//createSnake is a function in which we store location of all cells of the snake
//cells:[{0,0},{1,0},{2,0},{3,0},{4,0}] initially using the createSnake function to create the snake
//BUT SNAKE IS CREATED WHEN WE CALL THIS FUNCTION 

//drawSnake function draws the snake on the canvas using .fillRect() method of .getContext() class
//BUT SNAKE IS DRAWN ON THE CANVAS ONLY WHEN THIS FUNCTION IS CALLED
//pen.fillReact(cell.x*cs, cell.y*cs, cs-1,cs-1);
//cs-1 is written so as to have some space between each block of the snake
//taki hame blocks pta chal jae kitne hai and cell.x*cs, cell.y*cs is written because
//snake ke ek cell/block ki width cs hai toh next cell/block ki width cell.x*cs honi
//eg 0,0 -> 0,0,cs-1,cs-1  | 1,0 -> 1*cs,0,cs-1,cs-1 | 2,0 -> 2*cs,0,cs-1,cs-1 and so on
//if we dont mulitply with cs then they will overlap each other
//like 0,0 have width of cs=67 next block is 1,0 but the difference between x coordinate must be equal to cs
//so as to see the next block but in this case it is 1-0=1 so they will overlap if not multiplied by 

//update function is used to update the location of blocks of snake so as to move it in any particular direction
//in this function we remove the last block and add a block at the head of the snake
//we take the x and y coordinate of the head of the snake and give the new block's x coordinate x+1 and y coordinate = y
//and push it into the cells array of the snake and remove the first cell/block of the snake from the array cells so that length remains same and snake moves in right direction
//IT WILL WORK ONLY WHEN CALLED 

const snake = {
    init_len: 5,
    direction: 'right',
    cells: [],

    createSnake: function () {
        for (let i = 0; i < this.init_len; i++) {
            this.cells.push({ x: i, y: 0 });
        }
    },

    drawSnake: function () {
        for (let cell of this.cells) {
            pen.fillRect(cell.x * cs, cell.y * cs, cs - 1, cs - 1);
        }
    },

    updateSnake: function () {
        const headX = this.cells[this.cells.length - 1].x;//snake ke head ka x coordinate 
        const headY = this.cells[this.cells.length - 1].y;//snake ke head ka y coordinate

        //when snake eats the food food should disappear
        //to do so when coordinates of food and head of snake becomes same
        //food disappears

        if (food.x === headX && food.y === headY) {
            //food kha liya so generate new food and dont remove the first cell i.e a cell is added to snake
            food = getRandomFood();
            score++;
        } else {
            //remove the first cell agr food nhi khaya and move kar rha hai 
            this.cells.shift();
        }

        let nextX;
        let nextY;
        //updation in the direction of snake
        if (this.direction === 'left') {
            nextX = headX - 1;
            nextY = headY;
            if (nextX * cs < 0) {
                gameOver = true;
            }
            for (let i = 0; i < this.cells.length - 1; i++) {

                if (headX === this.cells[i].x && headY === this.cells[i].y) {
                    gameOver = true;
                }
            }
        }
        else if (this.direction === 'up') {
            nextX = headX;
            nextY = headY - 1;
            if (nextY * cs < 0) {
                gameOver = true;
            }
            for (let i = 0; i < this.cells.length - 1; i++) {

                if (headX === this.cells[i].x && headY === this.cells[i].y) {
                    gameOver = true;
                }
            }
        }
        else if (this.direction === 'down') {
            nextX = headX;
            nextY = headY + 1;
            if (nextY * cs >= H) {
                gameOver = true;
            }
            for (let i = 0; i < this.cells.length - 1; i++) {

                if (headX === this.cells[i].x && headY === this.cells[i].y) {
                    gameOver = true;
                }
            }
        }
        else {
            nextX = headX + 1;
            nextY = headY;
            if (nextX * cs >= W) {
                gameOver = true;
            }
            for (let i = 0; i < this.cells.length - 1; i++) {

                if (headX === this.cells[i].x && headY === this.cells[i].y) {
                    gameOver = true;
                }
            }
        }

        //add the cell at the end i.e. after the head of the snake
        this.cells.push({
            x: nextX,
            y: nextY
        });

        //remove the first cell of the snake
        // this.cells.shift();
        // for (let cell of this.cells) {
        //     if (nextX === cell.x * cs && nextY === cell.y * cs) {
        //         gameOver = true;
        //     }
        // }
    }
}


//init
//when keydown i.e. any key is pressed keypressed function is called 
//and it has an argument e e.key contains the value of the key that we pressed
//using e.key we can which direction we pressed and can make the snake move in that 
//particular direction
function init() {
    snake.createSnake();
    snake.drawSnake();
    food = getRandomFood();

    function keypressed(e) {

        if (e.key === 'ArrowLeft') {
            snake.direction = 'left';
        }
        else if (e.key === 'ArrowDown') {
            snake.direction = 'down';
        }
        else if (e.key === 'ArrowRight') {
            snake.direction = 'right';
        }
        else {
            snake.direction = 'up';
        }

        console.log(snake.direction);
    }

    document.addEventListener('keydown', keypressed);
}

//draw
//clearRect() removes all the blocks of the snake from the canvas from 0,0 to W,H
//and calls drawSnake() function to draw the snake again with new location
function draw() {
    if (gameOver == true) {
        pen.font = '40px sans-serif';
        pen.fillStyle = 'red';
        pen.fillText("GameOver", 50, 100);
        console.log("GAME OVER");
        clearInterval(id);
        return;
    }

    pen.clearRect(0, 0, W, H);

    //TO PRINT SCORE USE .FILLTEXT METHOD 
    //pen.fillText(`Score : ${score}`, xcoordinate, ycoordinate)
    //x and y coordinates are the location where score will be displayed
    pen.font = '40px sans-serif';
    pen.fillStyle = 'lightgreen';
    pen.fillText(`Score : ${score}`, 50, 50);
    //drawing food cell
    pen.fillStyle = 'blue';
    pen.fillRect(food.x * cs, food.y * cs, cs, cs);
    pen.fillStyle = 'yellow';

    snake.drawSnake()
}

//update
function update() {
    snake.updateSnake();
}

//gameloop
function gameLoop() {
    update();
    draw();
}

//hame food 0,0 se W,H ke beech mai hi aana chahiye canvas ke bahr nhi 
//aana chahiye ab mujhe 0 se W tak foodX chahiye toh maine Math.random()*W kiya
//Math.random()*(W-cs) -> W-cs kiya taki woh canvas ke aandar create ho bahr na ho
//and pura food canvas ke aandar ho adha bahr and aadha aandar na ho
//Math.floor(Math.random()*(W-cs)/cs) -> divided by cs so that jaha par food create 
//ho cs ka hi mulitple ho taki snake and food face to face aae naki snake ka head upr 
//ho and food thoda neeche create ho even in same row and column and Math.floor is also
//used to get whole number

//JAB BHI IS FUNCTION KO CALL KAREGE TOH IT WILL CREATE FOOD AND RETURN THE COORDINATES OF FOOD ELEMENT
function getRandomFood() {
    const foodX = Math.floor(Math.random() * (W - cs) / cs);
    const foodY = Math.floor(Math.random() * (H - cs) / cs);

    food = {
        x: foodX,
        y: foodY
    }

    return food;
}


//start the game -> initialise
init();

const id = setInterval(gameLoop, 200);