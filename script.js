const apiKey = "64a542e6074741738b9212243261902";

async function getWeather() {
    const location = document.getElementById("locationInput").value;

    if (!location) {
        alert("Please enter a city name");
        return;
    }

    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Weather info
        document.getElementById("city").innerText =
            data.location.name + ", " + data.location.country;

        document.getElementById("temp").innerText =
            "🌡 Temperature: " + data.current.temp_c + "°C";

        document.getElementById("condition").innerText =
            "☁ Condition: " + data.current.condition.text;

        document.getElementById("humidity").innerText =
            "💧 Humidity: " + data.current.humidity + "%";

        document.getElementById("wind").innerText =
            "🌬 Wind: " + data.current.wind_kph + " kph";

        document.getElementById("icon").src =
            "https:" + data.current.condition.icon;

        // Map embed
        document.getElementById("mapFrame").src =
            `https://maps.google.com/maps?q=${location}&output=embed`;

    } catch (error) {
        alert("City not found!");
    }
}