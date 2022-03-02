const url = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
const resultElement = document.querySelector('div.cards');

fetch(url)
    .then(response => response.json())
    .then(data => {
        for (let prophet of data.prophets) {
            makeCard(prophet);
        }

        function makeCard(prophet) {
            let card = document.createElement('section');

            let prophetName = document.createElement('h2');
            prophetName.textContent = prophet.name + ' ' + prophet.lastname;

            let dob = document.createElement('p');
            dob.textContent = `Date of Birth: ${prophet.birthdate}`

            let birthPlace = document.createElement('p');
            birthPlace.textContent = `Place of Birth: ${prophet.birthdate}`

            let picture = document.createElement('img');
            picture.src = prophet.imageurl;
            picture.alt = 'picture of prophet';

            card.appendChild(prophetName);
            card.appendChild(dob);
            card.appendChild(birthPlace);
            card.appendChild(picture);

            resultElement.appendChild(card);
            
        }
       
    })