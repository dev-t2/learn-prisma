for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log('');

const names = ['개', '고양이', '거북이'];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log('');

let i = 0;
while (i < 10) {
  console.log(i);

  i++;
}

console.log('');

const numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
  console.log(number);
}

console.log('');

const cat = {
  name: '고양이',
  sound: '야옹',
  age: 3,
};

console.log(Object.entries(cat));
console.log(Object.keys(cat));
console.log(Object.values(cat));

console.log('');

for (let key in cat) {
  console.log(`${key}: ${cat[key]}`);
}

console.log('');

for (let i = 0; i < 10; i++) {
  if (i === 2) continue;

  console.log(i);

  if (i === 5) break;
}
