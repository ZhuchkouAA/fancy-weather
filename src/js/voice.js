const synth = window.speechSynthesis;

function tellWeather() {
  const button = document.querySelector('.voice');
  if (button.classList.contains('btn-active')) {
    button.classList.remove('btn-active');
    synth.cancel();
    return;
  }
  button.classList.add('btn-active');
  const city = document.querySelector('.town').innerText;
  const weather = document.querySelector('.discription-text').innerText;
  const degrees = document.querySelector('.degree').innerText;
  const wind = document.querySelector('.wind').innerText;
  const humidity = document.querySelector('.humidity').innerText;
  const myObj = JSON.parse(localStorage.getItem('myObj'));
  const { lang } = myObj;
  let degreeSign = myObj.degree;
  let speechLang;
  let utterThis;

  if (lang === 0) {
    speechLang = 'en-US';
    if (degreeSign === 'celsium') {
      degreeSign = '°C';
    } else {
      degreeSign = '°F';
    }
    utterThis = new SpeechSynthesisUtterance(`Hello. Now in ${
      city} ${weather}, temperature is ${degrees}${degreeSign}, wind speed ${
      wind} meters per second, humidity  ${humidity}`);
  } else if (lang === 1) {
    speechLang = 'ru-Ru';
    if (degreeSign === 'celsium') {
      degreeSign = '°С';
    } else {
      degreeSign = '°F';
    }
    utterThis = new SpeechSynthesisUtterance(`Здраствуйте. Сейчас в ${
      city} ${weather}, температура составляет ${degrees}${degreeSign}, скорость ветра ${
      wind} метров в секунду, влажность ${humidity}`);
  } else if (lang === 2) {
    speechLang = 'by-By';
    if (degreeSign === 'celsium') {
      degreeSign = '°С';
    } else {
      degreeSign = '°F';
    }
    utterThis = new SpeechSynthesisUtterance(`Прывитанне. Зараз у ${
      city} ${weather}, тэмпература складае ${degrees}${degreeSign}, хуткасть ветру ${
      wind} метраў у секунду, вільготнасть ${humidity}`);
  }

  utterThis.lang = speechLang;
  utterThis.volume = window.myObj.volume;
  synth.speak(utterThis);
}

document.querySelector('.voice').addEventListener('click', tellWeather);

export default tellWeather;
