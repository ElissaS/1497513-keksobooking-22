/* global L:readonly */
import { inputAddress, activationOfPage, deactivationOfPage } from './status-of-page.js';
import { suggestions } from './data.js';
import { drawSuggestion } from './draw-suggestion.js';


const defaultCoordinates = {
  lat: 35.6803997,
  lng: 139.7690174,
};

const getAddress = () => {
  inputAddress.value = `${defaultCoordinates.lat.toFixed(5)}, ${defaultCoordinates.lng.toFixed(5)}`;
}

document.addEventListener('load', deactivationOfPage());

const map = L.map('map-canvas')
  .on('load', () => {
    activationOfPage();
    getAddress();
  })
  .setView(defaultCoordinates, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  defaultCoordinates,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker
  .addTo(map)
  .bindPopup();


const newCoordinates = mainPinMarker.on('drag', (evt) => {
  inputAddress.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

suggestions.forEach((suggestion) => {
  const { x, y } = suggestion.location;

  const icon = L.icon({
    iconUrl: '/img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  const marker = L.marker({
    lat: x,
    lng: y,
  });

  marker
    .addTo(map)
    .bindPopup(
      drawSuggestion(suggestion),
      {
        keepInView: true,
      },
    );
});

export { newCoordinates };
