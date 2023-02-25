// Получаем через фетч данные и преобразуем из json
function fetchJson(url) {
  return fetch(url).then((res) => res.json());
}
// Загружаем стили
let cssPromiseBoot = null;
let cssPromiseMy = null;
function loadCss() {
  if (cssPromiseBoot) return cssPromiseBoot;
  if (cssPromiseMy) return cssPromiseMy;
  function appendStylesheets(url, resolve) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    link.addEventListener('load', () => {
      resolve();
    });
    document.head.append(link);
  }
  cssPromiseBoot = new Promise((resolve) => {
    appendStylesheets('https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css', resolve);
  });
  cssPromiseMy = new Promise((resolve) => {
    appendStylesheets('./css/style.css', resolve);
  });
  return [cssPromiseBoot, cssPromiseMy];
}


// получаем данные о всех эпизодах
async function getData() {
  const promiseFilms = await new Promise((resolve, reject) => {
    resolve(fetchJson('https://swapi.dev/api/films'));
  });
  return promiseFilms.results;
}



let URLData = new URLSearchParams(window.location.search);
let id = URLData.get('episode');

let resourse = []
let promPlanet;
if (id) {
  resourse = await Promise.all([
    './js/modules/card.js',
    fetchJson(`https://swapi.dev/api/films/${id}/`),
    'https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css',
  ])
  resourse.map(el => {
    if (typeof el === 'string') {
      if (el.endsWith('.css')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = el;
        link.addEventListener('load', () => {
          return;
        });
        document.head.append(link);
      }
      if (el.endsWith('.js')) {
        const script = document.createElement('script');
        script.src = el;
        script.type = "module";
        document.head.append(script);
      }
    } else {
      async function getEpisode() {
        const promiseEpisode = await new Promise((resolve, reject) => {
          resolve(el);
        });
        return promiseEpisode.results;
      }
      getEpisode()
    }
  })

  const { planets } = resourse[1];
  promPlanet = async function promisePlanets() {
    const planetArrayForPromise = planets.map(async el => {
      return await fetchJson(el);
    })
    const array = await Promise.all(planetArrayForPromise)
    return array;
  }
}

let episode = resourse[1];






export { getData, loadCss, episode, promPlanet, id }
