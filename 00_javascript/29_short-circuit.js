const dog = {
  name: 'JavaScript',
};

const getName = animal => {
  const name = animal && animal.name;

  return name || '이름이 없습니다.';
};

console.log(getName(dog));
console.log(getName());

console.log('');

console.log(true && 'hello');
console.log(false && 'hello');
console.log('hello' && 'bye');
console.log(null && 'hello');
console.log(undefined && 'hello');
console.log('' && 'hello');
console.log(0 && 'hello');
console.log(1 && 'hello');
console.log(1 && 1);
