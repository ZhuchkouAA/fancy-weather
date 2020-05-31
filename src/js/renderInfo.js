import renderMap from './map';
import { renderI18nElements, renderWeatherElements, changeLocationLangName } from './langChanges';
import renderDegreesElements from './changeDegrees';
import { countries } from './constants';

function renderTownInfo(city, country) {
  const country2 = countries[country];
  document.querySelector('.town').innerHTML = city;
  document.querySelector('.country').innerHTML = country2;
}

function renderCurrentWeather(coordinates) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${
    coordinates[1]}&lon=${coordinates[0]}&appid=ebe0e24655e30a0e9f2df9f1b0888fa6`;
  fetch(url).then((response) => response.json())
    .then((data) => {
      const weatherText = document.querySelector('.discription-text');
      weatherText.innerHTML = data.weather[0].description;
      weatherText.setAttribute('data-id', data.weather[0].id);
      document.querySelector('.discription-icon').src = `./assets/animated/${data.weather[0].icon}.svg`;
      document.querySelector('.degree').innerHTML = Math.round(data.main.temp - 273.15);
      document.querySelector('.apparent-temperature').innerHTML = Math.round(data.main.feels_like - 273.15);
      document.querySelector('.wind').innerHTML = data.wind.speed;
      document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
    });
}

function renderFutureWeather(coordinates) {
  const futureContainers = document.querySelectorAll('.future');
  const date = new Date();
  date.setHours(12);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  const oneDay = 24 * 60 * 60 * 1000;
  const currentDay = date.getTime();
  const futureDates = [];
  for (let i = 1; i <= futureContainers.length; i += 1) {
    futureDates.push(currentDay + oneDay * i);
  }
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${
    coordinates[1]}&lon=${coordinates[0]}&appid=ebe0e24655e30a0e9f2df9f1b0888fa6`;
  fetch(url).then((response) => response.json())
    .then((data) => {
      const futureInfo = [];
      data.list.forEach((futureDate) => {
        if (futureDates.indexOf(futureDate.dt * 1000) !== -1) {
          futureInfo[futureDates.indexOf(futureDate.dt * 1000)] = {
            id: futureDate.weather[0].id,
            description: futureDate.weather[0].description,
            icon: futureDate.weather[0].icon,
            temp: futureDate.main.temp,
          };
        }
      });
      futureContainers.forEach((futureContainer, index) => {
        const container = futureContainer;
        const weatherFutureText = container.querySelector('.weather-text-future');
        weatherFutureText.innerHTML = futureInfo[index].description;
        weatherFutureText.setAttribute('data-id', futureInfo[index].id);
        container.querySelector('.degree-future').innerHTML = Math.round(futureInfo[index].temp - 273.15);
        container.querySelector('.icon-future').src = `./assets/animated/${futureInfo[index].icon}.svg`;
      });

      const myObj = JSON.parse(localStorage.getItem('myObj'));
      if (myObj.degree === 'fahrenheit') {
        renderDegreesElements(myObj);
      }
      if (myObj.lang !== 0) {
        renderWeatherElements();
        changeLocationLangName();
      }
    });
}

function getUserCoordinates() {
  return fetch('https://ipinfo.io/json?token=2efb72975069a4')
    .then((response) => response.json());
}

function renderAll(coordinates, city, country) {
  renderI18nElements();
  renderMap(coordinates);
  renderTownInfo(city, country);
  renderCurrentWeather(coordinates);
  renderFutureWeather(coordinates);
  document.querySelector('.latitude').innerHTML = Math.round(coordinates[1] * 10000) / 10000;
  document.querySelector('.longitude').innerHTML = Math.round(coordinates[0] * 10000) / 10000;
}

export default renderAll;

function firstRenderAll() {
  getUserCoordinates()
    .then((data) => {
      const longitude = data.loc.split(',')[1];
      const latitude = data.loc.split(',')[0];
      const coordinates = [longitude, latitude];
      renderAll(coordinates, data.city, data.country);
    })
    .catch((res) => {
      // eslint-disable-next-line no-console
      console.dir(res);
    });
}
firstRenderAll();
