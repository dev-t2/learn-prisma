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
