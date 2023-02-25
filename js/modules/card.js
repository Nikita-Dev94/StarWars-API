import { promPlanet, id } from './api.js';




let { episode } = await import('./api.js');


function renderCard() {
  if (id) {
    const app = document.getElementById('app');
    const {
      title,
      episode_id,
      opening_crawl,
      planets,
      species,

    } = episode;

    async function renderCardDeep() {
      app.innerHTML = '';
      const array = await promPlanet();
      const $planetsList = document.createElement('ul');
      array.forEach(el => {
        const $planetItem = document.createElement('li');
        $planetItem.innerHTML = `${el.name}`;
        $planetsList.append($planetItem);
      });

      app.innerHTML = `<h1 class='title__episode'>${title}</h1>
  <span class='id'>Эпизод № ${episode_id}</span>
  <p class="text">${opening_crawl}</p>`;
      app.append($planetsList);
    }
    renderCardDeep()
  }
}


export { renderCard }
