const json_file = "https://raw.githubusercontent.com/jaredvance26/wdd230/main/chamber/directory/js/data.json";
const cardView = document.querySelector("div.cards");
const listView = document.querySelector("div.table");

let table = document.createElement("table");

fetch(json_file)
    .then(response => response.json())
    .then(data => {

        for (let company of data.companies) {
            createCard(company);
            createRows(company)
            createTable(company);
        }

        function createCard(company) {
            let card = document.createElement("div");
            
            let img = document.createElement("img");

            img.src = company.pic_url;
            img.alt = "pic of logo"

            let address = document.createElement("p");
            address.textContent = company.address;

            let number = document.createElement("p");
            number.textContent = company.phone;

            let website = document.createElement("a");
            website.textContent = company.website;
            website.href= company.website;

            card.appendChild(img);
            card.appendChild(address);
            card.appendChild(number);
            card.appendChild(website);

            cardView.appendChild(card);
          };

        function createRows(company) {
            let smallView = document.createElement("div");
            smallView.className = "smallView";

            let section = document.createElement("section")

            let companyName = document.createElement("h1");
            companyName.textContent = company.name;

            let companyAddress = document.createElement("p");
            companyAddress.textContent = company.address;

            let companyNumber = document.createElement("p");
            companyNumber.textContent = company.phone;

            let companyWebsite = document.createElement("p");
            companyWebsite.textContent= company.website;

            section.appendChild(companyName);
            section.appendChild(companyAddress);
            section.appendChild(companyNumber);
            section.appendChild(companyWebsite);

            smallView.appendChild(section);
            listView.appendChild(smallView);



        };
        

        function createTable(company) {
            let largeView = document.createElement("div");
            largeView.className = "largeView"
            let row = document.createElement("tr");

            let compName = document.createElement("td");
            compName.appendChild(document.createTextNode(company.name));

            let address = document.createElement("td");
            address.appendChild(document.createTextNode(company.address));

            let number = document.createElement("td");
            number.appendChild(document.createTextNode(company.phone));

            row.appendChild(compName);
            row.appendChild(address);
            row.appendChild(number);
            
            table.appendChild(row);

            largeView.appendChild(table)
            listView.appendChild(largeView)


            


        };
          
        
    })