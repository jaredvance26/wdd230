
updated = new Date(document.lastModified);


document.getElementById("updated").innerText = updated.toLocaleDateString();
document.getElementById("time").innerText = updated.toLocaleTimeString();


let lastVisitDate;

const now = Date.now();

if(window.localStorage.getItem('last-visit-date')) {
    lastVisitDate = window.localStorage.getItem("last-visit-date");
}
else {
    lastVisitDate = now;
}

const daySinceLastVisit = Math.floor((now - lastVisitDate)/86400);

document.getElementById('days').innerText = daySinceLastVisit;