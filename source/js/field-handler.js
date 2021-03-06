import { sendServerData } from './get-server-data.js';
import { showSendErrorNotice } from './error.js';
import { showSendSuccessNotice } from './success.js';
import { resetMap } from './create-map.js';
import { resetPreview } from './upload-pic.js';
import { filtersForm } from './set-filters.js';

const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;
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

const onPriceChange = () => {
  priceInputForNight.max = '1000000';
  priceInputForNight.min = priceMap[typeOfHousing.value];
  priceInputForNight.placeholder = priceMap[typeOfHousing.value];
};

const onCheckinChange = () => {
  timeOut.value = timeIn.value;
};

const onCheckoutChange = () => {
  timeIn.value = timeOut.value;
};

const onRoomChange  = () => {
  const currentGuest = Number(guestList.value);
  const currentRoom = Number(roomList.value);

  if (capacityOfRooms[currentRoom].values.includes(currentGuest)) {
    guestList.setCustomValidity('');
  } else {
    guestList.setCustomValidity(capacityOfRooms[currentRoom].error);
  }

  guestList.reportValidity();
}

onRoomChange ();

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
  filtersForm.reset();
  filtersForm.dispatchEvent(new Event('change'));
  onPriceChange();
  resetPreview();
}

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm();
  resetMap();
})

const onSuccessChange = () => {
  showSendSuccessNotice();
  resetForm();
  resetMap();
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);
  sendServerData(onSuccessChange, showSendErrorNotice, formData)
});

const fieldsValidate = () => {
  onPriceChange();
  onCheckinChange();
  onCheckoutChange();
  changeOption();
  guestList.addEventListener('change', onRoomChange );
  roomList.addEventListener('change', onRoomChange );
  typeOfHousing.addEventListener('change', onPriceChange);
  timeIn.addEventListener('change', onCheckinChange);
  timeOut.addEventListener('change', onCheckoutChange);
}

export { fieldsValidate };
