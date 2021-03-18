const form = document.querySelector('.ad-form');
const fieldsets = Array.from(form.children);
const formMap = document.querySelector('.map__filters');
const mapFilters = Array.from(formMap.children);
const inputAddress = form.querySelector('#address');

const deactivationOfPage = () => {
  form.classList.add('ad-form--disabled');
  formMap.classList.add('map__filters--disabled');

  fieldsets.forEach((fieldset) => {
    fieldset.disabled = true;
  });

  mapFilters.forEach((mapFilter) => {
    mapFilter.disabled = true;
  });
}
// document.addEventListener('load', deactivationOfPage());


const activationOfPage = () => {
  form.classList.remove('ad-form--disabled');
  formMap.classList.remove('map__filters--disabled');
  inputAddress.readOnly = true;

  fieldsets.forEach((fieldset) => {
    fieldset.disabled = false;
  });

  mapFilters.forEach((mapFilter) => {
    mapFilter.disabled = false;
  });
}
// document.addEventListener('load', activationOfPage());

export { inputAddress, deactivationOfPage, activationOfPage };
