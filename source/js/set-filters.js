import { createMarkers, cleanMarkers } from './create-map.js';
import { debounce } from './util.js';

const filtersForm = document.querySelector('.map__filters');
const filterType = filtersForm.querySelector('#housing-type');
const filterFeatures = filtersForm.querySelector('#housing-features');
const filterPrice = filtersForm.querySelector('#housing-price');
const filterGuests = filtersForm.querySelector('#housing-guests');
const filterRooms = filtersForm.querySelector('#housing-rooms');
const ANY_VALUE = 'any';
const LOW_PRICE = 'low';
const MIDDLE_PRICE = 'middle';
const HIGH_PRICE = 'high';
const COUNT_OF_CARDS = 10;
const DISPLAY_DELAY = 500;
const IMMEDIATE_DISPLAY = true;

const PRICE_RANGE = {
  low: 10000,
  high: 50000,
}

const filterByType = (item) => {
  return item.offer.type === filterType.value || filterType.value === ANY_VALUE;
};

const filterByPrice = (item) => {
  switch (filterPrice.value) {
    case HIGH_PRICE:
      return item.offer.price > PRICE_RANGE['high'];
    case MIDDLE_PRICE:
      return item.offer.price >= PRICE_RANGE['low'] && item.offer.price <= PRICE_RANGE['high'];
    case LOW_PRICE:
      return item.offer.price < LOW_PRICE;
    default:
      return filterPrice.value === ANY_VALUE;
  }
}

const filterByRooms = (item) => {
  return item.offer.rooms === parseInt(filterRooms.value, 10) || filterRooms.value === ANY_VALUE;
};

const filterByGuests = (item) => {
  return item.offer.guests === parseInt(filterGuests.value, 10) || filterGuests.value === ANY_VALUE;
};

const filterByFeatures = (item) => {
  const checkedFeatures = Array.from(filterFeatures.querySelectorAll('input:checked'));

  if (checkedFeatures.length === 0) {
    return true;
  }

  return checkedFeatures.every((feature) => item.offer.features.includes(feature.value));
}

const filterMarkers = (data) => {
  const filteredCards = [];

  for (let i = 0; i < data.length; i++) {
    if (filteredCards.length === COUNT_OF_CARDS) {
      break;
    }
    if (
      filterByType(data[i])
      && filterByRooms(data[i])
      && filterByGuests(data[i])
      && filterByPrice(data[i])
      && filterByFeatures(data[i])
    ) {
      filteredCards.push(data[i]);
    }
  }

  return filteredCards;
}

const updateMarkers = debounce((data) => {
  const filteredData = filterMarkers(data);
  cleanMarkers();
  createMarkers(filteredData);
}, DISPLAY_DELAY, IMMEDIATE_DISPLAY);

const setFilterListener = (data) => {
  filtersForm.addEventListener('change', () => {
    updateMarkers(data);
  });

}

export { setFilterListener, updateMarkers, COUNT_OF_CARDS, filtersForm };
