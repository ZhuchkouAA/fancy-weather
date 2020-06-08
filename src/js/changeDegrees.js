function renderDegreesElements(myObj, isClickedChange) {
  const degreesElems = [...document.querySelectorAll('.degree-future'),
    document.querySelector('.degree'), document.querySelector('.apparent-temperature')];
  const degreesSigns = document.querySelectorAll('.sign');
  if (myObj.degree === 'celsium') {
    if (isClickedChange) {
      degreesElems.forEach((degreeElem) => {
        const elem = degreeElem;
        // recount fahrenheit to celsium
        elem.innerHTML = Math.round(((elem.innerHTML - 32) * 5) / 9);
      });
    }
    degreesSigns.forEach((degreeSign) => {
      const sign = degreeSign;
      sign.innerHTML = '°C';
    });
    document.querySelector('.celsium').classList.add('btn-active');
    document.querySelector('.fahrenheit').classList.remove('btn-active');
  } else if (myObj.degree === 'fahrenheit') {
    if (isClickedChange) {
      degreesElems.forEach((degreeElem) => {
        const elem = degreeElem;
        // recount celsium to fahrenheit
        elem.innerHTML = Math.round(((elem.innerHTML * 9) / 5) + 32);
      });
    }
    degreesSigns.forEach((degreeSign) => {
      const sign = degreeSign;
      sign.innerHTML = '°F';
    });
    document.querySelector('.celsium').classList.remove('btn-active');
    document.querySelector('.fahrenheit').classList.add('btn-active');
  }
}
export default renderDegreesElements;

function changeDegreesElements(e) {
  const myObj = JSON.parse(localStorage.getItem('myObj'));
  if (e.target.classList.contains('celsium') && myObj.degree !== 'celsium') {
    myObj.degree = 'celsium';
    localStorage.setItem('myObj', JSON.stringify(myObj));
    renderDegreesElements(myObj, true);
    document.querySelector('.celsium').classList.add('btn-active');
    document.querySelector('.fahrenheit').classList.remove('btn-active');
  } else if (e.target.classList.contains('fahrenheit') && myObj.degree !== 'fahrenheit') {
    myObj.degree = 'fahrenheit';
    localStorage.setItem('myObj', JSON.stringify(myObj));
    renderDegreesElements(myObj, true);
    document.querySelector('.celsium').classList.remove('btn-active');
    document.querySelector('.fahrenheit').classList.add('btn-active');
  }
}

document.querySelector('.celsium').addEventListener('click', changeDegreesElements);
document.querySelector('.fahrenheit').addEventListener('click', changeDegreesElements);
