const requestURL = "https://hcfairhurst.github.io/lesson13/data/rentalinfo.json";
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
            const rentals = jsonObject['rentals'];
            console.log(rentals)
            const atv = rentals[0].name;

            atv.forEach(vehicle => {
                let info = document.createElement('td');
                info.innerText = vehicle
                let vehicleInfo = document.getElementById('Metro');
                vehicleInfo.appendChild(info)
            })
        })