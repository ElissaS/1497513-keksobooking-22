const form = document.querySelector('.ad-form');
const fieldsets = Array.from(form.children);
const formMap = document.querySelector('.map__filters');
const mapFilters = Array.from(formMap.children);
const fieldset = document.querySelector('fieldset');
const inputAddress = form.querySelector('#address');


const toggleElement = (arr, state) => {
  arr.forEach((item) => {
    item.disabled = state;
  })
}

const deactivationOfPage = () => {
  form.classList.add('ad-form--disabled');
  formMap.classList.add('map__filters--disabled');
  fieldset.disabled = true;

  toggleElement(fieldsets, true);
  toggleElement(mapFilters, true);
}

const activationOfPage = () => {
  form.classList.remove('ad-form--disabled');
  formMap.classList.remove('map__filters--disabled');
  inputAddress.readOnly = true;

  toggleElement(fieldsets, false);
  toggleElement(mapFilters, false);
}

export { inputAddress, deactivationOfPage, activationOfPage };
