import { cars } from "./data.js";
const box = document.querySelector(".box");

for (let i of cars) {
  let wrapBox = document.createElement("div");
  wrapBox.className = "wrapper";
  wrapBox.innerHTML = `
<img class="img" src="${i.img}"/>
<p class="text name">${i.name}</p>
<p class="text type">${i.types}</p>
<p class="text">${i.speed}</p>
<p class="text">${i.Hp}</p>
<i class="text">${i.price}</i>
`;
  box.prepend(wrapBox);
}
