import renderAll from './renderInfo';

function search(event) {
  if (event !== undefined) event.preventDefault();
  const errorDiv = document.querySelector('.errors');
  errorDiv.innerHTML = '';
  let geoData;
  let city = document.querySelector('.input-search').value;
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${
    city}&key=b902241786f449fbbda1493523d5e428&pretty=1&no_annotations=1`;
  const urlTranslate = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${
    window.myObj.apiKey}&text=${city}&lang=en`;
  Promise.all([
    fetch(url),
    fetch(urlTranslate),
  ]).then(([geo, translation]) => {
    geoData = geo.json();
    return translation.json();
  })
    .then((res) => {
      // eslint-disable-next-line prefer-destructuring
      city = res.text[0];
      return geoData;
    })
    .then((geodata) => {
      const latitude = geodata.results[0].geometry.lat;
      const longitude = geodata.results[0].geometry.lng;
      const coordinates = [longitude.toString(), latitude.toString()];
      renderAll(coordinates, city);
      document.querySelector('.input-search').value = '';
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.dir(err);
      const myObj = JSON.parse(localStorage.getItem('myObj'));
      if (myObj.lang === 0) errorDiv.innerHTML = 'request error';
      if (myObj.lang === 1) errorDiv.innerHTML = 'ошибка запроса';
      if (myObj.lang === 2) errorDiv.innerHTML = 'памылка запыту';
    });
}
document.querySelector('.form').addEventListener('submit', search);

export default search;
