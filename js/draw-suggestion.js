import { suggestions } from './data.js';

const drawSuggestion = (suggestion) => {
  // const contentTemplate = document.querySelector('#card').content;
  // contentTemplate.cloneNode(true);

  const temp = document.querySelector('#card');
  const content = temp.content.cloneNode(true);

  content.querySelector('.popup__title').innerText = suggestion.offer.title;
  content.querySelector('.popup__text--address').innerText = suggestion.offer.address;
  content.querySelector('.popup__text--price').innerText = suggestion.offer.price;
  content.querySelector('.popup__type').innerText = types[suggestion.offer.type];
  const types = {
    flat: 'Квартира',
    bungalow: 'Бунгало',
    house: 'Дом',
    palace: 'Дворец',
  }

  content.querySelector('.popup__text--capacity').innerText = `${suggestion.offer.rooms} комнаты для ${suggestion.offer.guests} гостей`;
  content.querySelector('.popup__text--time').innerText = `Заезд после ${suggestion.offer.checkin}, выезд до ${suggestion.offer.checkout}`;


  const featuresPopup = content.querySelector('.popup__features')
  const featuresContent = content.querySelector('.popup__features').innerText = suggestion.offer.features;


  const renderFeaturesList = (features, parentBlock) => {
    features.forEach((feature) => {
      const newFeature = document.createElement('li');
      newFeature.classList.add('popup__feature', `popup__feature--${features[feature]}`);
      parentBlock.appendChild(newFeature);
    });
  };
  renderFeaturesList(featuresContent, featuresPopup);

  content.querySelector('.popup__description').innerText = suggestion.offer.description;

  const photosTemp = content.querySelectorAll('.popup__photos');
  const renderAdPhotos = (photos, photoGallery) => {
    photos.forEach ((photo) => {
      const newPhoto = document.createElement('img');
      newPhoto.src = photos[photo];
      newPhoto.width = '45';
      newPhoto.height = '40';
      newPhoto.alt = 'Фотография жилья';
      photoGallery.appendChild(newPhoto);
    });
  };
  // массив для перебора фоток надо импортировать из data или из suggestions...не пойму)
  renderAdPhotos(photos, photosTemp);

  content.querySelector('.popup__avatar').src = suggestion.author.avatar;
  document.querySelector('#map-canvas').appendChild(content);
}

drawSuggestion();

export { drawSuggestion };
