const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
for (let i = 0; i < superheroes.length; i++) {
  console.log(superheroes[i]);
}
superheroes.forEach(hero => console.log(hero));

console.log('');

let array = [1, 2, 3, 4, 5, 6, 7, 8];
let squared = [];
for (let i = 0; i < array.length; i++) {
  squared.push(array[i] * array[i]);
}
console.log(squared);

squared = [];
array.forEach(n => squared.push(n * n));
console.log(squared);

console.log(array.map(n => n * n));

console.log('');

console.log(superheroes.indexOf('토르'));

console.log('');

const todos = [
  { id: 1, text: 'HTML', isDone: true },
  { id: 2, text: 'CSS', isDone: true },
  { id: 3, text: 'JavaScript', isDone: true },
  { id: 4, text: 'React', isDone: false },
];
const index = todos.findIndex(todo => todo.id === 3);
console.log(index);
const todo = todos.find(todo => todo.id === 3);
console.log(todo);

console.log('');

console.log(todos.filter(todo => todo.isDone));

console.log('');

let numbers = [10, 20, 30, 40];
numbers.splice(2, 1);
console.log(numbers);

console.log('');

numbers = [10, 20, 30, 40];
console.log(numbers.slice(0, 2));
console.log(numbers);

console.log('');

numbers = [10, 20, 30, 40];
console.log(numbers.shift());
console.log(numbers);

console.log('');

numbers = [10, 20, 30, 40];
console.log(numbers.pop());
console.log(numbers);

console.log('');

numbers = [10, 20, 30, 40];
numbers.unshift(5);
console.log(numbers);

console.log('');

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(arr1.concat(arr2));

console.log('');

array = [1, 2, 3, 4, 5, 6];
console.log(array.join());
console.log(array.join(' '));
console.log(array.join(', '));

console.log('');

numbers = [1, 2, 3, 4, 5];
sum = 0;
numbers.forEach(n => (sum += n));
console.log(sum);
console.log(numbers.reduce((sum, number) => sum + number, 0));
console.log(
  numbers.reduce((sum, number, index, array) => {
    if (index === array.length - 1) {
      return (sum + number) / array.length;
    }

    return sum + number;
  })
);

console.log('');

const countBiggerThanTen = numbers => {
  return numbers.reduce((count, number) => {
    if (number > 10) {
      return count + 1;
    }

    return count;
  }, 0);
};
console.log(countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]));
