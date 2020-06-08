import { weatherConstants, i18nConstants } from './constants';
import renderDate from './renderTime';

export function changeLocationLangName() {
  let { lang } = JSON.parse(localStorage.getItem('myObj'));
  if (lang === 0) lang = 'en';
  if (lang === 1) lang = 'ru';
  if (lang === 2) lang = 'be';
  const { city } = window.myObj.newWeather;
  const { country } = window.myObj.newWeather;
  const text = `${city}, ${country}`;
  return fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${window.myObj.apiKey}&text=${text}&lang=${lang}`)
    .then((response) => response.json())
    .then((data) => {
      const translation = data.text[0];
      const separator = translation.indexOf(',');
      const cityTranslation = translation.slice(0, separator);
      const countryTranslation = translation.slice(separator + 1);
      window.myObj.newWeather.city = cityTranslation;
      window.myObj.newWeather.country = countryTranslation;
      return [cityTranslation, countryTranslation];
    });
}


export function renderI18nElements() {
  const { lang } = JSON.parse(localStorage.getItem('myObj'));
  document.querySelectorAll('[data-i18n]').forEach((elemI18n) => {
    const elem = elemI18n;
    const i18bID = elem.getAttribute('data-i18n');
    elem.innerHTML = i18nConstants[i18bID][lang];
  });
}

export function renderWeatherElements() {
  const { lang } = JSON.parse(localStorage.getItem('myObj'));
  const weatherElements = [...document.querySelectorAll('.weather-text-future'),
    document.querySelector('.discription-text')];
  weatherElements.forEach((weatherElem) => {
    const elem = weatherElem;
    elem.innerHTML = weatherConstants[lang][+elem.getAttribute('data-id')];
  });
}

function changeLang(e) {
  const myObj = JSON.parse(localStorage.getItem('myObj'));
  if (e.target.classList.contains('ru-lang')) {
    myObj.lang = 1;
    localStorage.setItem('myObj', JSON.stringify(myObj));
  } else if (e.target.classList.contains('en-lang')) {
    myObj.lang = 0;
    localStorage.setItem('myObj', JSON.stringify(myObj));
  } else if (e.target.classList.contains('be-lang')) {
    myObj.lang = 2;
    localStorage.setItem('myObj', JSON.stringify(myObj));
  }
  // 0-en, 1-ru, 2-be //

  changeLocationLangName()
    .then((res) => {
      document.querySelector('.town').innerHTML = res[0];
      document.querySelector('.country').innerHTML = res[1];
      renderI18nElements();
      renderWeatherElements();
      renderDate();
    });
}

document.querySelector('.ru-lang').addEventListener('click', changeLang);
document.querySelector('.en-lang').addEventListener('click', changeLang);
document.querySelector('.be-lang').addEventListener('click', changeLang);
