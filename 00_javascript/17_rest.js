const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple',
};

const { color, ...cuteSlime } = purpleCuteSlime;
console.log(color);
console.log(cuteSlime);

console.log('');

const { attribute, ...slime } = cuteSlime;
console.log(attribute);
console.log(slime);

console.log('');

const numbers = [1, 2, 3, 4, 5, 6, 7];
const [one, ...rest] = numbers;
console.log(one);
console.log(rest);

console.log('');

const sum = (...rest) => {
  return rest.reduce((sum, number) => sum + number, 0);
};
console.log(sum(1, 2, 3, 4, 5, 6, 7));

console.log('');

const max = (...numbers) => {
  return Math.max(...numbers);
};
console.log(max(1, 2, 3, 4, 10, 5, 6, 7));
