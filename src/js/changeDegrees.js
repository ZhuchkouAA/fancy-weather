function renderDegreesElements(myObj) {
  const degreesElems = [...document.querySelectorAll('.degree-future'),
    document.querySelector('.degree'), document.querySelector('.apparent-temperature')];
  const degreesSigns = document.querySelectorAll('.sign');
  if (myObj.degree === 'celsium') {
    degreesElems.forEach((degreeElem) => {
      const elem = degreeElem;
      // recount fahrenheit to celsium
      elem.innerHTML = Math.round(((elem.innerHTML - 32) * 5) / 9);
    });
    degreesSigns.forEach((degreeSign) => {
      const sign = degreeSign;
      sign.innerHTML = '°C';
    });
  } else if (myObj.degree === 'fahrenheit') {
    degreesElems.forEach((degreeElem) => {
      const elem = degreeElem;
      // recount celsium to fahrenheit
      elem.innerHTML = Math.round(((elem.innerHTML * 9) / 5) + 32);
    });
    degreesSigns.forEach((degreeSign) => {
      const sign = degreeSign;
      sign.innerHTML = '°F';
    });
  }
}
export default renderDegreesElements;

function changeDegreesElements(e) {
  const myObj = JSON.parse(localStorage.getItem('myObj'));
  if (e.target.classList.contains('celsium') && myObj.degree !== 'celsium') {
    myObj.degree = 'celsium';
    localStorage.setItem('myObj', JSON.stringify(myObj));
    renderDegreesElements(myObj);
  } else if (e.target.classList.contains('fahrenheit') && myObj.degree !== 'fahrenheit') {
    myObj.degree = 'fahrenheit';
    localStorage.setItem('myObj', JSON.stringify(myObj));
    renderDegreesElements(myObj);
  }
}

document.querySelector('.celsium').addEventListener('click', changeDegreesElements);
document.querySelector('.fahrenheit').addEventListener('click', changeDegreesElements);
