for (let i = 0; i < 10; i++) {
  console.log(i);
}

const names = ['멍멍이', '야옹이', '멍뭉이'];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

let i = 0;
while (i < 10) {
  console.log(i);

  i++;
}

let numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
  console.log(number);
}

const dog = {
  name: '멍멍이',
  sound: '멍멍',
  age: 2,
};
console.log(Object.entries(dog));
console.log(Object.keys(dog));
console.log(Object.values(dog));

for (let key in dog) {
  console.log(`${key}: ${dog[key]}`);
}

for (let i = 0; i < 10; i++) {
  if (i === 2) continue;

  console.log(i);

  if (i === 5) break;
}
