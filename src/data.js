const filterPokeOrder = (dataPokemon, order) => {
    let namePokemonOrder;

    if(order == "ascendantAZ"){
        namePokemonOrder = dataPokemon.pokemon.sort((a,b) => {
            if(a.name > b.name){
                return 1;
            }
        });
    }
    if(order == "descendantZA"){
        namePokemonOrder = dataPokemon.pokemon.sort((a,b) => {
            if(a.name < b.name){
                return 1;
            }
        });
    }
    if(order == "ascendantNumber"){
        namePokemonOrder = dataPokemon.pokemon.sort((a,b) => {
            return (a.id-b.id);
        });
    }
    if(order == "descendantNumber"){
        namePokemonOrder = dataPokemon.pokemon.sort((a,b) => {
            return (b.id-a.id);
        });
    }
    return namePokemonOrder;
};

window.filterPokeOrder = filterPokeOrder;

const filterPokeType = (dataPokemon, selection) => {
    let resultFilterType = dataPokemon.pokemon.filter(element => {
        return element.type.includes(selection);
    });
    return resultFilterType;
};

window.filterPokeType = filterPokeType;


const filterPokeEgg = (dataPokemon, eggKM) => {
    let resultFilterEgg = dataPokemon.pokemon.filter(element => {
        return element.egg.includes(eggKM);
    });
    return resultFilterEgg;
};

window.filterPokeEgg = filterPokeEgg;

const filterPokeWeakness = (dataPokemon, weakness) => {
    let resultFilterWeakness = dataPokemon.pokemon.filter(element => {
        return element.weaknesses.includes(weakness);
    });
    return resultFilterWeakness;
};

window.filterPokeWeakness = filterPokeWeakness;


