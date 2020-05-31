import renderAll from './renderInfo';

function search(event) {
  event.preventDefault();
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
      city = res.text[0];
      return geoData;
    })
    .then((geodata) => {
      const latitude = geodata.results[0].geometry.lat;
      const longitude = geodata.results[0].geometry.lng;
      const coordinates = [longitude.toString(), latitude.toString()];
      const country = geodata.results[0].components['ISO_3166-1_alpha-2'];
      console.log(coordinates, city, country);
      renderAll(coordinates, city, country);
      document.querySelector('.input-search').value = '';
    })
    .catch((err) => {
      console.dir(err);
    });
}
document.querySelector('.form').addEventListener('submit', search);
