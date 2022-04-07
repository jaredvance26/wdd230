
let today = new Date(document.lastModified);

document.getElementById("date").textContent = today.toLocaleDateString();

document.getElementById("time").textContent = today.toLocaleTimeString();