const apiBaseURL = "https://crud-api-4tam.onrender.com/api";

const studentForm = document.getElementById("student-form");

studentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const payload = {
    address: {},
  };
  for (const [key, value] of formData) {
    if (["city", "country", "pin"].includes(key)) {
      if (value) {
        payload["address"][key] = value;
      }
    } else {
      payload[key] = value;
    }
  }

  fetch(`${apiBaseURL}/students`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      window.location.href = "/";
    })
    .catch((err) => {
      console.log(err);
    });
});
