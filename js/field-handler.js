const form = document.querySelector('.ad-form');
const typeOfHousing = form.querySelector('#type');
const priceForNight = form.querySelector('#price');
const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');

const matchHouseVsPrice = () => {
  typeOfHousing.addEventListener('change', () => {
    switch (typeOfHousing.value) {
      case 'bungalow':
        priceForNight.value = 0;
        break;
      case 'flat':
        priceForNight.value = 1000;
        break;
      case 'house':
        priceForNight.value = 5000;
        break;
      case 'palace':
        priceForNight.value = 10000;
        break;
      default:
        priceForNight.value = 10;
    }
  });
}
matchHouseVsPrice();

const matchTimeinVsTimeout = () => {
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
matchTimeinVsTimeout();

export { matchHouseVsPrice, matchTimeinVsTimeout };
