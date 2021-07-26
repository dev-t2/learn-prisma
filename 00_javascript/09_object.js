const cat = {
  name: '야옹이',
  age: 2,
  sound: '야옹',
  say() {
    console.log(this.sound);
  },
  sleep: () => {
    console.log('Zzz');
  },
};
console.log(cat.name);
console.log(cat.age);
cat.say();
cat.sleep();

console.log('');

const spaceKey = {
  'key with space': true,
};
console.log(spaceKey['key with space']);

console.log('');

const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨',
};
const captainAmerica = {
  name: '스티븐 로저스',
  actor: '크리스 에반스',
  alias: '캡틴 아메리카',
};
console.log(ironMan);
console.log(captainAmerica);

const print = ({ name, actor, alias }) => {
  console.log(`${alias}(${name}) 역할을 맡은 배우는 ${actor}입니다.`);
};
print(ironMan);
print(captainAmerica);

console.log('');

const numberObj = { a: 1, b: 2 };
numberObj.a = 5;
console.log(numberObj);
