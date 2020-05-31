function changeBackgroundImage() {
  const url = 'https://api.unsplash.com/photos/random?orientation=landscape&per_page'
  + '=1&query=nature&client_id=9GE8NqNemc4GOolDRCXao54HevWjR_CoaZ7vBPJMuMw';
  fetch(url).then((response) => response.json())
    .then((data) => {
      const newImgUrl = data.urls.regular;
      const body = document.querySelector('body');
      const { backgroundImage } = body.style;
      const endPoint = backgroundImage.indexOf('http');
      body.style.backgroundImage = backgroundImage.slice(0, endPoint) + newImgUrl;
    });
}
changeBackgroundImage();
document.querySelector('.background-switcher').addEventListener('click', changeBackgroundImage);
