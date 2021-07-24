const isAnimal1 = name => {
  const animal = ['고양이', '개', '거북이', '너구리'];

  return animal.includes(name);
};

console.log(isAnimal1('개'));
console.log(isAnimal1('노트북'));

console.log('');

const isAnimal2 = name => ['고양이', '개', '거북이', '너구리'].includes(name);

console.log(isAnimal2('개'));
console.log(isAnimal2('노트북'));

console.log('');

const getSound = animal => {
  const sound = {
    개: '멍멍',
    고양이: '야옹',
    참새: '짹짹',
    비둘기: '구구 구 구',
  };

  return sound[animal] || '...?';
};

console.log(getSound('개'));
console.log(getSound('노트북'));

console.log('');

const makeSound = animal => {
  const tasks = {
    개: () => '멍멍',
    고양이: () => '야옹',
    비둘기: () => '구구 구 구',
  };

  return tasks[animal] ? tasks[animal]() : '...?';
};

console.log(makeSound('개'));
console.log(makeSound('노트북'));
