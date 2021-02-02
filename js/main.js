// Функция, возвращающая случайное целое число из переданного диапазона включительно.

const getRundomInteger = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0) {
    return 'Значение \'от\' должно быть больше или ровно нулю';
  }

  if (max < min || max === min) {
    return 'Значение \'от\' должно быть меньше числа \'до\'';
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRundomInteger(10, 15);


// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

const getRundomNumber = function (min, max) {

  if (min < 0) {
    return 'Значение \'от\' должно быть больше или ровно нулю';
  }

  if (max < min || max === min) {
    return 'Значение \'от\' должно быть меньше числа \'до\'';
  }

  return Math.random() * (max - min) + min;
}

getRundomNumber(10, 15);
