const dogImg = document.getElementById("dog-img");
const nextBtn = document.getElementById("next-btn");

function getDogImg() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");

  xhr.addEventListener("load", () => {
    const data = JSON.parse(xhr.response);
    dogImg.setAttribute("src", data.message);
  });

  xhr.send();
}

nextBtn.addEventListener("click", getDogImg);
