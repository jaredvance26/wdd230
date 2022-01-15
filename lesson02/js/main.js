let lastModified = new Date(document.lastModified);
let today = new Date()

document.getElementById("year").innerText = today.getFullYear();
document.getElementById("updated").innerText = lastModified.toLocaleDateString();
document.getElementById("updated_time").innerText = lastModified.toLocaleTimeString();
