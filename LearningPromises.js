// 1

let p = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a === 2) {
        resolve('Success');
    } else {
        reject('Failure');
    }
});

p.then((message) => {
    console.log('This Promise was a ' + message);
}).catch((message) => {
    console.log('This Promise was a ' + message);
});

// 2

let videoDownloaded = false;

function didUserDownloadVideo() {
    return new Promise((resolve, reject) => {
        if (!videoDownloaded) {
            reject('Oh no! The user did not download the video');
        } else {
            resolve('Yay! The user did download the video');
        }
    })
}

didUserDownloadVideo().then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})