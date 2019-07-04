const pokedex = new Pokedex();
const ui = new UI();

// search input
const searchPoke = document.getElementById("searchPoke");
const nextButton = document.querySelector(".next-button");
const prevButton = document.querySelector(".prev-button");

// search input event listener
searchPoke.addEventListener("keyup", e => {
  // document.addEventListener("DOMContentLoaded", e => {
  // get input text
  const pokeText = e.target.value.toLowerCase();
  // const pokeText = "gengar";
  // if input is empty, proceed
  if (pokeText !== "") {
    // make http call
    pokedex.getPoke(pokeText).then(data => {
      // show profile
      ui.renderPoke(data);
    });
  } else {
    //clear profile
    ui.clearEntry();
  }
});

// next button event listener
nextButton.addEventListener("click", () => {
  // store current search text
  const currentPokeText = searchPoke.value.toLowerCase();
  // get current pokemon data
  pokedex.getPoke(currentPokeText).then(data => {
    pokedex.getPoke(data.id + 1).then(data => {
      searchPoke.value = data.name.charAt(0).toUpperCase() + data.name.slice(1);
      // show profile
      ui.renderPoke(data);
    });
  });
});

// next button event listener
prevButton.addEventListener("click", () => {
  // store current search text
  const currentPokeText = searchPoke.value.toLowerCase();
  // get current pokemon data
  pokedex.getPoke(currentPokeText).then(data => {
    pokedex.getPoke(data.id - 1).then(data => {
      searchPoke.value = data.name.charAt(0).toUpperCase() + data.name.slice(1);
      // show profile
      ui.renderPoke(data);
    });
  });
});
