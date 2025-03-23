const nums = [2, 3, 4, 5];

// forEach((num) => console.log(num), nums);
// forEach((num, index, arr) => {
//   console.log(num, index, arr);
// }, nums);

// const a = nums.map((item) => {
//   console.log(item);

//   return 5;
// });

// console.log(a);

const a = map((item) => {
  if (item % 2 === 0) {
    return true;
  }
  return false;
}, nums);
console.log(a);
