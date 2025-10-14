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
              <button class="text-red-500 underline" onClick="deleteStudent('${id}')">Delete</button>
            </td>
          </tr>`;
  });
  studentsTableBody.innerHTML = studentsHTML;
}

// function deleteStudent(id) {
//   const result = confirm("Are you want to delete?");
//   if (result) {
//     fetch(`${apiBaseURL}/students/${id}`, {
//       method: "DELETE",
//     })
//       .then((resp) => resp.json())
//       .then((data) => {
//         window.location.reload();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// }

async function deleteStudent(id) {
  const result = confirm("Are you sure you want to delete?");

  if (result) {
    try {
      const response = await fetch(`${apiBaseURL}/students/${id}`, {
        method: "DELETE",
      });
      await response.json();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
}
// function fetchStudents() {
//   fetch(`${apiBaseURL}/students`)
//     .then((resp) => resp.json())
//     .then((data) => {
//       displayStudents(data);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }

async function fetchStudents() {
  try {
    const response = await fetch(`${apiBaseURL}/students`);
    const data = await response.json();
    displayStudents(data);
  } catch (err) {
    console.error(err);
  }
}

fetchStudents();
