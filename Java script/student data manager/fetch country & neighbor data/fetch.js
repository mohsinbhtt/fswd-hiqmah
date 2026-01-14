var getInfoBtn = document.getElementById('getCountry');
var countryInput = document.querySelector('#country');
var container = document.querySelector('.country');

getInfoBtn.addEventListener('click', function () {
  var countryName = countryInput.value;

  fetch('https://restcountries.com/v3.1/name/' + countryName)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var country = data[0];
      console.log('data:', country);

      var currency;
      var currencyEntries = Object.entries(country.currencies);
      for (var i = 0; i < currencyEntries.length; i++) {
        var c = currencyEntries[i];
        currency = {
          short: c[0],
          name: c[1].name,
          symbol: c[1].symbol,
        };
        console.log(currency);
      }

      var html =
        '<h2>' +
        country.name.official +
        '</h2>' +
        '<img src="' +
        country.flags.png +
        '" alt="' +
        country.flags.alt +
        '" />' +
        '<div class="sub-info">' +
        currency.short +
        ' ' +
        currency.symbol +
        ' ' +
        currency.name;

      var neighborCode = country.borders && country.borders[0];
      if (neighborCode) {
        fetch('https://restcountries.com/v3.1/alpha/' + neighborCode)
          .then(function (res) {
            return res.json();
          })
          .then(function (neighborData) {
            var neighbor = neighborData[0];
            html += '<p>Neighbor: ' + neighbor.name.official + '</p>';
            html +=
              '<img src="' +
              neighbor.flags.png +
              '" alt="' +
              neighbor.flags.alt +
              '" width="100" />';
            html += '</div>';
            container.innerHTML = '';
            container.insertAdjacentHTML('beforeend', html);
          })
          .catch(function (err) {
            console.log('Neighbor fetch error:', err);
          });
      } else {
        html += '<p>No neighbor found.</p></div>';
        container.innerHTML = '';
        container.insertAdjacentHTML('beforeend', html);
      }
    })
    .catch(function (err) {
      console.log('Error:', err);
    });
});
