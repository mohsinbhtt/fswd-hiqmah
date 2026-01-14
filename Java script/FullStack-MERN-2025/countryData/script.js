const inputCountry = document.getElementById('input-country');
const submitBtn = document.getElementById('btn');
const countryInfo = document.querySelector('.country-details');
const baseURL = 'https://restcountries.com/v3.1';

submitBtn.addEventListener('click', () => {
  countryInfo.innerHTML = '';
  countryInfo.classList.add('bg');
  countryData();
});

async function countryData() {
  try {
    const countryName = inputCountry.value;
    if (!countryName) return alert('Please enter country');
    const res = await fetch(`${baseURL}/name/${countryName}`);
    if (!res.ok) {
      throw Error(`request failed with Status ${res.status}`);
    }
    // console.log(res);
    const Data = await res.json();
    console.log(Data);
    const country = Data?.[0];
    let currency;
    for (const c of Object.entries(country.currencies)) {
      currency = {
        short: c[0],
        ...c[1],
      };
      //   console.log(currency);
    }
    const countryInfoHTML = countryDetails(country, currency);
    countryInfo.insertAdjacentHTML('beforeend', countryInfoHTML);

    // neighbor Country

    const neighborCode = country.borders?.[0];
    if (!neighborCode) {
      countryInfo.append(noNeighbor());
    } else {
      countryInfo.append(neighborText());

      fetch(`https://restcountries.com/v3.1/alpha/${neighborCode}`).then(
        (neighborRes) => {
          neighborRes.json().then((neighborData) => {
            const neighborCountry = neighborData?.[0];
            let neighborCurrency;
            for (const c of Object.entries(neighborCountry.currencies)) {
              neighborCurrency = { short: c[0], ...c[1] };
            }

            const NeighborCountryInfoHTML = countryDetails(
              neighborCountry,
              neighborCurrency
            );
            countryInfo.insertAdjacentHTML(
              'beforeend',
              NeighborCountryInfoHTML
            );
          });
        }
      );
    }
  } catch (error) {
    console.error(error);
  }
}
function neighborText() {
  const newDiv = document.createElement('div');
  newDiv.textContent = ' Neighbor Country';
  newDiv.classList.add('neighbor-text');
  //   NeighborCountryInfoHTML.prepend(newDiv);
  return newDiv;
}
function noNeighbor() {
  const neighborNotExit = document.createElement('div');
  neighborNotExit.textContent = 'This Country does not have a neighbor';
  neighborNotExit.classList.add('neighbor-text');
  return neighborNotExit;
}
function countryDetails(country, currency) {
  const populationNumber = country?.population;
  const populationInMillions = populationNumber / 1000000;
  const PopulationRoundOf = Math.round(populationInMillions * 100) / 100;
  return ` <h2>${country?.name?.official}</h2>
    <img src=${country?.flags?.png} alt=${country?.flags?.alt} />  
    <div class='sub-info'> 
    Currency: ${currency?.short},</br>
    Symbol:${currency?.symbol},</br>
    Name:${currency?.name} ,
    Population:${PopulationRoundOf}M
    </div>  `;
}
