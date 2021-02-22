
import { getRandomInteger, getRandomFloatInRange, getRandomArray, getRandomArrayElement } from './util.js';

const TITLE = [
  'Современный комплекс Марс',
  'Известный клуб Решето',
  'Поместье Весёлый плотник',
  'Лагерь Морская гладь',
  'Усадьба Далёкий уголок',
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION = [
  'Без окон и дверей. Не входить!',
  'Две комнаты и баня. Безлимит на воду.',
  'Есть чердак и кладовая. Живёт кот.',
  'Самый лучший вид. Шведский стол. Кислород в наличии.',
  'Уют. Тепло. Море.',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const LOCATION = {
  x: {
    min: 35.65000,
    max: 35.70000,
  },
  y: {
    min: 139.70000,
    max: 139.80000,
  },
};

const COUNT_SUGGESTIONS = 10;


// Функция, для создания author
const createAuthor = (getRandomInteger) => {

  return {
    avatar: `img/avatars/user0${getRandomInteger}.png`,
  }
}


// Функция, для создания offer
const createOffer = (locationX, locationY) => {

  return {
    title: getRandomArrayElement(TITLE),
    address: `${locationX}, ${locationY}`,
    price: getRandomInteger(100, 1000000),
    rooms: getRandomInteger(1, 100),
    guests: getRandomInteger(0, 3),
    type: getRandomArrayElement(TYPE),
    checkin: getRandomArrayElement(CHECKIN),
    checkout: getRandomArrayElement(CHECKOUT),
    features: getRandomArray(FEATURES),
    description: getRandomArrayElement(DESCRIPTION),
    photos: getRandomArray(PHOTOS),
  }
}


// Функция, для создания location
const createLocation = (locationX, locationY) => {
  return {
    x: locationX,
    y: locationY,
  }
}

// Функция, собирающая в себе вышенаписанные функции author, offer, location
const createSuggestion = () => {
  const RandomLocationX = getRandomFloatInRange(LOCATION.x.min, LOCATION.x.max, 5);
  const RandomLocationY = getRandomFloatInRange(LOCATION.y.min, LOCATION.y.max, 5);
  return {
    author: createAuthor(getRandomInteger(1, 8)),
    offer: createOffer(RandomLocationX, RandomLocationY),
    location: createLocation(RandomLocationX, RandomLocationY),
  }
}

// генерит пустой массив с количеством элементов COUNT_SUGGESTIONS, перезаписывает null  на результат функции createSuggestion()
const suggestion = new Array(COUNT_SUGGESTIONS).fill(null).map(() => createSuggestion());

export { suggestion };
