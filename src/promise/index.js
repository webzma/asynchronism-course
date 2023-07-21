const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
     resolve('Bien!')
  }, 1000)
})

const cows = 15;

const countCows = new Promise(function(resolve, reject) {
  if (cows > 10) {
    resolve("We have the required cows")
  }
  else {
    reject('We dont have the required cows, im sad :(')
  }
})

countCows.then(result => {
  console.log(result);
}).catch(error => {
  console.log(error);
}).finally(() => {
  console.log('Finally');
})
