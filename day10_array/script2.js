//Array Methods - at, concat, fill, includes, indexOf, lastIndexOf, join, pop, push, reverse, shift, unShift, slice, splice, toString

const arr = [1, 2, 3, 4, 5];
const name = ["arpi", "gourab", "rahul", "sudipta"];
const myname = "Gourab Talukdar";

// console.log(arr); // (5) [1, 2, 3, 4, 5]
// console.log(arr.at(10)); // undefined
// console.log(arr.at(3)); // 4
// console.log(arr.concat([6, 7, 8])); //(8) [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(arr.fill(0, 1, 3)); // (5) [1, 0, 0, 4, 5]
// console.log(arr.includes(3)); // true
// console.log(name.includes("gourab")); // true
// console.log(name.indexOf("sudipta")); // 3
// console.log(myname.indexOf("a")); // 4
// console.log(myname.lastIndexOf("a")); // 13
// console.log(name.join("_")); //arpi_gourab_rahul_sudipta

// console.log(name.pop()); // sudipta

// console.log(name.push("Bhramar")); //5
// console.log(name); // (5) ['arpi', 'gourab', 'rahul', 'sudipta', 'Bhramar']

// console.log(name.reverse()); // (4) ['sudipta', 'rahul', 'gourab', 'arpi']

// console.log(name.shift()); // arpi
// console.log(name); //(3) ['gourab', 'rahul', 'sudipta']

// console.log(name.unshift("Sourav")); //5
// console.log(name); //(5) ['Sourav', 'arpi', 'gourab', 'rahul', 'sudipta']

// console.log(name.slice(0, 2)); // (2) ['arpi', 'gourab']
// console.log(name); // (4) ['arpi', 'gourab', 'rahul', 'sudipta']

// console.log("Hello".slice(0, 2)); //He

// console.log(name.splice(1, 2)); // (2) ['gourab', 'rahul']
// console.log(name); // (2) ['arpi', 'sudipta']

// console.log(arr.toString()); // 1,2,3,4,5
// console.log(name.toString()); // arpi,gourab,rahul,sudipta
