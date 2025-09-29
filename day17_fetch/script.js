// 1
// console.log("program start");
// const a = fetch("https://jsonplaceholder.typicode.com/todos/1");

// a.then(function () {
//   console.log("Promise Fullfilied");
// });

// a.catch(function () {
//   console.log("Promise rejected");
// });

// console.log(a);
// console.log("program end");

// // 2
// console.log("program start");
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(function (resp) {
//     console.log(resp);
//     const jsonDataConversionPromise = resp.json();
//     jsonDataConversionPromise
//       .then(function (jsonData) {
//         console.log(jsonData);
//       })
//       .catch(function (err) {
//         console.error(err);
//       });
//   })
//   .catch(function (err) {
//     console.error(err.message);
//     console.warn(err.name); // demo
//   });
// console.log("program end");

// // 3
// console.log("program start");
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(function (resp) {
//     return resp.json();
//   })
//   .then(function (jsonData) {
//     console.log(jsonData);
//   })
//   .catch(function (err) {
//     console.error(err.message);
//     console.warn(err.name); // demo
//   });
// console.log("program end");

// 4
console.log("program start");
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((resp) => resp.json())
  .then((jsonData) => {
    console.log(jsonData);
  })
  .catch((err) => {
    console.error(err.message);
    console.warn(err.name); // demo
  });
console.log("program end");
