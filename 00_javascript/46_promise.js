const increaseAndPrint = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;

      if (value === 5) {
        const error = new Error();
        error.name = 'ValueIsFiveError';

        return reject(error);
      }

      console.log(value);

      return resolve(value);
    }, 1000);
  });
};

increaseAndPrint(0)
  .then((number) => increaseAndPrint(number))
  .then((number) => increaseAndPrint(number))
  .then((number) => increaseAndPrint(number))
  .then((number) => increaseAndPrint(number))
  .catch((error) => console.error(error));
