document.addEventListener("DOMContentLoaded", () => {
    mountainsArray.forEach(m => mountainList.appendChild(option(m.name)));
    mountainList.addEventListener("change", async e => {
        const mountain = mountainsArray[mountainList.selectedIndex - 1];
        mountainResults.innerHTML = `
            <br>
            <img src="./images/${mountain.img}">
            <h3>${mountain.name}</h3>
            <p><b>Elevation:</b> ${mountain.elevation} feet<p>
            <p><b>Effort:</b> ${mountain.effort}</p>
            <p><b>Lattitude:</b> ${mountain.coords.lat}</p>
            <p><b>Longitude:</b> ${mountain.coords.lng}</p>
            <p> ${mountain.desc} </p>
        `;
        // function that can "fetch" the sunrise/sunset times
        async function getSunsetForMountain(lat, lng) {
            let response = await fetch(
                `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`
            );
            let data = await response.json();
            return data;
        }
        const sunData = await getSunsetForMountain(mountain.coords.lat, mountain.coords.lng);
        mountainResults.innerHTML += `
            <div> Sunrise: ${sunData.results.sunrise} </div>
            <div> Sunset: ${sunData.results.sunset} </div>
        `;
    });
});