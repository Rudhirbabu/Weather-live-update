const searchAndUpdateData = () => {
    const searchInput = document.getElementById("location-search");

    fetch(`https://api.weatherapi.com/v1/current.json?q=${searchInput.value}&key=3a1d7ca878164d9384565245230108`)
    .then((response) => response.json())
    .then((data) => {
        if (data.error) {
            searchInput.value = ""; 
            alert(data.error.message);
            return;
        }
        const temperatureSpan = document.getElementById("temperature");
        temperatureSpan.innerHTML = data.current.temp_c;
        searchInput.value = "";
    });
}