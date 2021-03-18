const form = document.querySelector('.ad-form');
const typeOfHousing = form.querySelector('#type');
const priceInputForNight = form.querySelector('#price');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');
const guestList = form.querySelector('#capacity');
const guestOptions = guestList.querySelectorAll('option');
const roomList = form.querySelector('#room_number');
const ROOM_HUNDRED = '100';
const ROOM_ZERO = '0';

const priceMap = {
  flat: 1000,
  house: 5000,
  bungalow: 0,
  palace: 10000,
};

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

const roomChangeHandler = () => {
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

// const roomList = form.querySelector('#room_number');
// const rooms = Array.from(roomList.children);
// const guestList = form.querySelector('#capacity');
// const guests = Array.from(guestList.children);


// const roomChangeHandler = () => {
//   guestList.value = roomMap[roomList.value];
//   guestList.placeholder = roomMap[roomList.value];
//}


// const guestChangeHandler = () => {
//   roomList.value = guestList.value;
//   roomList.placeholder = guestList.value;
// };
// guestChangeHandler();

// const guestMap = {
//   1: 1,
//   2: 2,
//   3: 3,
//   0: 100,
// };

// const guestChangeHandler = () => {
//   roomList.value = guestMap[guestList.value];
//   roomList.placeholder = guestMap[guestList.value];
// };

// guestChangeHandler();
//guestList.addEventListener('change', guestChangeHandler);


export { fieldsValidate };



