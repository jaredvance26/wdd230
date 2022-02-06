
let options = {
    day: "2-digit",
    month: "long",
    year: "numeric"


};

let today = new Date()
let updated = new Date(document.lastModified)

document.getElementById("day").innerText = today.toLocaleDateString(today, {weekday: "long"})
document.getElementById("date").innerText = today.toLocaleString(today, options);

document.getElementById("updated").innerText = updated.toLocaleDateString();
document.getElementById("time").innerText = updated.toLocaleTimeString();

// Banner goes up on mondays and tuesdays

if(today.getDay() == 1 | today.getDay() == 2) {
    document.getElementById("banner").style.display = "block";
};
