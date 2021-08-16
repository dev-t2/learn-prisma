const sleep = (ms) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve();
      // reject(new Error());
    }, ms)
  );
};

const process = async () => {
  console.log('Start');

  try {
    await sleep(1000);

    console.log('End');
  } catch (error) {
    console.error(error);
  }
};

process();
