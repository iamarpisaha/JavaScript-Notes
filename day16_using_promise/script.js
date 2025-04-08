function myPromise() {
  const resolveBtn = document.getElementById("resolve-btn");
  const rejectBtn = document.getElementById("reject-btn");

  return new Promise((resolve, reject) => {
    resolveBtn.addEventListener("click", () => {
      resolve(10);
    });
    rejectBtn.addEventListener("click", () => {
      reject("Hi");
    });
  });
}
