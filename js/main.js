window.addEventListener("load", function () {
  const minimumLoadTime = 3500; // Minimum time to show the loader (e.g., 1 second)

  setTimeout(function () {
    // Add the 'hidden' class to trigger the fade-out transition
    document.getElementById("loader").classList.add("hidden");

    // Wait for the transition to complete before fully hiding the loader
    setTimeout(function () {
      document.getElementById("loader").style.display = "none";
    }, 500); // This delay should match the transition duration (0.5s in this case)
  }, minimumLoadTime);
});

var btn = document.getElementById("btn");
function leftClick() {
  btn.style.right = "140px";
  setTimeout(() => {
    window.location.href = "./index.html";
  }, 1000);
}
function rightClick() {
  btn.style.left = "140px";
  setTimeout(() => {
    window.location.href = "./indexArabic.html";
  }, 1000);
}

const i = document.querySelector("i");
const linkList = document.getElementById("List");
i.addEventListener("click", () => {
  linkList.classList.toggle("show");
});
