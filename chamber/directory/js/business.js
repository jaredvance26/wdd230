const json_file = "https://raw.githubusercontent.com/jaredvance26/wdd230/main/chamber/directory/js/data.json";
let cardView = document.querySelector("div.class")

fetch(json_file)
    .then(response => response.json())
    .then(data => {

        for (let company of data.companies) {
            createCard(company);


        };

        function createCard(company) {
            let card = document.createElement("div");
            
            let img = document.createElement("img");

            img.src = company.pic_url;
            img.alt = "pic of logo"

            let address = document.createElement("p");
            address.innerText = company.address;

            let number = document.createElement("p");
            number.innerText = company.phone;

            let website = document.createElement("p");
            website.innerText = company.website;

            card.appendChild(img);
            card.appendChild(address);
            card.appendChild(number);
            card.appendChild(website);

            

            
            


        }
        
    })