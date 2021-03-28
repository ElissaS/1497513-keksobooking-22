import './draw-suggestion.js';
import './success.js';
import './upload-pic.js';
import { fieldsValidate } from './field-handler.js';
import { deactivatePage } from './status-of-page.js';
import { createMarkers } from './create-map.js';
import { getServerData } from './get-server-data.js';
import { showGetErrorNotice } from './error.js';
import { setFilterListener, COUNT_OF_CARDS } from './set-filters.js';

const createDataOnSuccess = (data) => {
  createMarkers(data.slice(0, COUNT_OF_CARDS));
  setFilterListener(data);
}

const createErrorOnDataFail = () => {
  showGetErrorNotice();
  deactivatePage();
}

fieldsValidate();
getServerData(createDataOnSuccess, createErrorOnDataFail);
