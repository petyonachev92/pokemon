import "../scss/app.scss";

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=10';

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  fetch(URL).then(resp => resp.json())
  .then(data => {
    data.results.forEach(element => {
      let li = document.createElement('li')
      li.innerText = element.name;
      ul.appendChild(li);
    });
  })
  .catch(err => console.error(err));
});