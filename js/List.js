const h1 = document.querySelector("h1");
const linkList = document.getElementById("List");

h1.addEventListener("click", () => {
  linkList.classList.toggle("show");
});
