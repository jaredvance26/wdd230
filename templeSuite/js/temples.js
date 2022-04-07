let main = document.querySelector("main");


fetch("json/temples.json")
    .then(response => response.json())
    .then(data => {

     

        for (temple of data.temples) {

                let icon = document.createElement("span");
                icon.classList = "material-icons unliked";
                icon.textContent = "favorite";

                icon.addEventListener("click",() => {
                    icon.classList.toggle("liked");
                    i
                })

                img = document.createElement("img");
                img.src = temple.img;

                card = document.createElement("section");

                let templeName = document.createElement("h2");
                templeName.textContent = temple.name;

                let address = document.createElement("h3");
                address.textContent = temple.address;

                let phone = document.createElement("h3");
                phone.textContent = temple.phone

                let email = document.createElement("h3");
                email.textContent = temple.email;

                let services = createList("Services",temple.services);
                console.log(services);

                let ordinance = document.createElement("h3");
                ordinance.textContent = `Ordinance Schedule: ${temple.ordinanceSchedule}`;

                let session =  document.createElement("h3");
                session.textContent = `Session Schedule: ${temple.sessionSchedule}`;

                let closure = createList("Closure Schedule", temple.closureSchedule);

                let announced = document.createElement("h3");
                announced.textContent = `Announced: ${temple.history.announced}`

                let ground = document.createElement("h3");
                ground.textContent = `Groundbreaking: ${temple.history.groundbreaking}`;

                let dedicated = document.createElement("h3");
                dedicated.textContent = `Dedicated: ${temple.history.dedicated}`;

                let rededicated = document.createElement("h3");
                rededicated.textContent = `Rededicated: ${temple.history.rededicated}`;

                card.appendChild(icon);
                card.appendChild(templeName);
                card.appendChild(img);
                card.appendChild(address);
                card.appendChild(phone);
                card.appendChild(email);
                card.appendChild(services);
                card.appendChild(ordinance);
                card.appendChild(session);
                card.appendChild(closure);
                card.appendChild(announced);
                card.appendChild(ground);
                card.appendChild(dedicated);
                card.appendChild(rededicated);

                main.appendChild(card);

        }

        function createList(name,list) {
            let ul = document.createElement("ul");

            let h3 = document.createElement("h3");
            h3.textContent = name;

            ul.appendChild(h3);

            for (item of list) {
                let li = document.createElement("li");
                li.textContent = item;

                ul.appendChild(li);                
            }
            return(ul);
        }

    })


