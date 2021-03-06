/* global L:readonly */
import { inputAddress, activatePage } from './status-of-page.js';
import { drawSuggestion } from './draw-suggestion.js';
const PIN_BIGGER_SIZE = 52;
const PIN_SMALLER_SIZE = 26;
const MAP_ZOOM = 10;
const defaultCoordinates = {
  lat: 35.6803997,
  lng: 139.7690174,
};

const setDefaultCoordinatesToInputAddress = () => {
  inputAddress.value = `${defaultCoordinates.lat.toFixed(5)}, ${defaultCoordinates.lng.toFixed(5)}`;
}

const map = L.map('map-canvas')
  .on('load', () => {
    activatePage();
    setDefaultCoordinatesToInputAddress();
  })
  .setView(defaultCoordinates, MAP_ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconsSize: [PIN_BIGGER_SIZE, PIN_BIGGER_SIZE],
  iconsAnchor: [PIN_SMALLER_SIZE, PIN_BIGGER_SIZE],
});

const mainPinMarker = L.marker(
  defaultCoordinates,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker
  .addTo(map);

mainPinMarker.on('drag', (evt) => {
  inputAddress.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

let markers = [];

const createMarkers = (array) => {
  markers = [];
  array.forEach((item) => {
    const { lat, lng } = item.location;

    L.icon({
      iconUrl: '../img/pin.svg',
      iconsSize: [PIN_BIGGER_SIZE, PIN_BIGGER_SIZE],
      iconsAnchor: [PIN_SMALLER_SIZE, PIN_BIGGER_SIZE],
    });

    const marker = L.marker({ lat, lng });

    const template = drawSuggestion(item);

    marker
      .addTo(map)
      .bindPopup(
        template,
        {
          keepInView: true,
        },
      );
    markers.push(marker);
  });
}

const resetMap = () => {
  map.panTo([defaultCoordinates.lat, defaultCoordinates.lng]);
  mainPinMarker.setLatLng([defaultCoordinates.lat, defaultCoordinates.lng]);
  setDefaultCoordinatesToInputAddress();
}

const cleanMarkers = () => {
  map.closePopup();
  markers.forEach((marker) => {
    map.removeLayer(marker);
  })
}

export { createMarkers, resetMap, cleanMarkers };
