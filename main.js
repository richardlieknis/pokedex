let offset = 0;
let maxPokemon = 20;
let allPokemons = [];
let filtredPokemons = [];
let allFetchedPokemons = fetchAllPokemons(true);


async function init(load) {
    maxPokemon += load || 0;
    let pokemons = await fetchAllPokemons();
    loadPokemonArray(pokemons);
}


async function fetchAllPokemons(all) {
    let urlAtt;
    if (all) { urlAtt = `?offset=${offset}&limit=600`; } else urlAtt = `?offset=${offset}&limit=${maxPokemon}`;
    let urlApi = "https://pokeapi.co/api/v2/pokemon";
    let url = `${urlApi}${urlAtt}`;
    let response = await fetch(url);
    let respJson = await response.json();

    return await respJson.results;
}


async function fetchPokemon(url) {
    const URL = url;
    let response = await fetch(URL);
    let respJson = await response.json();
    return respJson;
}


async function loadPokemonArray(pokemons) {

    for (let i = allPokemons.length; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        let response = await fetch(pokemon.url);
        let respJson = await response.json();
        allPokemons.push(respJson);

        renderAllPokemons(i);
    }
}


function renderAllPokemons(id) {
    content.innerHTML += pokeCardTemp(allPokemons[id], id);
    renderTypes(id);

}


function renderTypes(id) {
    for (let i = 0; i < allPokemons[id].types.length; i++) {

        let pokeTypes = document.getElementById(`pokeTypes${id}`);
        pokeTypes.innerHTML += pokeTypeTemp(allPokemons[id], i);
        changeBadgeColor(id, i);
    }
    changeCardColor(id, 0);
}

window.onscroll = () => {
    if ((window.innerHeight + window.scrollY - 95) >= document.body.offsetHeight) {
        init(20);
    }
};


function changeCardColor(id, i) {
    let type = allPokemons[id].types[i].type.name;
    let pokeCard = document.getElementById(`pokeCard${id}`);
    pokeCard.classList.add(`${type}-box`);
}


function changeBadgeColor(id, i) {
    let type = allPokemons[id].types[i].type.name;
    let pokemon = allPokemons[id];
    let badge = document.getElementById(`badge${pokemon.name}${i}`);
    badge.classList.add(`${type}-badge`);
}

//TODO - NÄCHSTES TODO -> FARBEN ANPASSEN!