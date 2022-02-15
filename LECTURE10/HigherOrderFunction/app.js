function fun(func) {
    console.log("Inside fun");
    func();
}

function innerFun() {
    console.log("Inner fun");
}

fun(innerFun);