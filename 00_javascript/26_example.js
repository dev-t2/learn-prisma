const countBiggerThanTen = numbers => {
  const result = numbers.reduce((count, number) => {
    if (number > 10) {
      return count + 1;
    }

    return count;
  }, 0);

  return result;
};

console.log(countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]));
