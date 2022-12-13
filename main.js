let offset = 3;
let maxPokemon = 1;

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

        getPokemonAttributes(respJson);
    }
}

function getPokemonAttributes(pokemon) {
    let content = document.getElementById("content");
    console.log(pokemon);
    console.log(pokemon.types[0].type);
    console.log(pokemon.sprites.other["official-artwork"]["front_default"]);
    content.innerHTML += pokeCardTemp(pokemon);
}