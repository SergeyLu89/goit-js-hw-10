import { createCatOptions, onBreedSelectChange } from './js/create-options';

export const refs = {
  breedSelect: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
};

refs.breedSelect.addEventListener('change', onBreedSelectChange);

createCatOptions();
