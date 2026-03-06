document.getElementById("searchBtn").addEventListener("click", getWeather);

async function getWeather() {
  const location = document.getElementById("locationInput").value;
  if (!location) {
    alert("Please enter a city!");
    return;
  }

  const apiKey = "a2922e53f9c34d9ebd830519260603"; 
  const url = `http://api.weatherapi.com/v1/current.json?key=a2922e53f9c34d9ebd830519260603&q=London&aqi=yes`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("cityName").textContent = data.location.name + ", " + data.location.country;
    document.getElementById("temperature").textContent = `🌡️ ${data.current.temp_c}°C`;
    document.getElementById("condition").textContent = `🌤️ ${data.current.condition.text}`;
  } catch (error) {
    alert("City not found or API error!");
    console.error(error);
  }
}


