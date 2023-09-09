import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'live_B4GK2QQI1Kvc5MPuoWaJDO3dkCIgzfKqGwVGbfLMYpkAD8mOGFxOfGhwrn6nBYEC';

function fetchBreeds() {
  return axios.get('/breeds').then(resp => {
    return resp.data;
  });
}

function fetchCatByBreed(breedId) {
  return axios.get(`/images/search?breed_ids=${breedId}`).then(resp => {
    return resp.data;
  });
}
export { fetchBreeds, fetchCatByBreed };
