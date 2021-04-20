/**
  Challenge #1
*/

let p = new Promise((resolve, reject) => {
  let a = 0 + 2;
  if (a === 2) {
    resolve({
      message: 'Success',
    });
  } else {
    reject({
      message: 'Failure',
    });
  }
});

p.then((data) => {
  console.log(data.message);
}).catch((data) => {
  console.log(data.message);
})

// let p = new Promise((resolve, reject) => {
//     let a = 1 + 2;
//     if (a === 2) {
//         resolve('Success');
//     } else {
//         reject('Failure');
//     }
// });

// p.then((message) => {
//     console.log('This Promise was a ' + message);
// }).catch((message) => {
//     console.log('This Promise was a ' + message);
// });


/**
  Challenge #2
*/

const users = ['tim123', 'ruben456', 'darnish789', 'woong000'];

function doesUserHaveAccount(username) {
  return new Promise((resolve, reject) => {
    if (users.indexOf(username) > -1) {
      resolve(username + ' does have an account');
    } else {
      reject(username + ' does not have an account');
    }
  });
}

doesUserHaveAccount('isadora246').then((response) =>{
  console.log(response);
}).catch((response) => {
  console.log(response);
});

doesUserHaveAccount('woong000').then((response) =>{
  console.log(response);
}).catch((response) => {
  console.log(response);
});

// let videoDownloaded = false;

// function didUserDownloadVideo() {
//     return new Promise((resolve, reject) => {
//         if (!videoDownloaded) {
//             reject('Oh no! The user did not download the video');
//         } else {
//             resolve('Yay! The user did download the video');
//         }
//     })
// }

// didUserDownloadVideo().then((message) => {
//     console.log(message);
// }).catch((message) => {
//     console.log(message);
// })


/**
  Challenge #3
*/

const carousels = {
  homepage: {
    items: [1, 2, 3],
  },
  giftCard: {
    items: [4, 5, 6],
  }
};

function getCarouselData(carouselName) {
  return new Promise((resolve, reject) => {
    if (carousels[carouselName]) {
      resolve(carousels[carouselName])
    } else {
      reject('Error: The ' + carouselName + ' carousel doesn\'t exist.')
    }
  })
}

const movies = {
  popular: ['a', 'b', 'c', 'd'],
  newReleases: ['e', 'f', 'g', 'h'],
};

function getMoviesByCategory(movieCategory) {
  return new Promise((resolve, reject) => {
    if (movies[movieCategory]) {
      resolve(movies[movieCategory]);
    } else {
      reject('Error: The ' + movieCategory + ' category doesn\'t exist.')
    }
  })
}

Promise.all([
  getCarouselData('homepage'),
  getMoviesByCategory('popular'),
]).then((responses) => {
  responses.forEach(function(response) {
    console.log(response);
  })
}).catch((response) => {
  console.log(response);
})

// const recordVideoOne = new Promise((resolve, reject) => {
//     resolve('Video 1 Recorded!');
// });

// const recordVideoTwo = new Promise((resolve, reject) => {
//     resolve('Video 2 Recorded!');
// });

// const recordVideoThree = new Promise((resolve, reject) => {
//     resolve('Video 3 Recorded!');
// });

// Promise.all([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree,
// ]).then((messages) => {
//     messages.forEach(function (message) {
//         console.log(message);
//     })
// });


/**
  Challenge #4
*/

Promise.race([
  getCarouselData('giftCard'),
  getMoviesByCategory('newReleases'),
]).then((reponse) => {
  console.log(reponse);
}).catch((response) => {
  console.log(response);
})

// Promise.race([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree,
// ]).then((message) => {
//     console.log(message);
// });