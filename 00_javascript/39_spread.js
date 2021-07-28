const slime = {
  name: '슬라임',
};

const cuteSlime = {
  ...slime,
  attribute: 'cute',
};

const purpleCuteSlime = {
  ...cuteSlime,
  color: 'purple',
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
