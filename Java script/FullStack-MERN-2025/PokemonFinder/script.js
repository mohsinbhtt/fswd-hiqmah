const inputName = document.getElementById('input-text');
const searchBtn = document.getElementById('input-button');
const characterName = document.querySelector('.name');
const featureCard = document.querySelector('.feature-card');
const noCharacterWarning = document.querySelector('.not-character');
const statsCard = document.querySelector('.stats-table');
const characterNumber = document.getElementById('dim-numbers');

searchBtn.addEventListener('click', () => {
  pokemon();
});

async function pokemon() {
  try {
    const nameVal = inputName.value.trim().toLowerCase();
    if (!nameVal) return window.alert('Please enter your character');

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nameVal}`
    );
    if (!response.ok) {
      characterNotFound();
      return;
    }

    const data = await response.json();
    console.log(data);

    const pokemonCharacter = data?.forms?.[0]?.name;

    if (!pokemonCharacter) {
      characterNotFound();
    } else {
      noCharacterWarning.style.display = 'none';
      featureCard.style.display = '';
      displayName(pokemonCharacter);
      displayFeatures(data);
      displayStats(data);
      displayNumber(data);
    }
  } catch (error) {
    console.log(error);
    // characterNotFound();
  }

  function characterNotFound() {
    noCharacterWarning.style.display = 'flex';
    noCharacterWarning.style.zIndex = '100';
    characterName.textContent = '';
    featureCard.textContent = '';
    statsCard.textContent = '';
    characterNumber.textContent = '';
  }
  function displayNumber(data) {
    characterNumber.textContent = '';
    const characterID = data?.id;
    characterNumber.insertAdjacentText('afterbegin', characterID);
  }
  function displayName(pokemonCharacter) {
    characterName.textContent = '';
    featureCard.textContent = '';
    const capCharacter =
      pokemonCharacter.charAt(0).toUpperCase() + pokemonCharacter.slice(1);
    characterName.textContent = capCharacter;
    return capCharacter;
  }

  function displayFeatures(data) {
    featureCard.textContent = '';
    const ability = data?.abilities?.[0]?.ability?.name;
    const weight = data?.weight;
    const height = data?.height;
    const featureHTML = `<div class="feature"; style="gap:1rem; display:flex; flex-direction:column">
    <p>Ability:   ${ability}</p>
    <p>Weight:   ${weight}
    </p><p>Height:   ${height}</p> 
    </div>`;

    featureCard.insertAdjacentHTML('beforeend', featureHTML);

    // console.log(featureCard);
  }

  function displayStats(data) {
    statsCard.textContent = '';
    const stats = data?.stats;
    // console.log(stats);
    const StatContent = stats.map((stat) => {
      const statName = stat?.stat.name;
      const statValue = stat?.base_stat;
      // console.log(statName);
      const statsHTML = `<div style="display: flex; gap:3rem"><span class="stat-name">${statName}</span> <span class="white-width" style="background: white; width:${
        statValue * 4
      }px"> </span> <span class="stat-value">${statValue}</span></div>`;
      return statsHTML;
    });
    statsCard.insertAdjacentHTML('beforeend', StatContent);
    statsCard.classList.add('Content-style');
  }
}
