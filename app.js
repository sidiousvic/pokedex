const pokedex = new Pokedex();
const ui = new UI();

// search input
const searchPoke = document.getElementById("searchPoke");

// search input event listener
// searchPoke.addEventListener("keyup", e => {
document.addEventListener("DOMContentLoaded", e => {
  // get input text
  // const pokeText = e.target.value.toLowerCase();
  const pokeText = "gengar";
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
