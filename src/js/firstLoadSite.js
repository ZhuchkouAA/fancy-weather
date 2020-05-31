if (localStorage.getItem('myObj') === null) {
  localStorage.setItem('myObj', JSON.stringify({
    lang: 0,
    degree: 'celsium',
  }));
}
window.myObj = {
  apiKey: 'trnsl.1.1.20200508T115458Z.f858c926c4aeb756.c6744a1ebf669f59c14f93c53ae668fc4fa6b239',
};
