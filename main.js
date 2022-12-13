let offset = 0;
let maxPokemon = 5;


async function init() {
    let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${maxPokemon}`;
    let response = await fetch(url);
    let respJson = await response.json();

    loadPokemonArray(respJson.results);
}

function loadPokemonArray(pokemons) {
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        console.log(pokemon.url);
    }
}