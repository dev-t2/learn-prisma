const object = { a: 1, b: 2 };
const { a, b = 2 } = object;
console.log(a);
console.log(b);

console.log('');

const print = ({ a, b = 2 }) => {
  console.log(a);
  console.log(b);
};
print(object);

console.log('');

const animal = {
  name: '멍멍이',
  type: '개',
};

const { name: nickname } = animal;
console.log(nickname);

console.log('');

const array = [1, 2];
const [one, two = 2] = array;
console.log(one);
console.log(two);

console.log('');

const deepObject = {
  state: {
    infomation: {
      name: 'JavaScript',
    },
  },
  value: 5,
};
const {
  state: {
    infomation: { name },
  },
  value,
} = deepObject;
const newObject = { name, value };
console.log(newObject);
