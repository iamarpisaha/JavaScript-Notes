const apiBaseURL = "https://crud-api-4tam.onrender.com/api";

const studentForm = document.getElementById("student-form");

studentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const payload = {
    address: {},
  };
  for (const [key, value] of formData) {
    if (["city", "state", "country", "pin"].includes(key)) {
      payload["address"][key] = value;
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
    .then(() => {
      fetchStudents();
    })
    .catch((err) => {
      console.log(err);
    });
});

function displayStudents(students) {
  const studentsTableBody = document.getElementById("student-table-body");
  let studentsHTML = "";
  students.forEach((student) => {
    const { name, dob, gender, address } = student;
    const { city, state, country, pin } = address || {};
    studentsHTML += `<tr>
                  <td  class="px-6 py-3 text-left">
                    ${name}
                  </td>
                  <td  class="px-6 py-3 text-left">
                    ${dob.split("T")[0]}
                  </td>
                  <td  class="px-6 py-3 text-left">
                    ${gender}
                  </td>
                  <td  class="px-6 py-3 text-left">
                    ${city ? `${city}, ` : ""} 
                    ${state ? `${state}` : ""}
                    ${country ? `${country}, ` : ""}
                    ${pin ? `${pin}` : ""}
                  </td>
                </tr>`;
  });
  studentsTableBody.innerHTML = studentsHTML;
}

function fetchStudents() {
  fetch(`${apiBaseURL}/students`)
    .then((resp) => resp.json())
    .then((data) => {
      displayStudents(data);
    })
    .catch((err) => {
      console.error(err);
    });
}

fetchStudents();
