import { suggestions } from './data.js';

const drawSuggestion = (suggestion) => {
  // const contentTemplate = document.querySelector('#card').content;
  // contentTemplate.cloneNode(true);

  const temp = document.querySelector('#card');
  const content = temp.content.cloneNode(true);
  console.log(suggestion);

  content.querySelector('.popup__title').innerText = suggestion.offer.title;
  content.querySelector('.popup__text--address').innerText = suggestion.offer.address;
  content.querySelector('.popup__text--price').innerText = suggestion.offer.price;

  const types = {
    flat: 'Квартира',
    bungalow: 'Бунгало',
    house: 'Дом',
    palace: 'Дворец',
  }
  content.querySelector('.popup__type').innerText = types[suggestion.offer.type];


  content.querySelector('.popup__text--capacity').innerText = `${suggestion.offer.rooms} комнаты для ${suggestion.offer.guests} гостей`;
  content.querySelector('.popup__text--time').innerText = `Заезд после ${suggestion.offer.checkin}, выезд до ${suggestion.offer.checkout}`;


  const featuresPopup = content.querySelector('.popup__features')

  const renderFeaturesList = (features, parentBlock) => {
    parentBlock.innerHTML = '';
    features.forEach((feature) => {
      const newFeature = document.createElement('li');
      newFeature.classList.add('popup__feature', `popup__feature--${feature}`);
      parentBlock.appendChild(newFeature);
    });
  };
  renderFeaturesList(suggestion.offer.features, featuresPopup);

  content.querySelector('.popup__description').innerText = suggestion.offer.description;

  const photosTemp = content.querySelector('.popup__photos');
  const renderAdPhotos = (photos, photoGallery) => {
    photoGallery.innerHTML = '';
    photos.forEach((photo) => {
      const newPhoto = document.createElement('img');
      newPhoto.src = photo;
      newPhoto.width = '45';
      newPhoto.height = '40';
      newPhoto.alt = 'Фотография жилья';
      newPhoto.className = 'popup__photo'
      photoGallery.appendChild(newPhoto);
    });
  };

  renderAdPhotos(suggestion.offer.photos, photosTemp);

  content.querySelector('.popup__avatar').src = suggestion.author.avatar;
  document.querySelector('#map-canvas').appendChild(content);
}

drawSuggestion(suggestions[0]);

export { drawSuggestion };
