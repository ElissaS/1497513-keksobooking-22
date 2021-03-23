import { suggestions } from './data.js';
import { drawSuggestion } from './draw-suggestion.js';
import { fieldsValidate } from './field-handler.js';
import { inputAddress, deactivationOfPage, activationOfPage } from './status-of-page.js';
import { newCoordinates, createMarkers } from './create-map.js';
import { getServerData, sendServerData } from './get-server-data.js';
import './success.js';
import { showGetErrorNotice } from './error.js';


const onDataFail = () => {
  showGetErrorNotice();
 // disableForms();
}

/**
 * @typedef Suggestion
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
 * @param {Suggestion[]} data - массив предложений
 */
const onDataSuccess = (data) => {
  createMarkers(data);
  //setFilterListener(data);
}

fieldsValidate();

getServerData(onDataSuccess, onDataFail);

//TODO: настроить фильтры
//const setFilterListener = () => {
// console.log('not implemented yet');
//}
// const disableForms = () => {
//   console.log('not implemented yet');
// }
