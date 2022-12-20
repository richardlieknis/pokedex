async function fetchAllPokemons(all) {
    const spinner = document.getElementById("spinner");
    spinner.removeAttribute('hidden')
    let urlAtt;
    if (all) { urlAtt = `?offset=${offset}&limit=600`; } else urlAtt = `?offset=${offset}&limit=${maxPokemon}`;
    let urlApi = "https://pokeapi.co/api/v2/pokemon";
    let url = `${urlApi}${urlAtt}`;
    await fetch(url).then(response => response.json())
        .then(data => {
            spinner.setAttribute('hidden', '');
            return data.results;
        });
}

/////////////////////////////////////////////////////////////////////

async function fetchAllPokemons(all) {
    const spinner = document.getElementById("spinner");
    //spinner.removeAttribute('hidden')
    let urlAtt;
    if (all) { urlAtt = `?offset=${offset}&limit=600`; } else urlAtt = `?offset=${offset}&limit=${maxPokemon}`;
    let urlApi = "https://pokeapi.co/api/v2/pokemon";
    let url = `${urlApi}${urlAtt}`;
    let response = await fetch(url);
    let respJson = await response.json();

    return await respJson.results;
}