const ALLOWED_FILE_TYPES = ['image/gif', 'image/jpg', 'image/jpeg', 'image/png', 'image/svg'];
import { createImg } from './util.js';

const avatarChooser = document.querySelector('.ad-form-header__input');
const imagesChooser = document.querySelector('.ad-form__input');
const imagesPreview = document.querySelector('.ad-form__photo');
const avatarPreview = document.querySelector('.ad-form-header__preview');
const DEFAULT_IMG_SRC = 'img/muffin-grey.svg';

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
    const isValidFileType = ALLOWED_FILE_TYPES.includes(fileType);

    if (isValidFileType) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        preview.src = reader.result;
      });

      reader.readAsDataURL(file);
      return true;
    }
    //console.warn('пользователь попытался загрузить невалидный файл')
    return false;
  })
}


//!!!!!!рабочий вариант по названию формата кратинки!!!!!!
// const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
// const uploadPic = (input, preview) => {
//   input.addEventListener('change', () => {
//     const file = input.files[0];
//     const fileName = file.name.toLowerCase();

//     const matches = FILE_TYPES.some((it) => {
//       return fileName.endsWith(it);
//     });

//     if (matches) {
//       const reader = new FileReader();

//       reader.addEventListener('load', () => {
//         preview.src = reader.result;
//       });

//       reader.readAsDataURL(file);
//     }
//   });
// }


const resetPreview = () => {
  addAvatar().src = DEFAULT_IMG_SRC;
  imagesPreview.innerHTML = '';
};


uploadPic(avatarChooser, addAvatar);
uploadPic(imagesChooser, addSuggestionPic);

export { resetPreview };

//   // TODO: если пользователь попытался загрузить невалидный файл,
//   // показать сообщение об ошибке
//   // очистить поле загрузки файла
