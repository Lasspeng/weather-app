export function weatherDisplayer(city, weather, temperature) {
  const container = document.querySelector('.weather-display');

  const cityName = document.createElement('h2');
  cityName.innerHTML = city;
  container.appendChild(cityName);

  const typeOfWeather = document.createElement('h3');
  typeOfWeather.innerHTML = weather;
  container.appendChild(typeOfWeather);

  const temperatureDisplay = document.createElement('h3');
  temperatureDisplay.innerHTML = temperature;
  container.appendChild(temperatureDisplay);
}