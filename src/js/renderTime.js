import { dateConstants } from './constants';

function renderDate() {
  const { lang } = JSON.parse(localStorage.getItem('myObj'));
  // 0-en 1-ru 2-be
  const userDate = new Date();
  const timeZoneOffset = userDate.getTimezoneOffset() * 60 * 1000;
  const date = new Date(userDate.getTime() + timeZoneOffset + (window.myObj.timezone * 1000));
  const day = date.getDay();
  const month = date.getMonth();
  document.querySelector('.date').innerHTML = `${dateConstants.days[day][lang]} ${
    date.getDate()} ${dateConstants.months[month][lang]}`;
  const futureDates = document.querySelectorAll('.date-future');
  for (let i = 1; i <= futureDates.length; i += 1) {
    let futureDateMilliseconds = date.getTime();
    futureDateMilliseconds += 24 * 60 * 60 * 1000 * i;
    const futureDate = new Date(futureDateMilliseconds);
    const numOfMonth = (futureDate.getDate() > 9) ? futureDate.getDate() : `0${futureDate.getDate()}`;
    futureDates[i - 1].innerHTML = `${dateConstants.days[futureDate.getDay()][lang]}, ${
      numOfMonth}/${futureDate.getMonth()}`;
  }
  const hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (seconds < 10) seconds = `0${seconds}`;
  if (minutes < 10) minutes = `0${minutes}`;
  document.querySelector('.time').innerHTML = `${hours}:${minutes}:${seconds}`;
}

function readyCheckTimeZone() {
  if (window.myObj.timezone !== undefined) {
    setInterval(renderDate, 1000);
  } else {
    setTimeout(readyCheckTimeZone, 500);
  }
}
readyCheckTimeZone();

export default renderDate;
