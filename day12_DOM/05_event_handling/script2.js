// way 2 to add eventHandler

function eventHandler(msg) {
  console.log(msg);
}

const h1Elem = document.querySelector("h1");

h1Elem.onclick = function abc() {
  eventHandler("Clicked");
};

h1Elem.ondblclick = function abc() {
  eventHandler("Double Clicked");
};

h1Elem.onmouseleave = () => {
  eventHandler("mouse leave");
};

h1Elem.onmouseenter = () => {
  eventHandler("mouse enter");
};
