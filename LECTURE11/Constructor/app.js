

//Constructor Function

// function fun() {
//     console.log(this);
//     this.name = "Rahul";
//     this.age = 20;
// }

// fun();

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//----------ALOT OF MEMORY WILL BE WASTED LIKE THIS IF WE WILL CREATE
// 1000 OBJECTS THEN 1000 TIMES THIS FUNCTION WILL BE CREATED IN THOSE OBJECTS
// SO MEMORY WILL BE WASTED SO TO SAVE MEMORY WE PUT THIS FUNCTION OR ANY FUNCTION
// LIKE THIS IN THE PARENT CLASS OF THIS OBJECT THAT IS Person.prototype.functionname(){
//     function definition;
// }----------------------------------------------------------------------------------
// this.sayHello = function () {
//     console.log(`Hello form ${this.name}`);
// }
//-------------------------------------------------------------------------------------
//     console.log(this);
// }

//----PERSON.PROTOTYPE KE AANDAR EK SAYHELLO FUNCTION BAN JAEGA
// Person.prototype.sayHello = function () {
//     console.log(`Hello form ${this.name}`);
// }


// const p1 = new Person("rahul sharma", 20);
// const p2 = new Person("sujal saini", 20);
// const p3 = new Person("kartik tola", 20);

//This keyword


//implicit binding by javascript
// const car = {
//     name: "Audi",
//     price: 200000,
//     getPrice: function () {
//         console.log(this);
//         return this.price;
//     }
// }


//explicit Binding


function fun(name, age) {
    console.log(this);
    console.log(this.m);
    console.log(name);
    console.log(age);
}

const obj = {
    l: 10,
    m: true,
    n: "Hello"
}

// fun.call(obj, "Rahul", 20);

const f = fun.bind(obj);
f("Rahul", 20)