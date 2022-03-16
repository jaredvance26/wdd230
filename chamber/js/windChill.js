url =
  "https://api.openweathermap.org/data/2.5/weather?id=5310193&appid=34dd0d127d4ea30eac4da8671ffa60e3&units=imperial";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    

    const temp = Math.round(data.main.temp);
    const wind = Math.round(data.wind.speed);

    const icon = data.weather[0].icon;
    const desc = data.weather[0].description;

    src = `https://openweathermap.org/img/wn/${icon}@2x.png`

    document.getElementById("icon").src = src;
    document.getElementById("icon").alt = `${desc} icon`;

    document.getElementById("desc").textContent = desc;

    document.getElementById("temp").textContent = temp;
    document.getElementById("speed").textContent = wind;

    const t = Number(document.getElementById("temp").textContent);
    const s = Number(document.getElementById("speed").textContent);


    document.getElementById("chill").textContent = chillFactor(t, s);

    function chillFactor(t, s) {
      if ((t <= 50) & (s >= 3)) {
        return Math.round(
          35.74 +
            0.6215 * t -
            35.75 * Math.pow(s, 0.16) +
            0.4275 * t * Math.pow(s, 0.16)
        );
      } else {
        return "N/A";
      }
    }
  });


