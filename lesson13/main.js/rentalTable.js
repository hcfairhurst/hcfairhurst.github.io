const requestURL = "https://hcfairhurst.github.io/lesson13/data/rentalinfo.json";
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
            const rentals = jsonObject['rentals'];
            console.log(rentals)
            /*
            const townName = towns.filter(x => x.name.includes("Soda Springs"));
            console.log(townName)
            const events = townName[0].events;

            events.forEach(event => {
                let party = document.createElement('p');
                party.innerText = event
                let eventInfo = document.getElementById('event-info');
                eventInfo.appendChild(party)
            })*/
        })