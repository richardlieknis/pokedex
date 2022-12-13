function pokeCardTemp(pokemon, i) {
    return `
    <div id="pokeCard${i}" class="pokeCard fire-box">
        <span>${pokemon.name} #${i}</span>
        <div class="pokeTypes" id="pokeTypes${i}">
        </div>
        <div class="pokeImg">
            <img src="${pokemon.sprites.other["official-artwork"]["front_default"]}" />
        </div>
        <div class="typeImg">
            <img src="src/img/type_grass.png" />
        </div>
    </div>
  `;
}

function pokeTypeTemp(pokemon, i) {
    return `
      <div class="pokeType grass-badge">${pokemon.types[i].type.name}</div>
  `;
}