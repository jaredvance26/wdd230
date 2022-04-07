let button = document.getElementById("button");

button.addEventListener("click", () => {
    document.querySelector("header.menu").classList.toggle("switch")
    document.querySelector("main.blur").classList.toggle("switch")
   
})