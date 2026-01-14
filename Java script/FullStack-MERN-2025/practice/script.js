const getInfoBtn = document.getElementById('getCountry');
const countryInput = document.querySelector('#country');
const container = document.querySelector('.country');

getInfoBtn.addEventListener('click', () => {
  const countryName = countryInput.value;
  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((res) => {
      res.json().then((data) => {
        // console.log('data:', data?.[0]);
        const country = data?.[0];
        let currency;
        for (const c of Object.entries(country.currencies)) {
          currency = {
            short: c[0],
            ...c[1],
          };
          console.log(currency);
        }

        //// neighbor country
        const neighborCode = country.borders?.[0];
        fetch(`https://restcountries.com/v3.1/alpha/${neighborCode}`).then(
          (neighbour) => {
            neighbour.json().then(neighbourData);
            const neighborCountry = neighbourData?.[0];
            let neighborCurrency;
            for (const c of Object.entries(neighborCountry.currencies)) {
              neighborCurrency = { short: c[0], ...c[1] };
            }
          }
        );
        // const html = `
        // <h2>${country?.name?.official}</h2>
        // <img src=${country?.flags?.png} alt=${country?.flags?.alt} />
        // <div class='sub-info'>
        // ${currency?.short}
        // ${currency?.symbol}
        // ${currency?.name}
        // <h2>${neighborCountry?.name?.official}</h2>
        // <img src=${neighborCountry?.flags?.png} alt=${neighborCountry?.flags?.alt} />
        // ${neighborCurrency?.short}
        // ${neighborCurrency?.symbol}
        // ${neighborCurrency?.name}

        // </div>      `;

        // container.insertAdjacentHTML('beforeend', html);
      });
    })

    .catch((err) => console.log(err));
});
