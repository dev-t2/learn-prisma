const dog1 = {
  name: '멍멍이',
  age: 2,
};
console.log(dog1.name);
console.log(dog1.age);

const sample = {
  'key with space': true,
};
console.log(sample['key with space']);

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

const print1 = hero => {
  console.log(
    `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor}입니다.`
  );
};
print1(ironMan);
print1(captainAmerica);

const print2 = ({ name, actor, alias }) => {
  console.log(`${alias}(${name}) 역할을 맡은 배우는 ${actor}입니다.`);
};
print1(ironMan);
print1(captainAmerica);

const dog2 = {
  name: '멍멍이',
  sound: '멍멍',
  say() {
    console.log(this.sound);
  },
};
dog2.say();

const numbers1 = {
  a: 1,
  b: 2,
};
numbers1.a = 5;
console.log(numbers1);
