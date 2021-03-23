const ALLOWED_FILE_TYPES = ['image/gif', 'image/jpg', 'image/jpeg', 'image/png', 'image/svg'];

const uploadPicture = (input, preview) => {
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
    console.warn('пользователь попытался загрузить невалидный файл')
    return false;

    // TODO: если пользователь попытался загрузить невалидный файл,
    // показать сообщение об ошибке
    // очистить поле загрузки файла
    //
  })
}

// const resetPreview = (preview, imageSRC) => {
//   preview.src = imageSRC;
// }

export {uploadPicture, resetPreview};
