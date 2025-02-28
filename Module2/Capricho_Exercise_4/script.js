const fetchWeatherBtn = document.getElementById('fetchWeatherBtn');
const weatherData = document.getElementById('weatherData');

fetchWeatherBtn.addEventListener('click', () => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const city = 'London'; // Replace with your desired city
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            weatherData.innerHTML = `
                <h2>Weather in ${data.location.name}</h2>
                <p>Temperature: ${data.current.temp_c}°C</p>
                <p>Condition: ${data.current.condition.text}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherData.innerHTML = '<p>Failed to load weather data. Please try again.</p>';
        });
});