const form = document.querySelector('.ad-form');
const typeOfHousing = form.querySelector('#type');
const priceInputForNight = form.querySelector('#price');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');
const ROOM_HUNDRED = '100';
const ROOM_ZERO = '0';

const priceMap = {
  flat: 1000,
  house: 5000,
  bungalow: 0,
  palace: 10000,
};

const capacityofRooms = {
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
  const guestList = form.querySelector('#capacity');
  const roomList = form.querySelector('#room_number');
  const currentGuest = guestList.value;
  const currentRoom = roomList.value;

  if (!capacityofRooms[currentRoom].values.includes(currentGuest)) {
    guestList.setCustomValidity(capacityofRooms[currentRoom].error);
  } else {
    guestList.setCustomValidity('');
  }

  if (roomList.value === ROOM_HUNDRED && guestList.value > ROOM_ZERO) {
    guestList.setCustomValidity(capacityofRooms[currentRoom].error);
  } else {
    guestList.setCustomValidity('');
  }
}
roomChangeHandler();

const guestOptions = guestList.querySelectorAll('option');

const changeOption = () => {
  guestOptions.forEach((option) => {
    if (option.value === '1') {
      option.selected = true;
    }
  })
}
changeOption();

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

fieldsValidate();

export { fieldsValidate };
