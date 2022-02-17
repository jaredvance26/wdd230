
const temp = Number(document.getElementById("temp").textContent);
const speed = Number(document.getElementById("speed").textContent);

function chillFactor(t,s) {
    if(t <=50 & s >= 3) {
    return Math.round(35.74 + (0.6215 *t) - (35.75 * Math.pow(s,.16)) + (0.4275 * t * Math.pow(s,.16)));
    }
    else {
        return("N/A")
    }
}

document.getElementById("chill").textContent = chillFactor(temp,speed);