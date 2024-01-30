//selectores

const authorName = document.getElementById("name");
const authorAge = document.getElementById("age");
const btnSubmit = document.getElementById("btn-submit");
document.addEventListener("DOMContentLoaded", () => {
  getAuthor();
});

const URL = "http://localhost:3000/authors";

async function getAuthor() {}

btnSubmit.addEventListener("submit", (event) => {
  event.preventDefault();
  addAuthor();
  
});

async function addAuthor() {
  const newAuthor = {
    author: authorName.value,
    age: authorAge.value,
  };

  await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newAuthor),
  });
}
