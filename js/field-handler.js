const form = document.querySelector('.ad-form');
const typeOfHousing = form.querySelector('#type');
const priceInputForNight = form.querySelector('#price');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');

const priceChangeHandler = () => {
  typeOfHousing.addEventListener('change', () => {
    priceInputForNight.max = '1000000';
    switch (typeOfHousing.value) {
      case 'bungalow':
        priceInputForNight.value = 0;
        priceInputForNight.min = 0;
        break;
      case 'flat':
        priceInputForNight.value = 1000;
        priceInputForNight.min = 1000;
        break;
      case 'house':
        priceInputForNight.value = 5000;
        priceInputForNight.min = 5000;
        break;
      case 'palace':
        priceInputForNight.value = 10000;
        priceInputForNight.min = 10000;
        break;
      default:
        priceInputForNight.value = 0;
        priceInputForNight.min = 0;
    }
  });
}
priceChangeHandler();

const checkinChangeHandler = () => {
  timeIn.addEventListener('change', () => {
    switch (timeIn.value) {
      case '12:00':
        timeOut.value = '12:00';
        break;
      case '13:00':
        timeOut.value = '13:00';
        break;
      case '14:00':
        timeOut.value = '14:00';
        break;
      default:
        timeOut.value = '11:00';
    }
  });
}
checkinChangeHandler();

export { priceChangeHandler, checkinChangeHandler };
