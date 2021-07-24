const slime = {
  name: '슬라임',
};

const cuteSlime = {
  ...slime,
  attribute: 'cute',
};

const purpleCuteSlime = {
  ...cuteSlime,
  color: 'purple',
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);

console.log('');

const animals = ['개', '고양이', '참새'];
const updatedAnimals = [...animals, '비둘기'];
console.log(animals);
console.log(updatedAnimals);

console.log('');

const numbers = [1, 2, 3, 4, 5];
const updatedNumbers = [...numbers, 1000, ...numbers];
console.log(numbers);
console.log(updatedNumbers);
