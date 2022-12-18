async function filterPokemons() {
    let search = document.getElementById('search').value;
    search = search.toLowerCase();
    searchPokes = [];

    //console.log("EVENT: " + event);
    for (let i = 0; i < allFetchedPokemons.length; i++) {
        const element = allFetchedPokemons[i];
        // Nur allFetc... ändern! Problem: URL für jeden einzelnen 
        // Pokemon muss nochmal gefetcht werden
        if (element.name.includes(search)) {
            searchPokes.push(element);

        }

        //renderSearchPokemon(searchPokes);
    }
    loadPokemonSearch(searchPokes);
}


function renderSearchPokemon(pokemon) {
    content.innerHTML = "";
    for (let i = 0; i < pokemon.length; i++) {
        content.innerHTML += pokeCardTemp(pokemon[i], i);
        renderSearchTypes(pokemon, i);
    }
}

function renderSearchTypes(pokemon, id) {
    for (let i = 0; i < pokemon[id].types.length; i++) {

        let pokeTypes = document.getElementById(`pokeTypes${id}`);
        pokeTypes.innerHTML += pokeTypeTemp(pokemon[id], i);
        searchBadgeColor(id, i);
    }
    searchCardColor(id, 0);
}


function searchCardColor(id, i) {
    let type = searchPokes[id].types[i].type.name;
    let pokeCard = document.getElementById(`pokeCard${id}`);
    pokeCard.classList.add(`${type}-box`);
}


function searchBadgeColor(id, i) {
    let type = searchPokes[id].types[i].type.name;
    let pokemon = searchPokes[id];
    let badge = document.getElementById(`badge${pokemon.name}${i}`);
    badge.classList.add(`${type}-badge`);
}

async function loadPokemonSearch(pokemons) {
    searchPokes = [];

    for (let i = 0; i < 10; i++) {
        const pokemon = pokemons[i];
        let response = await fetch(pokemon.url);
        let respJson = await response.json();
        searchPokes.push(respJson);

        renderSearchPokemon(searchPokes);
    }
}