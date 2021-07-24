let a = 1 + 2;
console.log(a);

a = 1 + 2 - (3 * 4) / 4;
console.log(a);

a = 1;
console.log(a++);
console.log(++a);

a = 1;
a += 3;
console.log(a);
a -= 3;
console.log(a);
a *= 3;
console.log(a);
a /= 3;
console.log(a);

a = !true;
console.log(a);

a = true && true;
console.log(a);

a = false || false;
console.log(a);

a = !((true && false) || (true && false) || !false);
console.log(a);

a = 1;
let b = 1;
console.log(a === b);
console.log(a !== b);

a = 10;
b = 15;
let c = 15;
console.log(a < b);
console.log(a > b);
console.log(b >= c);
console.log(a <= c);

a = 'Hello';
b = ' JavaScript';
console.log(a + b);
