const requestURL = "https://hcfairhurst.github.io/lesson13/data/rentalinfo.json";
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
            const rentals = jsonObject['rentals'];
            /*const scooter = rentals.filter(x => x.name.includes("Honda Metro Scooter"));*/
           

            for (let i = 0 ; i < rentals.length; i++){
            
            let row = document.createElement('tr');
              let name = document.createElement('td');
             
              let maxpep = document.createElement('td');
              let reserveHalf = document.createElement('td');
              let reserveFull = document.createElement('td');
              let walkHalf = document.createElement('td');
              let walkFull = document.createElement('td');

              name.textContent = rentals[i].name;
              maxpep.textContent = rentals[i].maxpersons;
              reserveHalf.textContent = rentals[i].reservationhalfday;
              reserveFull.textContent = rentals[i].reservationfullday;
              walkHalf.textContent = rentals[i].walkinhalfday;
              walkFull.textContent = rentals[i].walkinfullday;

                row.appendChild(name);
                row.appendChild(maxpep);
                row.appendChild(reserveHalf);
                row.appendChild(reserveFull);
                row.appendChild(walkHalf);
                row.appendChild(walkFull);
                
              document.getElementById('flat-table').appendChild(row);
              
              
            }
           
        })