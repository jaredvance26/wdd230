const menu = document.getElementById("ham_btn");
menu.onclick = () => {
  document.getElementById("main_nav").classList.toggle("open");
  document.getElementById("ham_btn").classList.toggle("open");
  document.getElementById("menu").classList.toggle("open");
};
