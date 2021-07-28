const sleep = ms => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve();
      // reject(new Error());
    }, ms)
  );
};

const getDog = async () => {
  await sleep(1000);

  return '개';
};

const getRabbit = async () => {
  await sleep(500);

  return '토끼';
};

const getTurtle = async () => {
  await sleep(2000);

  return '거북이';
};

const process = async () => {
  const dog = await getDog();

  console.log(dog);

  const rabbit = await getRabbit();

  console.log(rabbit);

  const turtle = await getTurtle();

  console.log(turtle);
};

process();
