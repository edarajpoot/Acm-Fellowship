//write the code in a single line.

const expression1 = 100 % 50;
const expression2 = 100 / 50;
const expression3 = expression1 < expression2;
const expression4 = expression3 && 300 + 5 ===305;
const expression5 = !expression4;
console.log(expression5);

//Now in single line

const result = !(((100 % 50) < (100 /50)) && (300 + 5===305));
console.log(result);

//The result will be 'false'.