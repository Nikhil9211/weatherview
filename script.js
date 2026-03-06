document.getElementById("searchBtn").addEventListener("click", getWeather);

async function getWeather() {
  const location = document.getElementById("locationInput").value.trim();
  if (!location) {
    alert("Please enter a city!");
    return;
  }

  const apiKey = "a2922e53f9c34d9ebd830519260603"; 
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}&aqi=yes`;

  try {
    const response = await fetch(url, { mode: "cors" }); // ensure cross‑origin works
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    // Display weather info
    document.getElementById("cityName").textContent = `${data.location.name}, ${data.location.country}`;
    document.getElementById("temperature").textContent = `🌡️ ${data.current.temp_c}°C`;
    document.getElementById("condition").textContent = `🌤️ ${data.current.condition.text}`;
  } catch (error) {
    console.error("Weather API error:", error);
    alert("City not found or API error!");
  }
}
