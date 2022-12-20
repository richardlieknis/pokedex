let offset = 0;
let maxPokemon = 20;
let allPokemons = [];
let filtredPokemons = [];
let searchPokes = [];
let allFetchedPokemons;
let isLoading = false;


async function init(load) {
    isLoading = true;
    maxPokemon += load || 0; // Wenn load = null -> 0
    let pokemons = await fetchAllPokemons();
    allFetchedPokemons = await fetchAllPokemons(true);
    await loadPokemonArray(pokemons);
    isLoading = false;
}


async function fetchAllPokemons(all) {
    //const spinner = document.getElementById("spinner");
    //spinner.removeAttribute('hidden')
    let urlAtt;
    if (all) { urlAtt = `?offset=${offset}&limit=800`; } else urlAtt = `?offset=${offset}&limit=${maxPokemon}`;
    let urlApi = "https://pokeapi.co/api/v2/pokemon";
    let url = `${urlApi}${urlAtt}`;
    let response = await fetch(url);
    let respJson = await response.json();

    return await respJson.results;
}


async function fetchPokemon(url) {
    //const spinner = document.getElementById("spinner");
    //spinner.removeAttribute('hidden');
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


async function renderAllPokemons(id) {
    content.innerHTML += pokeCardTemp(allPokemons[id], id);
    renderTypes(id);
    isLoaded = true;
}


function renderTypes(id) {
    for (let i = 0; i < allPokemons[id].types.length; i++) {

        let pokeTypes = document.getElementById(`pokeTypes${id}`);
        pokeTypes.innerHTML += pokeTypeTemp(allPokemons[id], i);
        changeBadgeColor(id, i);
    }
    changeCardColor(id, 0);
}

function closeOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.classList.add("d-none");
}

function dontClose(event) {
    event.stopPropagation();
}


async function openPokemonOverlay(id, bool) {
    const overlay = document.getElementById("overlay");
    try {
        let pokemon = await fetchPokemon(allFetchedPokemons[id].url);
        overlay.classList.remove("d-none");
        overlay.innerHTML = "";
        overlay.innerHTML = currentPokemonTemp(pokemon, id);

        changeOverlayColor(id, pokemon);
        const overlayCard = document.getElementById('currentBox');
        overlayCard.classList.add('transToMid');
        showChartStats(pokemon);
    } catch (e) {}
}

window.onscroll = async() => {
    if (((window.innerHeight + window.scrollY - 95) >= document.body.offsetHeight) && !isLoading) {
        await init(10);
    }
};


function changeOverlayColor(id, pokemon) {
    let type = pokemon.types[0].type.name;
    let currentBox = document.getElementById("currentBox");
    currentBox.classList.add(`${type}-box`)
}


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