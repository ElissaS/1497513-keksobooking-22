import {isEscEvent} from './util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');

const successNotice = successTemplate.cloneNode(true);

const showSendSuccessNotice = () => {
  successNotice.style.zIndex = 1000;
  document.body.appendChild(successNotice);

  const closeNoticeonEsc = (evt) => {
    evt.preventDefault()
    if (isEscEvent(evt)) {
      successNotice.remove()
      document.removeEventListener('keydown', closeNoticeonEsc);
    }
  }
  successNotice.addEventListener('click', () => {
    successNotice.remove();
    document.removeEventListener('keydown', closeNoticeonEsc);
  })

  document.addEventListener('keydown', closeNoticeonEsc);
}

export { showSendSuccessNotice };
