import { sendServerData } from './get-server-data.js';
import { showSendErrorNotice } from './error.js';
import { showSendSuccessNotice } from './success.js';
import { resetMap, newCoordinates } from './create-map.js';
import { uploadPicture } from './upload-pic.js';
// import { uploadPicture, resetPreview } from './upload-pic.js';

const form = document.querySelector('.ad-form');
const titleInput = form.querySelector('#title');
const typeOfHousing = form.querySelector('#type');
const priceInputForNight = form.querySelector('#price');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');
const guestList = form.querySelector('#capacity');
const roomList = form.querySelector('#room_number');
const guestOptions = guestList.querySelectorAll('option');
const resetButton = form.querySelector('.ad-form__reset');
const avatarPic  = document.querySelector('#avatar');
const avatarPreview = document.querySelector('.ad-form-header__preview-img')
const images = document.querySelector('#images');
const imagesPreview = document.querySelector('.ad-form__photo-preview');
const DEFAULT_IMG_SRC = 'img/muffin-grey.svg';
const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;

const priceMap = {
  flat: 1000,
  house: 5000,
  bungalow: 0,
  palace: 10000,
};

const capacityOfRooms = {
  1: {
    values: [1],
    error: 'Максимум один гость',
  },
  2: {
    values: [1, 2],
    error: 'От одного до двух гостей',
  },
  3: {
    values: [1, 2, 3],
    error: 'От одного до трёх гостей',
  },
  100: {
    values: [0],
    error: 'Совсем не для гостей!',
  },
}

titleInput.addEventListener('input', () => {
  const valueLength = titleInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    titleInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    titleInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
  } else {
    titleInput.setCustomValidity('');
  }

  titleInput.reportValidity();
});


const priceChangeHandler = () => {
  priceInputForNight.max = '1000000';
  priceInputForNight.min = priceMap[typeOfHousing.value];
  priceInputForNight.placeholder = priceMap[typeOfHousing.value];
};

const checkinChangeHandler = () => {
  timeOut.value = timeIn.value;
};

const checkoutChangeHandler = () => {
  timeIn.value = timeOut.value;
};

const roomChangeHandler = () => {
  const guestList = document.querySelector('#capacity');
  const roomList = document.querySelector('#room_number');
  const currentGuest = Number(guestList.value);
  const currentRoom = Number(roomList.value);

  if (capacityOfRooms[currentRoom].values.includes(currentGuest)) {
    guestList.setCustomValidity('');
  } else {
    guestList.setCustomValidity(capacityOfRooms[currentRoom].error);
  }

  guestList.reportValidity();
}
roomChangeHandler();

const changeOption = () => {
  guestOptions.forEach((option) => {
    if (option.value === '1') {
      option.selected = true;
    }
  })
}
changeOption();

const resetForm = () => {
  form.reset();
  priceChangeHandler();
  newCoordinates();
  // resetPreview(avatarPreview, DEFAULT_IMG_SRC);
  // resetPreview(imagesPreview, DEFAULT_IMG_SRC);
}

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm();
  resetMap();
})


const successHandler = () => {
  showSendSuccessNotice();
  resetForm();
  resetMap();
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);
  sendServerData(successHandler, showSendErrorNotice, formData)
});


const fieldsValidate = () => {
  priceChangeHandler();
  checkinChangeHandler();
  checkoutChangeHandler();
  changeOption();
  guestList.addEventListener('change', roomChangeHandler);
  roomList.addEventListener('change', roomChangeHandler);
  typeOfHousing.addEventListener('change', priceChangeHandler);
  timeIn.addEventListener('change', checkinChangeHandler);
  timeOut.addEventListener('change', checkoutChangeHandler);
}

uploadPicture(avatarPic, avatarPreview);
uploadPicture(images, imagesPreview);

export { fieldsValidate };
