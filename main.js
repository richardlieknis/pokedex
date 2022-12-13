let offset = 0;
let maxPokemon = 10;

async function init() {
    let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${maxPokemon}`;
    let response = await fetch(url);
    let respJson = await response.json();

    loadPokemonArray(respJson.results);
}

async function loadPokemonArray(pokemons) {
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        let response = await fetch(pokemon.url);
        let respJson = await response.json();

        console.log(respJson.name);
    }
}