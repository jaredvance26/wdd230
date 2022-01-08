alert(document.lastModified);

let lastModified = new Date(document.lastModified);


document.getElementById("date").innerText = lastModified.toLocaleDateString();
document.getElementById("time").innerText = lastModified.toLocaleTimeString();