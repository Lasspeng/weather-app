import { getWeather } from './api-calls.js'


const form = document.querySelector('#form');
form.onsubmit = (event) => {
  event.preventDefault();
  const cityName = document.querySelector('#city').value;
  console.log(cityName);
  getWeather(cityName);
  form.reset();
}