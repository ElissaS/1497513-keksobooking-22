import './draw-suggestion.js';
import './success.js';
import { fieldsValidate } from './field-handler.js';
import { deactivationOfPage } from './status-of-page.js';
import { createMarkers } from './create-map.js';
import { getServerData } from './get-server-data.js';
import { showGetErrorNotice } from './error.js';
import { setFilterListener } from './set-filters.js';
const MAX_MARKERS_NUMBER = 10;
/**
 * @typedef item
 * @type Object
 * @property {Object} author
 * @property {String} author.avatar
 * @property {Object} location
 * @property {Number} location.lat
 * @property {Number} location.lng
 * @property {Object} offer
 * @property {String} offer.address
 * @property {String} offer.checkin
 * @property {String} offer.checkout
 * @property {String} offer.description
 * @property {String[]} offer.features
 * @property {Number} offer.guests
 * @property {String[]} offer.photos
 * @property {Number} offer.price
 * @property {Number} offer.rooms
 * @property {String} offer.title
 * @property {String} offer.types
 */

/**
 * Обработчик успешного получения ответа от сервера
 * Создаёт маркеры
 * Ставит слушатели на фильтры формы
 * @param {item[]} data - массив предложений
 */
const onDataSuccess = (data) => {
  createMarkers(data.slice(0, MAX_MARKERS_NUMBER));
  setFilterListener(data);
}

const onDataFail = () => {
  showGetErrorNotice();
  deactivationOfPage();
}

fieldsValidate();
getServerData(onDataSuccess, onDataFail);
