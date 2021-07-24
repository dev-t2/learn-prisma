let a = 1;
if (a + 1 === 2) {
  console.log('a + 1 = 2');
}

a = 1;
if (true) {
  let a = 2;
  console.log('if문 안의 a 값은 ' + a);
}
console.log('if문 밖의 a 값은 ' + a);

a = 10;
if (a > 15) {
  console.log('a가 15보다 크다.');
} else if (a === 10) {
  console.log('a = 10');
} else {
  console.log('a가 15보다 작다.');
}

const device = 'android';
switch (device) {
  case 'android':
    console.log('안드로이드');
    break;
  case 'iphone':
    console.log('아이폰');
    break;
  default:
    console.log('알 수 없음');
}
