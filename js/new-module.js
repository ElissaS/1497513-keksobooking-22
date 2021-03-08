import { suggestions } from './data.js';

const drawSuggestion = (suggestion) => {
  // const contentTemplate = document.querySelector('#card').content;
  // contentTemplate.cloneNode(true);

  const temp = document.querySelector("#card");
  const content = temp.content.cloneNode(true);

  content.querySelector('.popup__title').innerText = suggestion.offer.title;
  content.querySelector('.popup__text--address').innerText = suggestion.offer.title;
  content.querySelector('.popup__text--price').innerText = suggestion.offer.title;
  const typeTemp = content.querySelector('.popup__type');
  typeTemp.innerText = suggestion.offer.type;
  if (typeTemp.innerText === flat || typeTemp.innerText === bungalow || typeTemp.innerText === house || typeTemp.innerText === palace) {
    flat = Квартира;
    bungalow = Бунгало;
    house = Дом;
    palace = Дворец;
  }
  content.querySelector('.popup__text--capacity').innerText = suggestion.offer.guests;
  content.querySelector('.popup__text--capacity').innerText = suggestion.offer.rooms;
  // {{offer.rooms}} комнаты для {{offer.guests}} гостей
  content.querySelector('.popup__text--time').innerText = suggestion.offer.checkin;
  content.querySelector('.popup__text--time').innerText = suggestion.offer.checkout;
  //  в блок строкой вида Заезд после {{offer.checkin}}, выезд до {{offer.checkout}}
  content.querySelector('.popup__features').innerText = suggestion.offer.features;
  content.querySelector('.popup__description').innerText = suggestion.offer.description;
  const photosTemp = content.querySelectorAll('.popup__photos');
  photosTemp[0].src = suggestion.offer.photos[0];
  photosTemp[1].src = suggestion.offer.photos[1];
  photosTemp[2].src = suggestion.offer.photos[2];

  content.querySelector('.popup__avatar').src = suggestion.author.avatar;

  document.querySelector("#map-canvas").appendChild(content);
}

const drawAllSuggestions = (suggestions) => {
  suggestions.forEach(suggestion) => {
  document.querySelector("#map-canvas").appendChild(content);
}
}

export { drawSuggestion, drawAllSuggestions };
