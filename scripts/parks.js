
function getPark(park) {
    const element = document.createElement("div");
    element.classList.add("park");

    element.innerHTML = `
        <hr>
        <h3>${park.LocationName}</h3>
        <h4>${park.LocationID}</h4>
        <div>${park.State}</div>
    `;
    if(park.hasOwnProperty("Visit")){
        const link = park.Visit;
        const text = park.LocationName;
        element.innerHTML += `
        <div><a href="${link}" class="visit-site"> ${text} </a></div>
        `;
    };
    return element;
}
document.addEventListener("DOMContentLoaded", () => {

    function showResults() {
        let filtered = [];
        results.innerHTML = "Loading...";
        if (locationRadio.checked) {
            filtered = nationalParksArray.filter(
                o => o.State.toUpperCase() === locations.value.toUpperCase()
            )
        } else {
            filtered = nationalParksArray.filter(
                o => o.LocationName.toUpperCase().includes(
                    parkTypes.value.toUpperCase()
                )
            )
        }
        results.innerHTML = "";
        filtered.forEach(p => results.appendChild(getPark(p)));
        if(!filtered.length){
            results.innerHTML = "No Adventures Loading..."; //if no info is found
        }
    }
    locations.addEventListener("change", showResults);
    parkTypes.addEventListener("change", showResults);

    function handleSearchBy(e) {
        if (locationRadio.checked) {
            locationLabel.style.display = "block";
            parkTypeLabel.style.display = "none"; //display location option
        } else {
            locationLabel.style.display = "none";
            parkTypeLabel.style.display = "block"; //display park type option
        }
        showResults();
    }
    locationRadio.addEventListener("click", handleSearchBy)
    parkTypeRadio.addEventListener("click", handleSearchBy)

    locationsArray
        .map(option)
        .forEach(oe => locations.appendChild(oe));

    parkTypesArray
        .map(option)
        .forEach(pto => parkTypes.appendChild(pto));


}); 