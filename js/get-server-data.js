const END_POINT = 'https://22.javascript.pages.academy/keksobooking';


/**
 * Получение ответа от сервера
 * @param {Function} onSuccess
 * @param {Function} onError
 */
const getServerData = (onSuccess, onError) => {
  fetch(`${END_POINT}/data`)
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onError();
    })
}

const sendServerData = (onSuccess, onError, body) => {
  fetch(END_POINT, {
    method: 'POST',
    body,
  },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch(() => {
      onError();
    })
}

export { getServerData, sendServerData };
