const arr = [1, 2, 3, 4, 5];
const name = ["arpi", "gourab", "rahul", "sudipta"];
const myname = "Gourab Talukdar";

// ########### at ############

// arr.at = (value) => {
//   if (value <= arr.length - 1 && value >= 0) {
//     return arr[value];
//   }
// };

// console.log(arr.at(10)); // undefined
// console.log(arr.at(3)); // 4

// ########### For loop ############

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// ########### fill ############

//------way 1

// function fill(fillValue, start = 0, end = arr.length) {
//   for (let i = start; i < end; i++) {
//     arr[i] = fillValue;
//   }
// }
// arr.fill = fill;
// console.log(arr.fill(0));
// console.log(arr); // (5) [0, 0, 0, 0, 0, fill: ƒ]
// console.log(arr.fill(9, 1, 3)); // (5) [1, 9, 9, 4, 5, fill: ƒ]
// console.log(arr);
// console.log(arr.fill(4, 2));
// console.log(arr); // (5) [1, 2, 4, 4, 4, fill: ƒ]

//------way 2

// arr.fill = function (fillValue, start = 0, end = arr.length) {
//   for (let i = start; i < end; i++) {
//     arr[i] = fillValue;
//   }
// };

// console.log(arr.fill(0));
// console.log(arr); // (5) [0, 0, 0, 0, 0, fill: ƒ]
// console.log(arr.fill(9, 1, 3)); // (5) [1, 9, 9, 4, 5, fill: ƒ]
// console.log(arr);
// console.log(arr.fill(4, 2));
// console.log(arr); // (5) [1, 2, 4, 4, 4, fill: ƒ]

//------way 3

// arr.fill = (fillValue, start = 0, end = arr.length) => {
//   for (let i = start; i < end; i++) {
//     arr[i] = fillValue;
//   }
//   return arr;
// };

// console.log(arr.fill(0));
// console.log(arr); // (5) [0, 0, 0, 0, 0, fill: ƒ]
// console.log(arr.fill(9, 1, 3)); // (5) [1, 9, 9, 4, 5, fill: ƒ]
// console.log(arr);
// console.log(arr.fill(4, 2));
// console.log(arr); // (5) [1, 2, 4, 4, 4, fill: ƒ]

// ########### includes ############

// arr.includes = (value) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(arr.includes(3));

// ########### Pop ############

// name.pop = () => {
//   if (name.length > 0) {
//     const popValue = name[name.length - 1];
//     name.length--;
//     return popValue;
//   }
// };
// console.log(name.pop()); // sudipta
// console.log(name); // (3) ['arpi', 'gourab', 'rahul', pop: ƒ]

// ########### Push ############

// name.push = (value) => {
//   name[name.length] = value;
//   return name.length;
// };

// console.log(name.push("Bhramar")); // 5
// console.log(name); // (5) ['arpi', 'gourab', 'rahul', 'sudipta', 'Bhramar', push: ƒ]
