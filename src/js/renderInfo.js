import renderMap from './map';
import { renderI18nElements, renderWeatherElements, changeLocationLangName } from './langChanges';
import renderDegreesElements from './changeDegrees';
import { countries } from './constants';
import changeBackgroundImage from './changeBackground';

function renderTownInfo(city, country) {
  document.querySelector('.town').innerHTML = city;
  document.querySelector('.country').innerHTML = country;
}

function getCurrentWeather(coordinates) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${
    coordinates[1]}&lon=${coordinates[0]}&appid=ebe0e24655e30a0e9f2df9f1b0888fa6`;
  fetch(url).then((response) => response.json())
    .then((data) => {
      window.myObj.newWeather.timezone = data.timezone;
      const { icon } = data.weather[0];
      let temperature = data.main.temp - 273.15;
      let feelsLikeTemperature = data.main.feels_like - 273.15;
      const myObj = JSON.parse(localStorage.getItem('myObj'));
      if (myObj.degree === 'fahrenheit') {
        temperature = Math.round(((temperature * 9) / 5) + 32);
        feelsLikeTemperature = Math.round(((feelsLikeTemperature * 9) / 5) + 32);
      }
      window.myObj.newWeather.icon = icon;
      window.myObj.newWeather.discriptionText = data.weather[0].description;
      window.myObj.newWeather.discriptionTextDataId = data.weather[0].id;
      window.myObj.newWeather.discriptionIcon = `./assets/animated/${icon}.svg`;
      window.myObj.newWeather.degree = Math.round(temperature);
      window.myObj.newWeather.apparentTemperature = Math.round(feelsLikeTemperature);
      window.myObj.newWeather.wind = data.wind.speed;
      window.myObj.newWeather.humidity = `${data.main.humidity}%`;
    })
    .catch((error) => {
      console.dir(error);
    });
}

function getFutureWeather(coordinates, city) {
  let currentCity = city;
  const date = new Date();
  const timeZoneCorrection = date.getTimezoneOffset() * 60 * 1000;
  date.setHours(12);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  const greenwichTime = new Date(date.getTime() + timeZoneCorrection);
  let difference = greenwichTime.getHours();
  while (difference % 3) {
    difference += 1;
  }
  greenwichTime.setHours(difference);
  const oneDay = 24 * 60 * 60 * 1000;
  const currentDay = greenwichTime.getTime();
  const futureDates = [];
  const futureContainers = document.querySelectorAll('.future');
  for (let i = 1; i <= futureContainers.length; i += 1) {
    futureDates.push(currentDay + oneDay * i - timeZoneCorrection);
  }
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${
    coordinates[1]}&lon=${coordinates[0]}&appid=ebe0e24655e30a0e9f2df9f1b0888fa6`;
  fetch(url).then((response) => response.json())
    .then((data) => {
      const { country } = data.city;
      if (currentCity === undefined) currentCity = data.city.name;
      window.myObj.newWeather.country = (countries[country] !== undefined) ? countries[country] : 'Earth';
      window.myObj.newWeather.city = currentCity;
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
      window.myObj.newWeather.futureInfo = futureInfo;


      const myObj = JSON.parse(localStorage.getItem('myObj'));
      if (myObj.degree === 'fahrenheit') {
        renderDegreesElements(myObj);
      }
      if (myObj.lang !== 0) {
        changeLocationLangName()
          .then(() => {
            renderNewWeather(coordinates);
          });
      } else {
        renderNewWeather(coordinates);
      }
    })
    .catch((error) => {
      console.dir(error);
    });
}

function getUserCoordinates() {
  return fetch('https://ipinfo.io/json?token=2efb72975069a4')
    .then((response) => response.json());
}

function renderMainWeather() {
  const weatherText = document.querySelector('.discription-text');
  weatherText.innerHTML = window.myObj.newWeather.discriptionText;
  weatherText.setAttribute('data-id', window.myObj.newWeather.discriptionTextDataId);
  document.querySelector('.degree').innerHTML = window.myObj.newWeather.degree;
  document.querySelector('.apparent-temperature').innerHTML = window.myObj.newWeather.apparentTemperature;
  document.querySelector('.wind').innerHTML = window.myObj.newWeather.wind;
  document.querySelector('.humidity').innerHTML = window.myObj.newWeather.humidity;
}

function renderFutureWeather() {
  const { futureInfo } = window.myObj.newWeather;
  const futureContainers = document.querySelectorAll('.future');
  futureContainers.forEach((futureContainer, index) => {
    const container = futureContainer;
    const weatherFutureText = container.querySelector('.weather-text-future');
    weatherFutureText.innerHTML = futureInfo[index].description;
    weatherFutureText.setAttribute('data-id', futureInfo[index].id);
    let temp = futureInfo[index].temp - 273.15;
    const myObj = JSON.parse(localStorage.getItem('myObj'));
    if (myObj.degree === 'fahrenheit') {
      temp = Math.round(((temp * 9) / 5) + 32);
    }
    container.querySelector('.degree-future').innerHTML = Math.round(temp);
  });
}

function renderNewWeather(coordinates) {
  const futureImgs = document.querySelectorAll('.icon-future');
  const newFutureImgs = [];
  futureImgs.forEach(() => {
    const img = document.createElement('img');
    img.className = 'icon-future';
    newFutureImgs.push(img);
  });
  const mainImg = document.createElement('img');
  mainImg.className = 'discription-icon';
  const img = document.querySelector('.discription-icon');
  const p1 = new Promise((resolve, reject) => {
    mainImg.onload = () => {
      resolve();
    };
    mainImg.error = () => {
      reject();
    };
  });
  const iconPromises = [p1];
  newFutureImgs.forEach((elem) => {
    const newFutureImg = elem;
    iconPromises.push(
      new Promise((resolve, reject) => {
        newFutureImg.onload = () => {
          resolve();
        };
        newFutureImg.error = () => {
          reject();
        };
      }),
    );
  });

  Promise.all(iconPromises).then(() => {
    futureImgs.forEach((futureImg, index) => {
      futureImg.replaceWith(newFutureImgs[index]);
    });
    img.replaceWith(mainImg);
    renderMainWeather();
    renderFutureWeather();
    if (window.myObj.isFirstLoad) {
      const { icon } = window.myObj.newWeather;
      changeBackgroundImage(icon[icon.length - 1], window.myObj.newWeather.degree);
    }
    renderTownInfo(window.myObj.newWeather.city, window.myObj.newWeather.country);
    renderMap(coordinates);
    renderWeatherElements();
    renderI18nElements();
    window.myObj.timezone = window.myObj.newWeather.timezone;
  }, (reason) => {
    console.log(reason);
  });

  const { futureInfo } = window.myObj.newWeather;
  mainImg.src = window.myObj.newWeather.discriptionIcon;
  newFutureImgs.forEach((elem, index) => {
    const newFutureImg = elem;
    newFutureImg.src = `./assets/animated/${futureInfo[index].icon}.svg`;
  });
}

function renderAll(coordinates, city) {
  window.myObj.newWeather = {};
  getCurrentWeather(coordinates);
  getFutureWeather(coordinates, city);
  const latDegree = Math.floor(coordinates[1]);
  const latMinutes = Math.round((coordinates[1] - latDegree) * 10);
  const lonDegree = Math.floor(coordinates[0]);
  const lonMinutes = Math.round((coordinates[0] - lonDegree) * 10);
  document.querySelector('.latitude').innerHTML = `${latDegree}°${latMinutes}'`;
  document.querySelector('.longitude').innerHTML = `${lonDegree}°${lonMinutes}'`;
}

export default renderAll;

function firstRenderAll() {
  getUserCoordinates()
    .then((data) => {
      const longitude = data.loc.split(',')[1];
      const latitude = data.loc.split(',')[0];
      const coordinates = [longitude, latitude];
      renderAll(coordinates, data.city);
    })
    .catch((res) => {
      // eslint-disable-next-line no-console
      console.dir(res);
    });
}
firstRenderAll();
