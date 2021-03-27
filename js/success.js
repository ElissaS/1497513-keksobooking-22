import {isEscEvent} from './util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');

const successNotice = successTemplate.cloneNode(true);

const showSendSuccessNotice = () => {
  successNotice.style.zIndex = 1000;
  document.body.appendChild(successNotice);

  const onEscNoticeClose = (evt) => {
    evt.preventDefault()
    if (isEscEvent(evt)) {
      successNotice.remove()
      document.removeEventListener('keydown', onEscNoticeClose);
    }
  }
  successNotice.addEventListener('click', () => {
    successNotice.remove();
    document.removeEventListener('keydown', onEscNoticeClose);
  })

  document.addEventListener('keydown', onEscNoticeClose);
}

export { showSendSuccessNotice };
