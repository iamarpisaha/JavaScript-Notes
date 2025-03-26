const outerDiv = document.querySelector(".outer");
const innerDiv = outerDiv.querySelector(".inner");
const btn = innerDiv.querySelector("button");

// elem.addEventListener("eventType", handlerFunction, isCaptured)

// ######## Bubbling

btn.addEventListener("click", function (e) {
  console.log("btn clicked");
  console.log(e.target);
});

innerDiv.addEventListener("click", (e) => {
  console.log("inner clicked");
  console.log(e.target);
});

outerDiv.addEventListener("click", (e) => {
  console.log("outer clicked");
  console.log(e.target);
});

// //######## Capturing
// btn.addEventListener(
//   "click",
//   function (e) {
//     console.log("btn clicked");
//     console.log(e.target);
//   },
//   true
// );

// innerDiv.addEventListener(
//   "click",
//   (e) => {
//     console.log("inner clicked");
//     console.log(e.target);
//   },
//   true
// );

// outerDiv.addEventListener(
//   "click",
//   (e) => {
//     console.log("outer clicked");
//     console.log(e.target);
//   },
//   true
// );

// ### event bubbling flow
// Child -> parent1 -> parent2 -> ... -> body

// ### event capturing flow
// Child <- parent1 <- parent2 <- ... <- body
