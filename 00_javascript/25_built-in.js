const numbers = [1, 2, 3, 4, 5];
let sum1 = 0;

numbers.forEach(number => (sum1 += number));
console.log(sum1);

console.log('');

const sum2 = numbers.reduce((sum, number) => sum + number, 0);
console.log(sum2);

console.log('');

const average = numbers.reduce((sum, number, index, array) => {
  if (index === array.length - 1) {
    return (sum + number) / array.length;
  }

  return sum + number;
}, 0);

console.log(average);
