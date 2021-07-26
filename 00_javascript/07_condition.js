const a = 1;
if (a + 1 === 2) {
  console.log('a + 1은 2와 같다.');
}

const b = 1;
if (true) {
  const b = 2;
  console.log('if 안의 b 값은 ' + b);
}
console.log('if 밖의 b 값은 ' + b);

const c = 10;
if (c > 15) {
  console.log('c가 15보다 크다.');
} else if (c === 10) {
  console.log('c는 10이다.');
} else {
  console.log('c가 15보다 작다.');
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
