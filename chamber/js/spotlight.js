const url = "directory/js/data.json";

fetch(url)
    .then(response => response.json())
    .then(data => {
        let premium = [];
        
        
        
        // Grab all the companies with a gold or platinum membership
        for (company of data.companies) {
            getPremium(company)
        };
      
    
        // Get random companies to show in spotlight
        let sl1 = getInt(premium.length -1);
        let sl2 = 0;
        let sl3 = 0;

        // These if statements make sure that the indexes of 
        // premium list dont surpass or go below the length
        if(sl1 == 5) {
            sl2 = sl1 -1;
            sl3 = sl2 - 1;
        }
        else if(sl1 == 0) {
            sl2 = sl1 + 1;
            sl3 = sl2 + 1
        }
        else {
            sl2 = sl1 - 1;
            sl3 = sl1 + 1;
        }
        // Get spotlight information and put it on page
       
       
        // ---------- Spotlight 1 ----------
        console.log(sl1);
        console.log(premium[sl1])
        section1 = document.querySelector("section.sl1");

        let img1 = document.createElement("img");
        img1.src = `directory/${premium[sl1].pic_url}`;
        img1.alt = `${premium[sl1].name} image`;

        let title1 = document.createElement("h2");
        title1.textContent = premium[sl1].name;

        let a1 = document.createElement("a");
        a1.textContent = premium[sl1].website;
        a1.href = premium[sl1].website;

        section1.appendChild(img1);
        section1.appendChild(title1);
        section1.appendChild(a1);




        // ---------- Spotlight 2 ----------
       
        section2 = document.querySelector("section.sl2");

        let img2 = document.createElement("img");
        img2.src = `directory/${premium[sl2].pic_url}`;
        img2.alt = `${premium[sl2].name} image`;

        let title2 = document.createElement("h2");
        title2.textContent = premium[sl2].name;

        let a2 = document.createElement("a");
        a2.textContent = premium[sl2].website;
        a2.href = premium[sl2].website;

        section2.appendChild(img2);
        section2.appendChild(title2);
        section2.appendChild(a2);



        // ---------- Spotlight 3 ----------
    
        section3 = document.querySelector("section.sl3");

        let img3 = document.createElement("img");
        img3.src = `directory/${premium[sl3].pic_url}`;
        img3.alt = `${premium[sl3].name} image`;

        let title3 = document.createElement("h2");
        title3.textContent = premium[sl3].name;

        let a3 = document.createElement("a");
        a3.textContent = premium[sl3].website;
        a3.href = premium[sl3].website;

        section3.appendChild(img3);
        section3.appendChild(title3);
        section3.appendChild(a3);



       
        
        


        // function put gold or platinum members into premium list
    function getPremium(company) {
        if (company.membership == "gold" | company.membership == "platinum") {
            premium.push(company)
        }; 
    };
    

    // returns random number
    function getInt(max) {
        return(Math.floor(Math.random() * (max +1)))
    }

    })