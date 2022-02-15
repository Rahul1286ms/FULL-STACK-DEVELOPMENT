function a(callback) {
    callback();
}

function cb() {
    console.log("Inside Callback");
}

a(cb);