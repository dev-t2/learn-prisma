const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
    // reject(new Error());
  }, 1000);
});

myPromise
  .then((number) => {
    console.log(number);
  })
  .catch((error) => {
    console.error(error);
  });
