export function weatherDisplayer(city, weather, temperature) {
  const container = document.querySelector('.weather-display-container');
  const weatherDisplay = document.querySelector('.weather-display');
  weatherDisplay.innerHTML = '';
  container.style.display = 'block';

  const cityName = document.createElement('h2');
  cityName.innerHTML = city;
  weatherDisplay.appendChild(cityName);

  const typeOfWeather = document.createElement('h3');
  typeOfWeather.innerHTML = weather;
  weatherDisplay.appendChild(typeOfWeather);

  const temperatureDisplay = document.createElement('h3');
  temperatureDisplay.innerHTML = `${temperature}°`
  weatherDisplay.appendChild(temperatureDisplay);
}