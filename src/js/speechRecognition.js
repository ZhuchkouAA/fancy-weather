import tellWeather from './voice';
import search from './search';
import changeBackgroundImage from './changeBackground';

const recognizer = new webkitSpeechRecognition();
recognizer.interimResults = true;

function voiceUpVision() {
  document.querySelector('.voice').classList.add('volume-up');
  setTimeout(() => {
    document.querySelector('.voice').classList.remove('volume-up');
  }, 1000);
}

function voiceDownVision() {
  document.querySelector('.voice').classList.add('volume-down');
  setTimeout(() => {
    document.querySelector('.voice').classList.remove('volume-down');
  }, 1000);
}

function voiceListenerResult(event) {
  const result = event.results[event.resultIndex];
  if (result.isFinal) {
    switch (result[0].transcript) {
      case 'weather':
        tellWeather();
        break;
      case 'погода':
        tellWeather();
        break;
      case 'louder':
        if (window.myObj.volume < 1) {
          window.myObj.volume += 0.1;
        }
        voiceUpVision();
        break;
      case 'громче':
        if (window.myObj.volume < 1) {
          window.myObj.volume += 0.1;
        }
        voiceUpVision();
        break;
      case 'quieter':
        if (window.myObj.volume > 0) {
          window.myObj.volume -= 0.1;
        }
        voiceDownVision();
        break;
      case 'тише':
        if (window.myObj.volume > 0) {
          window.myObj.volume -= 0.1;
        }
        voiceDownVision();
        break;
      case 'background':
        changeBackgroundImage();
        break;
      case 'фон':
        changeBackgroundImage();
        break;
      default:
        document.querySelector('.input-search').value = result[0].transcript;
        search();
    }
    document.querySelector('.btn-microphone').classList.remove('btn-active');
    document.querySelector('.input-search').value = '';
  } else {
    document.querySelector('.input-search').value = result[0].transcript;
  }
}

function voiceListener(e) {
  e.preventDefault();
  const button = document.querySelector('.btn-microphone');
  if (button.classList.contains('btn-active')) {
    recognizer.stop();
    button.classList.remove('btn-active');
    document.querySelector('.input-search').value = '';
  } else {
    button.classList.add('btn-active');
    const myObj = JSON.parse(localStorage.getItem('myObj'));
    if (myObj.lang === 0) recognizer.lang = 'en-US';
    if (myObj.lang > 0) recognizer.lang = 'ru';
    recognizer.onresult = voiceListenerResult;
    recognizer.start();
  }
}

document.querySelector('.btn-microphone').addEventListener('click', voiceListener);
