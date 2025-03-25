// way 3 to add eventHandler

function eventHandler(msg) {
  console.log(msg);
}

const h1Elem = document.querySelector("h1");

// way 3.1
function abc() {
  eventHandler("click");
}

h1Elem.addEventListener("clicked", abc);

// way 3.2
h1Elem.addEventListener("dblclicked", function () {
  eventHandler("double click");
});

h1Elem.addEventListener("copy", function () {
  eventHandler("The text is copied");
});
