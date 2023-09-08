const form = document.querySelector(".form");
const input = document.querySelectorAll(".input");
const box = document.querySelector(".boxer");

let posts = [];

const render = () => {
  for (let i of posts) {
    let div = document.createElement("div");

    div.innerHTML = `
  <p>${i.First_name}</p>
  <p>${i.Last__name}</p>
  <p>${i.Email}</p>
   <p>${i.Password}</p>
  `;

    box.append(div);
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let obj = {};
  for (let i of input) {
    obj[i.name] = i.value;
    i.value = "";
  }
  posts.push({ ...obj, id: Date.now() });

  render();
});
