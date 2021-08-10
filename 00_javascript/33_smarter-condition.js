const makeSound = (animal) => {
  const tasks = {
    개: () => '멍멍',
    고양이: () => '야옹',
    비둘기: () => '구구 구 구',
  };

  return tasks[animal] ? tasks[animal]() : '...?';
};

console.log(makeSound('개'));
console.log(makeSound('노트북'));
