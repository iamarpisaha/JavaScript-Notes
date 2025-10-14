const apiBaseURL = "https://crud-api-4tam.onrender.com/api";

function displayStudents(students) {
  const studentsTableBody = document.querySelector("#student-list-table tbody");
  let studentsHTML = "";
  students.forEach((student) => {
    const { id, name, dob, gender, address } = student;
    const { city, country, pin } = address || {};
    studentsHTML += `<tr
            class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              ${name}
            </th>
            <td class="px-6 py-4">
              ${dob.split("T")[0]}
            </td>
            <td class="px-6 py-4">
              ${gender}
            </td>
            <td class="px-6 py-4">
              ${city ? `${city}, ` : ""} 
                    ${country ? `${country}, ` : ""}
                    ${pin ? `${pin}` : ""}
            </td>
            <td class="px-6 py-4">
              <a href="/updateStudent.html?id=${id}" class="text-blue-800 underline">Edit</a>
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
