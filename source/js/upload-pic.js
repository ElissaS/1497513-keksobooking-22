import { createImg } from './util.js';
const ALLOWED_TYPE_OF_FILES = ['image/gif', 'image/jpg', 'image/jpeg', 'image/png', 'image/svg'];
const DEFAULT_IMG_SRC = 'img/muffin-grey.svg';

const avatarChooser = document.querySelector('.ad-form-header__input');
const imagesChooser = document.querySelector('.ad-form__input');
const imagesPreview = document.querySelector('.ad-form__photo');
const avatarPreview = document.querySelector('.ad-form-header__preview');

const addAvatar = () => {
  avatarPreview.innerHTML = '';
  const newAvatar = avatarPreview.appendChild(createImg('ad-form-header__img', 'Аватар пользователя', 40, 40));

  return newAvatar;
};

const addSuggestionPic = () => {
  const newPhoto = imagesPreview.appendChild(createImg('ad-form__img', 'Фотография помещения'));

  return newPhoto;
};


const uploadPic = (input, preview) => {
  input.addEventListener('change', () => {
    const file = input.files[0];
    const fileType = file.type;
    const isValidFileType = ALLOWED_TYPE_OF_FILES.includes(fileType);

    if (isValidFileType) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        preview().src = reader.result;
      });

      reader.readAsDataURL(file);
      return true;
    }

    return false;
  })
}

const resetPreview = () => {
  addAvatar().src = DEFAULT_IMG_SRC;
  imagesPreview.innerHTML = '';
};

uploadPic(avatarChooser, addAvatar);
uploadPic(imagesChooser, addSuggestionPic);

export { resetPreview };
