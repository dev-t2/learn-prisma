const person = {
  name: 'JavaScript',
};

const print = person => {
  if (!person) {
    return;
  }

  console.log(person.name);
};

print(person);
print();
print(null);

console.log('');

console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);

console.log('');

console.log(!!undefined);
console.log(!!null);
console.log(!!0);
console.log(!!'');
console.log(!!NaN);
