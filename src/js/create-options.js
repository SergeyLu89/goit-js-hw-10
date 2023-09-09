import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { refs } from '..';
import { changeVisibility, renderCatDescription } from './render-options';

function createCatOptions() {
  changeVisibility(refs.breedSelect);
  changeVisibility(refs.loader);
  fetchBreeds()
    .then(data => {
      const options = data
        .map(({ id, name }) => `<option value = '${id}'>${name}</option>`)
        .join('');

      refs.breedSelect.innerHTML = options;
      new SlimSelect({
        select: refs.breedSelect,
      });

      changeVisibility(refs.breedSelect);
      changeVisibility(refs.loader);
    })
    .catch(error => {
      Notiflix.Notify.failure(refs.error.textContent);
      changeVisibility(refs.loader);
    });
}

function onBreedSelectChange(event) {
  changeVisibility(refs.loader);

  const breedSelectId = event.currentTarget.value;
  fetchCatByBreed(breedSelectId)
    .then(data => {
      renderCatDescription(data);
      changeVisibility(refs.loader);
    })
    .catch(error => {
      Notiflix.Notify.failure(refs.error.textContent);
      changeVisibility(refs.loader);
      refs.catInfo.innerHTML = '';
    });
}

export { createCatOptions, onBreedSelectChange };
