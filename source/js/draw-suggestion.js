const renderAdPhotos = (photos, photoGallery) => {
  photoGallery.innerHTML = '';
  photos.forEach((photo) => {
    const newPhoto = document.createElement('img');
    newPhoto.src = photo;
    newPhoto.width = '45';
    newPhoto.height = '40';
    newPhoto.alt = 'Фотография жилья';
    newPhoto.className = 'popup__photo';
    photoGallery.appendChild(newPhoto);
  });
};

const renderFeaturesList = (features, parentBlock) => {
  parentBlock.innerHTML = '';
  features.forEach((feature) => {
    const newFeature = document.createElement('li');
    newFeature.classList.add('popup__feature', `popup__feature--${feature}`);
    parentBlock.appendChild(newFeature);
  });
};

const drawSuggestion = (item) => {
  const template = document.querySelector('#card');
  const content = template.content.cloneNode(true);
  const featuresPopup = content.querySelector('.popup__features');
  const photosTemp = content.querySelector('.popup__photos');

  const types = {
    flat: 'Квартира',
    bungalow: 'Бунгало',
    house: 'Дом',
    palace: 'Дворец',
  }

  content.querySelector('.popup__title').innerText = item.offer.title;
  content.querySelector('.popup__text--address').innerText = item.offer.address;
  content.querySelector('.popup__text--price').innerText = item.offer.price;
  content.querySelector('.popup__type').innerText = types[item.offer.type];
  content.querySelector('.popup__text--capacity').innerText = `${item.offer.rooms} комнаты для ${item.offer.guests} гостей`;
  content.querySelector('.popup__text--time').innerText = `Заезд после ${item.offer.checkin}, выезд до ${item.offer.checkout}`;
  content.querySelector('.popup__description').innerText = item.offer.description;
  content.querySelector('.popup__avatar').src = item.author.avatar;

  if (item.offer.features.length) {
    renderFeaturesList(item.offer.features, featuresPopup);
  } else {
    featuresPopup.classList.add('hidden');
    featuresPopup.innerHTML = '';
  }

  if (item.offer.photos.length) {
    renderAdPhotos(item.offer.photos, photosTemp);
  } else {
    photosTemp.classList.add('hidden');
    photosTemp.innerHTML = '';
  }

  return content.firstElementChild;
}

export { drawSuggestion };
