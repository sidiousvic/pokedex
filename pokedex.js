class Pokedex {
  constructor() {}

  async getPoke(user) {
    const pokeResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${user}/`
    );

    const poke = await pokeResponse.text();
    return JSON.parse(poke);
  }
}
