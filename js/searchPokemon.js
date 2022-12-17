async function filterPokemons() {
    let search = document.getElementById('search').value;
    search = search.toLowerCase();
    let fetched = await allFetchedPokemons;

    for (let i = 0; i < fetched.length; i++) {
        content.innerHTML = "";
        const pokemon = fetched[i];

        if (pokemon.name.includes(search)) {
            console.log(pokemon.name.includes(search));
            let fetchedPokemon = await fetchPokemon(pokemon.url);
            renderSearchPokemon(fetchedPokemon, i);
        }
    }

    //NOTE - Probelmstellung: Es wird immer nur der letzte geladene angezeigt. Wenn überhaupt.
}


function renderSearchPokemon(pokemon, id) {
    //console.log(pokemon);
    content.innerHTML += pokeCardTemp(pokemon, id)
}