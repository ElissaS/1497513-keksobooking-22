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


// Функция, возвращающая случайное целое число из переданного диапазона включительно.
const getRandomInteger = (min, max) => {
  if (min < 0 || max < min || max === min) {

    return 'Введите корректное значение';
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
const getRandomFloatInRange = (min, max, digit) => {
  const randomNumber = (Math.random() * (max - min) + min).toFixed(digit);
  if (min < 0 || max < min || max === min) {

    return 'Введите корректное значение';
  }

  return randomNumber;
}


// Функция, для получения случайного массива
const getRandomArray = (array) => {
  const newArray = [];
  // Функция, для сбора случайного массива из другого массива
  array.forEach((element) => {
    if (Math.random() > 0.5) {

      return;
    }
    newArray.push(element);
  })

  return newArray;
}

// Функция, для получения случайного элемента из массива
const getRandomArrayElement = (dataArray) => {
  const randomizer = Math.floor(Math.random() * dataArray.length);

  return dataArray[randomizer];
}

// Функция, для создания предложения
const createSuggestion = () => {
  const RandomLocationX = getRandomFloatInRange(LOCATION.x.min, LOCATION.x.max, 5);
  const RandomLocationY = getRandomFloatInRange(LOCATION.y.min, LOCATION.y.max, 5);

  return {
    author: {
      avatar: `img/avatars/user0${getRandomInteger(1,8)}.png`,
    },
    offer: {
      title: getRandomArrayElement(TITLE),
      address: `${RandomLocationX}, ${RandomLocationY}`,
      price: getRandomInteger(100, 1000000),
      rooms: getRandomInteger(1, 100),
      guests: getRandomInteger(0, 3),
      type: getRandomArrayElement(TYPE),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getRandomArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTION),
      photos: getRandomArray(PHOTOS),
    },
    location: {
      x: RandomLocationX,
      y: RandomLocationY,
    },
  }
}

const suggestion = new Array(COUNT_SUGGESTIONS).fill(null).map(() => createSuggestion());
