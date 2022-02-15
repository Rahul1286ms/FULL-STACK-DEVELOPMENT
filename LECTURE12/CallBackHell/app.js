//Not a good way of writing code (using callbacks), better
// way is to use promise 



//Download File
// function downloadFile(url, downloaded) {
//     console.log(`Starting the download from ${url}`);
//     setTimeout(() => {
//         const path = url.split('/').pop();
//         downloaded(path);
//     }, 3000);
// }


// //compress File
// function compressFile(path, compressed) {
//     console.log(`Starting the file compression for the file ${path}`);
//     setTimeout(() => {
//         const compressedPath = path.split('.')[0] + '.zip';
//         compressed(compressedPath);

//     }, 2000)
// }

// //upload File
// function uploadFile(compressedPath, uploaded) {
//     console.log(`Starting to upload the file from ${compressedPath}`);
//     setTimeout(() => {
//         const uploadedPath = `http://localsystem/${compressedPath}`;
//         uploaded(uploadedPath);
//     }, 3000)
// }

// downloadFile('https://facebook.com/profile.jpg', function (path) {
//     console.log(`File downloaded Successfully as ${path}`);
//     compressFile(path, function (compressedPath) {
//         console.log(`File Compressed Successfully as ${compressedPath}`);
//         uploadFile(compressedPath, function (uploadedPath) {
//             console.log(`File uploaded Successfully at path ${uploadedPath}`);
//             console.log("Everything Done!!")
//         });
//     });
// });     

//---------------------------------------------------------------------------------

// GOOD WAY OF WRITING THE ABOVE CODE USING PROMISES

//Download File
function downloadFile(url) {
    console.log(`Starting the download from ${url}`);

    return new Promise(function (resolve, reject) {

        //this is for error 
        if (!url.startsWith('http')) {
            throw new Error("Invalid URL");
        }
        //no error 
        setTimeout(() => {
            const path = url.split('/').pop();
            resolve(path);
        }, 3000);

    })
}

//compress File
function compressFile(path) {
    console.log(`Starting the file compression for the file ${path}`);

    return new Promise(function (resolve, reject) {

        setTimeout(() => {
            const compressedPath = path.split('.')[0] + '.zip';
            resolve(compressedPath);

        }, 2000)
    })
}

//upload File
function uploadFile(compressedPath) {
    console.log(`Starting to upload the file from ${compressedPath}`);

    return new Promise(function (resolve, reject) {

        setTimeout(() => {

            const uploadedPath = `http://localsystem/${compressedPath}`;
            resolve(uploadedPath);

        }, 3000)
    })
}


//THis is good but nesting is still there it is not linear code:-

// downloadFile('http://facebook.com/profile.jpg')
//     .then((path) => {
//         console.log(`File downloaded Successfully as ${path}`);
//         compressFile(path)
//             .then((compressedPath) => {
//                 console.log(`File Compressed Successfully as ${compressedPath}`)
//                 uploadFile(compressedPath)
//                     .then((uploadedPath) => {
//                         console.log(`File uploaded Successfully as ${uploadedPath}`)
//                         console.log("Everything Done!!");
//                     });
//             });
//     });

//-------------------BETTER APPROACH WITHOUT ANY NESTING AND IT IS A LINEAR CODE:-

// downloadFile('smtp://facebook.com/profile.jpg')// error exmaple
downloadFile('http://facebook.com/profile.jpg')
    .then(compressFile)
    .then(uploadFile)
    .then((uploadedPath) => {
        console.log(`File uploaded Successfully at ${uploadedPath}`);
        console.log("Everything Done!")
    })
    .catch((err) => {
        console.log(err.message);
        console.log("Something Went Wrong");
    })