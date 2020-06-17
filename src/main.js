import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example);

const pokemonArray = data.pokemon;
const pokemonQuantity = document.querySelector('#pokemonQuantity');
const mainView = document.querySelector('main');
const modalContainer = document.getElementById("myModal");

const renderMainView = () => {
  const pokemonCards = document.createElement('div');
  pokemonCards.classList.add('pokemon-cards');

  pokemonArray.forEach(element => {
    // TO DO: ask if there is a more performatic way to make this possible!
    const pokemonCard = document.createElement('div');
    pokemonCard.id = element.id;
    pokemonCard.classList.add('pokemon-card');
    const pokemonImg = document.createElement('img');
    const pokemonName = document.createElement('p');
    const pokemonType = document.createElement('p');
    pokemonCard.appendChild(pokemonImg);
    pokemonCard.appendChild(pokemonName);
    pokemonCard.appendChild(pokemonType);
    // TODO Another way to avoid create an event listener for each pokemon card
    pokemonCard.addEventListener('click', showInfoPokemon);
    pokemonImg.src = element.img;
    pokemonName.textContent = element.name;
    pokemonType.textContent = element.type.join(' | ');
    pokemonCards.appendChild(pokemonCard);
  });

  mainView.appendChild(pokemonCards);

}

const showInfoPokemon = (event) => {
  // disable 
  // TODO make sure not already showing info of a pokemon
  const pokemonSelected = event.currentTarget;
  const pokemonObject = pokemonArray.find(x => x.id == pokemonSelected.id);
  
  const infoCardPokemon = document.createElement('div');
  infoCardPokemon.classList.add('more-info-pokemon');
  const cardTitle = document.createElement('h1');
  cardTitle.textContent = `About ${pokemonObject.name}`;
  const cardImage = document.createElement('img');
  cardImage.src = pokemonObject.img;
  const infoDetailedText = document.createElement('div');
  infoDetailedText.innerHTML = `<h2 class="title">type</h2>
                                <p>${pokemonObject.type.join(', ')}</p>
                                <h2 class="title">weaknesses</h2>
                                <p>${pokemonObject.weaknesses.join(', ')}</p>
                                <div class="pokemon-structure">
                                  <p class="title">heigth</p>
                                  <p>${pokemonObject.height}</p>
                                  <p class="title">width</p>
                                  <p>${pokemonObject.weight}</p>`;

  infoCardPokemon.appendChild(cardTitle);
  infoCardPokemon.appendChild(cardImage);
  infoCardPokemon.appendChild(infoDetailedText);
  modalContainer.innerHTML = '';
  modalContainer.appendChild(infoCardPokemon);
  modalContainer.style.display = 'flex';
}

const closeInfoPokemon = (event) => {
  if (event.target == modalContainer) {
    modalContainer.style.display = "none";
  }
}

pokemonQuantity.textContent = pokemonArray.length;
renderMainView();

modalContainer.addEventListener('click', closeInfoPokemon);