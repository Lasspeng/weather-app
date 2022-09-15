import { getWeather } from './api-calls.js'

let measurementUnit = 'imperial';
let nameOfCity;
const form = document.querySelector('#form');
form.onsubmit = (event) => {
  event.preventDefault();
  const cityName = document.querySelector('#city').value;
  nameOfCity = cityName;
  console.log(cityName);
  getWeather(cityName, measurementUnit);
  form.reset();
}

const unitButton = document.querySelector('.change-units');
unitButton.onclick = () => {
  if (measurementUnit === 'imperial') {
    measurementUnit = 'metric'
    getWeather(nameOfCity, measurementUnit);
    unitButton.innerHTML = 'Fahrenheit';
  } else if (measurementUnit === 'metric') {
    measurementUnit = 'imperial';
    getWeather(nameOfCity, measurementUnit);
    unitButton.innerHTML = 'Celsius';
  }
}