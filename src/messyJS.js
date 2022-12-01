// 需要报 for-direction Linter error
for (let i = 0; i < 10; i--) {
  console.log(i);
}

// 需要报 max-len Linter error
const longFunction = (somethingVeryLong1) => {
  console.log(somethingVeryLong1);
};
longFunction(1, 2, 3, 4, 5);

// 需要格式化的代码
let x = 1;
const hi = 2;
const aa = 333;
let y = {
  name: 'Jack',
  age: 11,
};

console.log('result', x, y);

console.log(hi, aa);

const isTrue = true;

function foo() {
  return (
    isTrue &&
    [0, 1, 2].map(function (num) {
      return num * 2;
    })
  );
}

foo();
