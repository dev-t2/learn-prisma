const array = [1, 2, 3, 4, 5, 6, 7, 8];
const result1 = [];

for (let i = 0; i < array.length; i++) {
  result1.push(array[i] * array[i]);
}

console.log(result1);

console.log('');

const result2 = [];
array.forEach(number => result2.push(number * number));

console.log(result2);

console.log('');

const result3 = array.map(number => number * number);
console.log(result3);
