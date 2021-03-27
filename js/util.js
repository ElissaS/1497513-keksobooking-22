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
    if (Math.round(Math.random())) {
      newArray.push(element)
    }
  })

  return newArray;
}

// Функция, для получения случайного элемента из массива
const getRandomArrayElement = (dataArray) => {
  const randomizer = Math.floor(Math.random() * dataArray.length);

  return dataArray[randomizer];
}

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

export { getRandomInteger, getRandomFloatInRange, getRandomArray, getRandomArrayElement, isEscEvent };
