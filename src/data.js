//FILTRO PARA ORDENAR POR LETRA O NÚMERO
//Le llegan como parametros la data y el orden que seleccionó el usuario
const filterPokeOrder = (dataPokemon, order) => {
    let namePokemonOrder;
    //Si el usuario selecciona el orden por letra de forma ascendente
    if(order === "ascendantAZ"){
        //Utiliza sort para ir ordenando tomando el nombre de cada pokemon para ir comparando
        namePokemonOrder = dataPokemon.sort((a,b) => {
            //Si el nombre del primer pokemon es mayor, o sea va antes, que el segundo pokemon retorna un 1
            //quiere decir que el primer pokemon si va antes que el segundo
            //esto lo hace con todos los nombres de la data
            if(a.name > b.name){
                return 1;
            }
        });
    }
    //Si el usuario selecciona el orden por letra de forma descendente
    if(order === "descendantZA"){
        //Utiliza sort para ir ordenando tomando el nombre de cada pokemon para ir comparando
        namePokemonOrder = dataPokemon.sort((a,b) => {
            //Si el nombre del primer pokemon es menor, o sea va después, que el segundo pokemon retorna un 1
            //quiere decir que el primer pokemon si va después que el segundo
            //esto lo hace con todos los nombres de la data
            if(a.name < b.name){
                return 1;
            }
        });
    }
    //Si el usuario selecciona el orden por número de forma ascendente
    if(order == "ascendantNumber"){
        //Utiliza sort para ordenar tomando el número de cada pokemon
        namePokemonOrder = dataPokemon.sort((a,b) => {
            //Si la resta es negativa quiere decir que el primer número es menor al segundo, por ende va primero
            return (a.id-b.id);
        });
    }
    //Si el usuario selecciona el orden por número de forma descendente
    if(order == "descendantNumber"){
        //Utiliza sort para ordenar tomando el número de cada pokemon
        namePokemonOrder = dataPokemon.sort((a,b) => {
            //Si la resta es negativa quiere decir que el segundo número es menor al primero, por ende va primero
            return (b.id-a.id);
        });
    }
    return namePokemonOrder;
};

window.filterPokeOrder = filterPokeOrder;

//FILTRO POR TIPO
//Le llegan como parametros la data y el tipo que seleccionó el usuario
const filterPokeType = (dataPokemon, selection) => {
    //Consulta si dentro del tipo de cada pokemon se encuentra el seleccionado por el usuario y lo retorna
    let filterType = dataPokemon.filter(element => {
        return element.type.includes(selection);
    });
    return filterType;
};

window.filterPokeType = filterPokeType;

//FILTRO POR HUEVO
//Le llegan como parametros la data y el huevo que seleccionó el usuario
const filterPokeEgg = (dataPokemon, eggKM) => {
    //Consulta si el huevo de cada pokemon es el mismo que el seleccionado por el usuario y lo retorna
    let FilterEgg = dataPokemon.filter(element => {
        return element.egg.includes(eggKM);
    });
    return FilterEgg;
};

window.filterPokeEgg = filterPokeEgg;

//FILTRO POR DEBILIDAD
//Le llegan como parametros la data y la debilidad que seleccionó el usuario
const filterPokeWeakness = (dataPokemon, weakness) => {
    //Consulta si dentro de la debilidad de cada pokemon se encuentra el seleccionado por el usuario y lo retorna
    let filterWeakness = dataPokemon.filter(element => {
        return element.weaknesses.includes(weakness);
    });
    return filterWeakness;
};

window.filterPokeWeakness = filterPokeWeakness;


