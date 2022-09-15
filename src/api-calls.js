import { weatherDisplayer } from './dom-manip'

async function getCoordinates(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe0d6601550dc3ccb9230eeb1ec7582c`, {mode: 'cors'});
    const cityData = await response.json();
    console.log(cityData.coord);
    return cityData.coord
  } catch (error) {
    console.log(error);
  }
}

export async function getWeather(city) {
  try {
    const cityCoordinates =  await getCoordinates(city);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityCoordinates.lat}&lon=${cityCoordinates.lon}&appid=fe0d6601550dc3ccb9230eeb1ec7582c&units=imperial`, {mode: 'cors'});
    const cityData = await response.json();
    const weather = {
      city: cityData.name,
      weatherType: cityData.weather[0].main,
      temperature: cityData.main.temp,
      feelsLike: cityData.main.feels_like
    }
    console.log(weather);
    weatherDisplayer(weather.city, weather.weatherType, weather.temperature);
  } catch (error) {
    console.log(error);
  }
}