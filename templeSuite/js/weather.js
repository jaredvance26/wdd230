
const url = "https://api.openweathermap.org/data/2.5/onecall?lat=38.895111&lon=-77.036369&exclude=minutely,hourly&units=imperial&appid=34dd0d127d4ea30eac4da8671ffa60e3";

fetch(url)
    .then(response => response.json())
    .then(data => {

        // Get weather info in weather card
        document.querySelector("span.temp").textContent = Math.round(data.current.temp);
        document.querySelector("h3.desc").textContent = data.current.weather[0].description;
        document.querySelector("span.humidity").textContent = data.current.humidity;

        // Get forecast
      
        let forecast = document.querySelector("div.forecast");

        for(i of range(1,3)) {
            let div = document.createElement('div');

            let date = document.createElement("h3");
            date.textContent = new Date(data.daily[i].dt * 1000).toLocaleDateString('en-us',{weekday: "long"})

            let forecastTemp = document.createElement("h3");
            forecastTemp.textContent = `Forecast: ${Math.round(data.daily[i].temp.day)}\u00B0F`;

            div.appendChild(date);
            div.appendChild(forecastTemp);

            forecast.appendChild(div);
        }

        //alerts
       
        let section = document.querySelector("section.alerts")
        
        if (data.hasOwnProperty("alerts")) {
            let div = document.createElement("div");

            let x = document.createElement("button");
            x.textContent = "✕";
            x.style.fontSize = "3em";
            x.style.color = "white";
            
            x.addEventListener("click", () => {
                section.classList.toggle("gone");
            });

            div.style.backgroundColor = "red";
            div.style.padding = "1em";
            div.style.marginTop = "4em";
    
            let event = document.createElement("h1");
            event.textContent = data.alerts[0].event;
            event.style.color = "white";
            event.style.textAlign = "center";

            let desc = document.createElement("p");
            desc.textContent = data.alerts[0].description;
            desc.style.color = "white";

            div.appendChild(x);
            div.appendChild(event);
            div.appendChild(desc);

            section.appendChild(div);
        };
        

        // Range function
        function range(start, end) {
            var ans = [];
            for (let i = start; i <= end; i++) {
                ans.push(i);
            }
            return ans;
        }
    })