const sleep = ms => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve();
      // reject(new Error());
    }, ms)
  );
};

const process1 = async () => {
  console.log('Start');

  try {
    await sleep(1000);

    console.log('End');
  } catch (error) {
    console.error(error);
  }
};

// process1();

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

const process2 = async () => {
  const dog = await getDog();

  console.log(dog);

  const rabbit = await getRabbit();

  console.log(rabbit);

  const turtle = await getTurtle();

  console.log(turtle);
};

// process2();

const process3 = async () => {
  const [dog, rabbit, turtle] = await Promise.all([
    getDog(),
    getRabbit(),
    getTurtle(),
  ]);

  console.log({ dog, rabbit, turtle });
};

// process3();

const process4 = async () => {
  const result = await Promise.race([getDog(), getRabbit(), getTurtle()]);

  console.log(result);
};

process4();
