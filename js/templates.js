function pokeCardTemp(pokemon) {
    return `
    <div class="pokeCard grass-box">
        <span>${pokemon.name}</span>
        <div class="pokeTypes">
            <div class="pokeType grass-badge">${pokemon.types[0].type.name}</div>
            <div class="pokeType grass-badge">${pokemon.types[0].type.name}</div>
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