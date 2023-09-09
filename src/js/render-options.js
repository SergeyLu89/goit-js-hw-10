import { refs } from '..';

export function renderCatDescription(data) {
  const { breeds, url } = data[0];
  const { description, name, temperament } = breeds[0];
  const markup = `<img src="${url}" alt="${name}" class="cat-img">
  <h2 class="cat-name">${name}</h2>
  <p class="cat-temperament">${temperament}</p>
  <p class="cat-description">${description}</p>`;
  refs.catInfo.innerHTML = markup;
}

export function changeVisibility(element) {
  element.classList.toggle('hidden');
}
