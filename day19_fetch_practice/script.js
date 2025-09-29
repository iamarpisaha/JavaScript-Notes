const apiBaseURL = "https://crud-api-4tam.onrender.com/api/students";

const studentsTableBody = document.getElementById("student-table-body");

function displayStudents(students) {
  let studentsHTML = "";
  students.forEach((student) => {
    console.log(student);
    studentsHTML += `<tr>
                  <td  class="px-6 py-3 text-left text-xs">
                    ${student.name}
                  </td>
                  <td  class="px-6 py-3 text-left text-xs">
                    ${student.dob.split("T")[0]}
                  </td>
                  <td  class="px-6 py-3 text-left text-xs">
                    ${student.gender}
                  </td>
                  <td  class="px-6 py-3 text-left text-xs">
                    ${student.address ? (student.address.city) : "-"}
                  </td>
                </tr>`;
  });
  studentsTableBody.innerHTML = studentsHTML;
}
function fetchStudents() {
  fetch(`${apiBaseURL}`)
    .then((resp) => resp.json())
    .then((data) => {
      displayStudents(data);
    })
    .catch((err) => {
      console.error(err);
    });
}
fetchStudents();
