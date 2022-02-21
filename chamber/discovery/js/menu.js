const menu = document.getElementById("ham_btn");

menu.addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("open");
  document.querySelector(".images").classList.toggle("open");
  document.getElementById("ham_btn").classList.toggle("open");
});
