import { isEscEvent } from './util.js';

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorNotice = errorTemplate.cloneNode(true);

const showSendErrorNotice = () => {
  errorNotice.style.zIndex = 1000;
  document.body.appendChild(errorNotice);

  const onEscNoticeClose = (evt) => {
    evt.preventDefault();
    if (isEscEvent(evt)) {
      errorNotice.remove();
      document.removeEventListener('keydown', onEscNoticeClose);
    }
  }

  errorNotice.addEventListener('click', () => {
    errorNotice.remove();
    document.removeEventListener('keydown', onEscNoticeClose);
  })

  document.addEventListener('keydown', onEscNoticeClose)
}

const alertBox = document.createElement('div');

const showGetErrorNotice = () => {
  alertBox.style.zIndex = 100;
  alertBox.style.position = 'absolute';
  alertBox.style.left = 0;
  alertBox.style.top = 0;
  alertBox.style.right = 0;
  alertBox.style.padding = '15px 5px';
  alertBox.style.fontSize = '30px';
  alertBox.style.textAlign = 'center';
  alertBox.style.backgroundColor = 'red';
  alertBox.textContent = 'Ошибка получения данных';

  document.body.append(alertBox);
}

export { showSendErrorNotice, showGetErrorNotice, alertBox };
