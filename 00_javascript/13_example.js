const biggerThanThree = numbers => {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 3) {
      result.push(numbers[i]);
    }
  }

  return result;
};

console.log(biggerThanThree([1, 2, 3, 4, 5, 6, 7]));
