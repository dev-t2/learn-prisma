const superHeroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

for (let i = 0; i < superHeroes.length; i++) {
  console.log(superHeroes[i]);
}

console.log('');

superHeroes.forEach(hero => {
  return console.log(hero);
});
