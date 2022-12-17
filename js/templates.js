function pokeCardTemp(pokemon, i) {
    return `
    <div id="pokeCard${i}" class="pokeCard">
    
        <span>${pokemon.name} #${i}</span>
        <div class="pokeTypes" id="pokeTypes${i}">
        </div>
        <div class="pokeImg">
            <img src="${pokemon.sprites.other["official-artwork"]["front_default"]}" />
        </div>
        <div class="typeImg">
            <img src="src/img/types/type_${pokemon.types[0].type.name}.png" />
        </div>
    </div>
  `;
}

function pokeTypeTemp(pokemon, i) {
    return `
      <div id="badge${pokemon.name}${i}" class="pokeType">${pokemon.types[i].type.name}</div>
  `;
}