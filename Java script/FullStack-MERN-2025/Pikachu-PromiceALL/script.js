const cardsBox = document.querySelector('.cards-container');
const displayOption = document.querySelector('.display-type');
async function pokemonUrls() {
  const listOfCharacters = await fetch(`
    https://pokeapi.co/api/v2/pokemon?limit=20`);
  const data = await listOfCharacters.json();
  // debugger;
  const pokemonCharacters = data?.results;
  let urls = pokemonCharacters.map((eachCharacter) => eachCharacter.url);
  const urlPromises = urls.map((url) => fetch(url));
  const singlePromise = await Promise.all(urlPromises);
  // console.log(singlePromise);
  const resultsJson = await Promise.all(
    singlePromise.map((result) => result.json())
  );
  console.log(resultsJson); // resultsJson is an array containing 20 objects
  resultsJson.forEach((character) => {
    const characterHTML = document.createElement('div');
    characterHTML.classList.add('cards');
    characterHTML.innerHTML = ` <img 
    src="${character.sprites.front_default}" 
    width="120" 
    height="120" 
    alt="${character.name}">
    <h3>${character.name}</h3>
    <p>ID: ${character.id}</p>
    <p>Weight: ${character.weight}</p>
    <p>Height: ${character.height}</p>`;
    cardsBox.append(characterHTML);
  });
  // console.log(characterHTML);
}
pokemonUrls();

displayOption.addEventListener('click', changeDisplay);
function changeDisplay(e) {
  const flexDisplay = e.target.closest('.flexstyle');
  if (flexDisplay) {
    cardsBox.classList.remove('grid');
    // console.log('flex got selected');
  }
  const gridDisplay = e.target.closest('.gridstyle');
  if (gridDisplay) {
    cardsBox.classList.add('grid');
    // console.log('grid got selected');
  }
}
