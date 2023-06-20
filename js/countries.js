const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountry(data));
};
const displayCountry = (countries) => {
  // for (const country of countries) {
  // console.log(country)}
  const countriesContainer = document.getElementById("all_countries");
  countries.forEach((country) => {
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    countryDiv.innerHTML = `
    <h2>Name : ${country.name.common} </h2>
    <h4>Capital City : ${
      country.capital ? country.capital[0] : "no Capital"
    } </h4>
    <button onclick="loadCountryDetails('${
      country.cca2
    }')" class="details">Show Flag</button>
    `;
    countriesContainer.appendChild(countryDiv);
  });
};
const loadCountryDetails = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showCountryDetails(data[0]));
};

const showCountryDetails = (country) => {
  const detailContainer = document.getElementById("country_details");
  detailContainer.innerHTML = `
  <h1>Name : ${country.name.common}</h1>
<img src="${country.flags.png}">
  
  `;
};

loadCountries();
