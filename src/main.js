const dataPokemon = POKEMON;
window.dataPokemon = dataPokemon;

const rootContainer = document.getElementById("root");
let selectPokeType = document.getElementById("pokeType");
let selectPokeEgg = document.getElementById("pokeEgg");
let selectPokeOrder = document.getElementById("pokeOrder");
let selectPokeWeakness = document.getElementById("pokeWeakness");
let pokeTypeValue, pokeEggValue, pokeOrderValue, pokeWeaknessValue;

showPokemon(dataPokemon.pokemon);

function showPokemon(data){
    let pokemonIMG;
    for (i = 0; i<data.length; i++) {
        pokemonIMG = document.createElement("img");
        pokemonIMG.src = data[i].img;

        //console.log(data[i].img);    

        document.getElementById("root").appendChild(pokemonIMG).innerHTML;
    }
}

selectPokeType.addEventListener("change", () => {
    document.getElementById("root").innerHTML = "";
    pokeTypeValue = selectPokeType.value;
    let resultType = window.filterPokeType(dataPokemon, pokeTypeValue);

    showPokemon(resultType);

});

selectPokeEgg.addEventListener("change", () => {
    document.getElementById("root").innerHTML = "";
    pokeEggValue = selectPokeEgg.value;
    let resultEgg = window.filterPokeEgg(dataPokemon, pokeEggValue);

    showPokemon(resultEgg);
});

selectPokeOrder.addEventListener("change", () => {
    document.getElementById("root").innerHTML = "";
    pokeOrderValue = selectPokeOrder.value;
    let resultOrder = window.filterPokeOrder(dataPokemon, pokeOrderValue);

    showPokemon(resultOrder);
});

selectPokeWeakness.addEventListener("change", () => {
    document.getElementById("root").innerHTML = "";
    pokeWeaknessValue = selectPokeWeakness.value;
    let resultWeakness = window.filterPokeWeakness(dataPokemon, pokeWeaknessValue);
    
    showPokemon(resultWeakness);
});


