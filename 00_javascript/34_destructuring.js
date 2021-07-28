const object = { a: 1, b: 2 };
const { a, b = 2 } = object;

console.log(a);
console.log(b);
