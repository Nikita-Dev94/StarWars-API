// eslint-disable-next-line max-classes-per-file
class CardFilms {
  constructor(name, id) {
    this.$card = document.createElement('div');
    this.$cardBody = document.createElement('div');
    this.$cardTitle = document.createElement('h5');
    this.$cardSubtitle = document.createElement('h6');
    this.$cardLink = document.createElement('a');

    this.$card.classList.add('card');
    this.$cardBody.classList.add('card-body');
    this.$cardTitle.classList.add('card-title');
    this.$cardSubtitle.classList.add('card-subtitle', 'mb-2', 'text-muted');
    this.$cardLink.classList.add('card-link');
    this.$cardLink.textContent = 'Об Эпизоде>>>';
    this.$cardLink.href = `?episode=${id}`;
    this.$cardTitle.textContent = name;
    this.$cardSubtitle.textContent = `Эпизод № ${id}`;
    this.$cardBody.append(this.$cardTitle);
    this.$cardBody.append(this.$cardSubtitle);
    this.$cardBody.append(this.$cardLink);
    this.$card.append(this.$cardBody);
    document.getElementById('app').append(this.$card);
  }
}
class CardEpisode {
  constructor(title, id) {
    this.$card = document.createElement('div');
    this.$cardBody = document.createElement('div');
    this.$cardTitle = document.createElement('h1');
    this.$cardSubtitle = document.createElement('h3');
    this.$cardLink = document.createElement('a');

    this.$card.classList.add('card');
    this.$cardBody.classList.add('card-body');
    this.$cardTitle.classList.add('card-title');
    this.$cardSubtitle.classList.add('card-subtitle', 'mb-2', 'text-muted');
    this.$cardLink.classList.add('card-link');
    this.$cardLink.textContent = 'Об Эпизоде>>>';
    this.$cardLink.href = `?episode=${id}`;
    this.$cardTitle.textContent = title;
    this.$cardSubtitle.textContent = `Эпизод № ${id}`;
    this.$cardBody.append(this.$cardTitle);
    this.$cardBody.append(this.$cardSubtitle);
    this.$cardBody.append(this.$cardLink);
    this.$card.append(this.$cardBody);
    document.getElementById('app').append(this.$card);
  }
}
export { CardFilms, CardEpisode };
