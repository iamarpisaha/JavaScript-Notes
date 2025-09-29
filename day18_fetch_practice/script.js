const apiBaseURL = "https://jsonplaceholder.typicode.com";
function fetchPosts() {
  fetch(`${apiBaseURL}/posts`, {
    method: "GET",
  })
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(data);
      addPostsToTable(data);
    })
    .catch((err) => {
      console.error(err);
    });
}

function addPostsToTable(posts) {
  const postsTableBody = document.querySelector("#posts-table tbody");
  const postsRow = posts.map((post) => {
    const trElem = `<tr class="odd:bg-white even:bg-gray-50 border-b border-gray-200">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">${post.userId}</th>
            <td class="px-6 py-4">${post.id} </td>
            <td class="px-6 py-4">${post.title}</td>
            <td class="px-6 py-4">${post.body}</td>
            <td class="px-6 py-4">
              <a href="#" class="font-medium text-blue-600 hover:underline"
                >Edit</a
              >
            </td>
          </tr>`;

    return trElem;
  });

  postsTableBody.innerHTML += postsRow.join("");
}

function addPost(payload) {
  fetch(`${apiBaseURL}/posts`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

fetchPosts();

const form = document.getElementById("post-add-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const payload = {};

  for (const [key, value] of formData) {
    payload[key] = value;
  }
  addPost(payload);
});
