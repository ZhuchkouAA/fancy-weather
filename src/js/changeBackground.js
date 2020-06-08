function changeBackgroundImage(timeOfDay, temp) {
  if (window.myObj.isWallpaperLoad !== true) return;
  window.myObj.isWallpaperLoad = false;
  let season = (timeOfDay === 'd') ? 'daytime' : 'nigth';
  if (temp < -10) season = 'winter';
  const orientation = (document.body.scrollWidth > 700) ? 'landscape' : 'portrait';
  const url = `https://api.unsplash.com/photos/random?orientation=${
    orientation}&per_page=1&query=${season}&client_id=9GE8NqNemc4GOolDRCXao54HevWjR_CoaZ7vBPJMuMw`;
  fetch(url).then((response) => response.json())
    .then((data) => {
      const img = document.createElement('img');
      img.alt = 'wallpaper';
      img.className = 'background';
      img.style.opacity = 0;
      const container = document.querySelector('.background-container');
      const background = document.querySelector('.background');
      img.onload = () => {
        background.style.opacity = 0;
        container.append(img);
        setTimeout(() => {
          img.style.opacity = 1;
        }, 50);
        setTimeout(() => {
          container.removeChild(background);
          window.myObj.isWallpaperLoad = true;
        }, 500);
      };
      const newImgUrl = data.urls.regular;
      img.src = newImgUrl;
    })
    .catch((err) => {
      const myObj = JSON.parse(localStorage.getItem('myObj'));
      console.log(err);
      if (myObj.lang === 0) document.querySelector('.errors').innerHTML = 'request limit exceeded';
      if (myObj.lang === 1) document.querySelector('.errors').innerHTML = 'превышен лимит запросов';
      if (myObj.lang === 2) document.querySelector('.errors').innerHTML = 'перавышаны ліміт запытаў';
    });
}
document.querySelector('.background-switcher').addEventListener('click', () => {
  const temp = +document.querySelector('.degree').innerText;
  const timeOfDay = document.querySelector('.discription-icon').src;
  // -5 symbols for getting 'd' or 'n' (example url animated/01d.svg)
  changeBackgroundImage(timeOfDay[timeOfDay.length - 5], temp);
});

export default changeBackgroundImage;
