let offset = 3;
let maxPokemon = 6;
let allPokemons = [];

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
        allPokemons.push(respJson);
        renderAllPokemons(i);
    }
}

function renderAllPokemons(id) {
    let content = document.getElementById("content");
    content.innerHTML += pokeCardTemp(allPokemons[id], id);
    renderTypes(id);

}

function renderTypes(id) {
    for (let i = 0; i < allPokemons[id].types.length; i++) {
        const type = allPokemons[id].types[i];
        console.log(type.type.name);
        let pokeTypes = document.getElementById(`pokeTypes${id}`);
        pokeTypes.innerHTML += pokeTypeTemp(allPokemons[id], i);
    }
}

//TODO - NÄCHSTES TODO -> FARBEN ANPASSEN!