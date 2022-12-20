function pokeCardTemp(pokemon, i) {
    return `
    <div id="pokeCard${i}" class="pokeCard" onclick="openPokemonOverlay(${pokemon.id-1})">
        <div class="cardHeader">
                <span>${pokemon.name} </span>
                <span style="font-size: 12px">#${pokemon.id}</span>
        </div>
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

function currentPokemonTemp(pokemon, i) {
    return `
            <div id="currentBox" class="currentBox" onclick="dontClose(event)">
                <div class="cardHeader">
                    <span>${pokemon.name} </span>
                    <span style="font-size: 12px">#${pokemon.id}</span>
                </div>

                <div class="cardType">
                    <div class="${pokemon.types[0].type.name}-badge pokeType">${pokemon.types[0].type.name}</div>
                </div>

                <div class="pokeTypes" id="pokeTypes${i}"></div>

                <div class="pokeImg">
                    <img src="${pokemon.sprites.other["official-artwork"]["front_default"]}" />
                </div>

                <div class="navBtns">
                    <div onclick="openPokemonOverlay(${pokemon.id-2})">
                        <img src="src/img/navBtn.png">
                    </div>
                    <div onclick="openPokemonOverlay(${pokemon.id+1})">
                        <img src="src/img/navBtn.png" style="transform: scaleX(-1)">
                    </div>
                </div>

                <div class="typeImg">
                    <img src="src/img/types/type_${pokemon.types[0].type.name}.png" />
                </div>

                <div class="infoBox">
                    <div class="iHeader">
                        <span>Stats</span>
                        <span>Moves</span>
                    </div>
                    
                    <div id="infos">
                    <span>Abilities</span>
                        <canvas id="myChart" width="200px" height="80px"></canvas>
                    </div>



                </div>
            </div>
    `;
}