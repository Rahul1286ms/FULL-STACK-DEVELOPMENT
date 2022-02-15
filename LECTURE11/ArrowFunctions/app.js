//Arrow Functions

const add = (x, y) => {
    return x + y;
}

const square = num => {
    return num * num;
}

//Arrow Implicit Return
const square1 = num => num * num;

const obj = {
    name: "Rahul",
    favColor: "Blue",
    getFavColor: function () {
        console.log(this);
        console.log(this.favColor);
    }
}
//In the above code  this keyword refers to obj

const obj1 = {
    name: "Rahul",
    favColor: "Blue",
    getFavColor: () => {
        console.log(this);
        console.log(this.favColor);
    }
}
//In the above code this refers to the window object