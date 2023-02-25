
import { getData, loadCss, } from './api.js';
import { CardFilms } from './classes.js';
import { renderCard } from './card.js';


export let data = await getData();
data.forEach(el => {
  loadCss()
  new CardFilms(el.title, el.episode_id)
});
let URLData = new URLSearchParams(window.location.search);
let id = URLData.get('episode');


renderCard()




