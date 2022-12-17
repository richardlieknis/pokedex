let offset = 31;
let maxPokemon = 9;
let allPokemons = [];
let urlAtt = `?offset=${offset}&limit=${maxPokemon}`;
let urlApi = "https://pokeapi.co/api/v2/pokemon";

let test;

async function fetchPokemons() {
    let url = `${urlApi}${urlAtt}`;
    let response = await fetch(url);
    let respJson = await response.json();

    return await respJson.results;
}

async function init() {
    let pokemons = await fetchPokemons();
    loadPokemonArray(pokemons);
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

function filterPokemons() {
    let search = document.getElementById('search').value;
    search = search.toLowerCase();
    for (let i = 0; i < allPokemons.length; i++) {
        const pokemon = allPokemons[i];
        if (pokemon.name.includes(search)) {
            console.log("GIBTS");
        }
        //NOTE - Problemstellung: Filter Funktion funktioniert 
        //in diesem Fall nur auf bereits geladene Pokemons.
    }
}


function renderAllPokemons(id) {
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