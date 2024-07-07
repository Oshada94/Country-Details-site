let tblCountries = document.getElementById("tblCountries");

let tableBody = `<tr>
                    <th> Name </th>
                    
                    <th> Falg Image </th>
            
                </tr>` ;



fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then(data => {

        data.forEach(element => {

            tableBody += `<tr>
                        <td class="Primary"><h1>${element.name.common}</h1>
                        <br>
                        Official Name : ${element.name.official}
                        <br>
                        Capital : ${element.capital}
                        <br>
                        Region : ${element.region}
                        <br>
                        subregion : ${element.subregion}
                        <br>
                        Population : ${element.population}
                        <br>
                        Area : ${element.area}
                        <br>
                        Longitude and Latitude : ${element.latlng}
                        <br>
                        Time Zones : ${element.timezones}
                        <br>
                        Star to Week : ${element.startOfWeek}
                        <br>
                        <br>
                        <a href = "${element.maps.googleMaps}" class="btn btn-primary">Live Location</a>
                        </td>
                        <td><img src="${element.flags.png}" alt=""></td>
                    </tr>`
            console.log(element.name.common);
        });

        tblCountries.innerHTML = tableBody;

    })

    function searchCountry() {

        
        let userInput = document.getElementById("txtInput").value;

        let flagImg = document.getElementById("flagImg");
        let name = document.getElementById("name");
        let officialName = document.getElementById("officialName");
        let capital = document.getElementById("capital");
        let region = document.getElementById("region");
        let subregion = document.getElementById("subregion");
        let area = document.getElementById("area");
        let latlng = document.getElementById("latlng");
        let timezones = document.getElementById("timezones");
        let startOfWeek = document.getElementById("startOfWeek");
        let population = document.getElementById("population");


        fetch(`https://restcountries.com/v3.1/name/${userInput}`)
            .then(res => res.json())
            .then(data => {
                data.forEach(obj => {
                    console.log(obj);
                    flagImg.src = obj.flags.png
                    name.innerText = obj.name.common
                    officialName.innerText = obj.name.official
                    capital.innerText = obj.capital
                    region.innerText = obj.region;
                    subregion.innerText = obj.subregion
                    area.innerText = obj.area
                    latlng.innerText = obj.latlng
                    timezones.innerText = obj.timezones
                    startOfWeek.innerText = obj.startOfWeek
                    population.innerText = obj.population
                })
            })
        }
    