const dataPokemon = window.POKEMON;
let selectPokeType = document.getElementById("pokeType");
let selectPokeEgg = document.getElementById("pokeEgg");
let selectPokeOrder = document.getElementById("pokeOrder");
let selectPokeWeakness = document.getElementById("pokeWeakness");
let pokeTypeValue;
let pokeEggValue;
let pokeOrderValue;
let pokeWeaknessValue;

//Se llama a la función mostrar para mostrar todos los pokemon desde que se carga la página
showPokemon(dataPokemon.pokemon);

//FUNCIÓN MOSTRAR
function showPokemon(data) {

    let pokeCard, pokeCardContent, pokeH3, pokeP, pokemonIMG, pokeCardMiddle, pokeCardText, pokeColumn;

    for (let i = 0; i < data.length; i++) {

        //CREA EL DIV COLUMN (en html = <div class="column"></div>)
        pokeColumn = document.createElement("div");
        pokeColumn.setAttribute('class', 'column');

        //CREA EL DIV CARD (en html = <div class="card"></div>)
        pokeCard = document.createElement("div");
        pokeCard.setAttribute('class', 'card');

        //INICIO DIV CARD-CONTENT

        //Crea el div card-content (en html = <div class="card-content"></div>) 
        //que contendrá el número, el nombre e imagen
        pokeCardContent = document.createElement("div");
        pokeCardContent.setAttribute('class', 'card-content');

        //Crea el elemento h3 y p
        pokeH3 = document.createElement("H3");
        pokeP = document.createElement("p");

        //Le asigna a dos variables el texto que deseamos mostrar de la data (número y nombre)
        let pokeH3Text = document.createTextNode(data[i].num);
        let pokePText = document.createTextNode(data[i].name);

        //Indicamos qué texto pertenece al que irá como h3 y como p
        pokeH3.appendChild(pokeH3Text);
        pokeP.appendChild(pokePText);

        //Creamos la imagen y le asignamos el link que se encuentra en la data (en html = <img src="LINK">)
        pokemonIMG = document.createElement("img");
        pokemonIMG.src = data[i].img;

        //Indicamos que es lo que va dentro del div card-content, el h3, p y la imagen
        //(elementos que están descritos anteriormente)
        pokeCardContent.appendChild(pokeH3);
        pokeCardContent.appendChild(pokeP);
        pokeCardContent.appendChild(pokemonIMG);

        //FIN DIV CARD-CONTENT

        //CREA EL DIV MIDDLE (en html = <div class="middle"></div>)
        pokeCardMiddle = document.createElement("div");
        pokeCardMiddle.setAttribute('class', 'middle');

        //INICIO DIV TEXT

        //Crea el div text (en html = <div class="text"></div>) que contendrá los datos del pokemon
        pokeCardText = document.createElement("div");
        pokeCardText.setAttribute('class', 'text');

        //Asignamos a las variables la información de la data que necesitamos mostrar
        let pokeType = document.createTextNode('Tipo: ' + data[i].type);
        let pokeHeight = document.createTextNode('Altura: ' + data[i].height);
        let pokeWeight = document.createTextNode('Peso: ' + data[i].weight);
        let pokeEgg = document.createTextNode('Huevo: ' + data[i].egg);
        let pokeSpawns = document.createTextNode('Promedio de aparición: ' + data[i].avg_spawns);

        //Indicamos que es lo que va dentro del div text, todos los datos previamente guardados
        pokeCardText.appendChild(pokeType);
        pokeCardText.appendChild(document.createElement("br"));
        pokeCardText.appendChild(pokeHeight);
        pokeCardText.appendChild(document.createElement("br"));
        pokeCardText.appendChild(pokeWeight);
        pokeCardText.appendChild(document.createElement("br"));
        pokeCardText.appendChild(pokeEgg);
        pokeCardText.appendChild(document.createElement("br"));
        pokeCardText.appendChild(pokeSpawns);

        //FIN DIV TEXT

        //Indicamos que el div text (hijo) va dentro del div middle (padre)
        pokeCardMiddle.appendChild(pokeCardText);

        //Indicamos que el div middle (hijo) va dentro del div card-content (padre)
        pokeCardContent.appendChild(pokeCardMiddle);

        //Indicamos que el div card-content (hijo) va dentro del div card (padre)
        pokeCard.appendChild(pokeCardContent);

        //Indicamos que el div card (hijo) va dentro del div column (padre)
        pokeColumn.appendChild(pokeCard);

        //Mostramos el div column (que es quien contiene toda la info) 
        //en nuestro div root que se encuentra definido en el html
        document.getElementById("root").appendChild(pokeColumn).innerHTML;

    }
}

//SELECT POR TIPO DE POKEMON
selectPokeType.addEventListener("change", () => {
    document.getElementById("root").innerHTML = "";
    document.getElementById("averagePoke").innerHTML = "";

    //Guarda el value de la selección del usuario en el select
    pokeTypeValue = selectPokeType.value;
    //Le envía al filtro la data y el valor seleccionado por el usuario
    let resultType = window.filterPokeType(dataPokemon, pokeTypeValue);

    //Calcula el promedio de pokemon del tipo seleccionado
    let averageType = ((resultType.length*100)/dataPokemon.pokemon.length);

    //Crea el div que contendrá el dato del promedio
    let divAverage = document.createElement("div");
    divAverage.setAttribute('class', 'average');

    //Texto que estará dentro del div creado
    let pokeType = document.createTextNode('Sabias que un ' + averageType.toFixed(2) + '% de los pokemon son tipo ' + pokeTypeValue);

    //Indica que el texto va dentro del div de clase average
    divAverage.appendChild(pokeType);

    //Indica que el div de clase average debe ser mostrado en el div de id averagePoke creado en el HTML
    document.getElementById("averagePoke").appendChild(divAverage).innerHTML;

    //Llama a la función que muestra a los pokemon enviandole la data ya filtrada
    showPokemon(resultType);
});

selectPokeEgg.addEventListener("change", () => {
    document.getElementById("root").innerHTML = "";
    document.getElementById("averagePoke").innerHTML = "";

    //Guarda el value de la selección del usuario en el select
    pokeEggValue = selectPokeEgg.value;
    //Le envía al filtro la data y el valor seleccionado por el usuario
    let resultEgg = window.filterPokeEgg(dataPokemon, pokeEggValue);

    //Calcula el promedio de pokemon del huevo seleccionado
    let averageEgg = ((resultEgg.length*100)/dataPokemon.pokemon.length);

    //Crea el div que contendrá el dato del promedio
    let divAverage = document.createElement("div");
    divAverage.setAttribute('class', 'average');

    //Texto que estará dentro del div creado
    let pokeEgg = document.createTextNode('Sabias que un ' + averageEgg.toFixed(2) + '% de los pokemon son de huevos de ' + pokeEggValue);

    //Indica que el texto va dentro del div de clase average
    divAverage.appendChild(pokeEgg);

    //Indica que el div de clase average debe ser mostrado en el div de id averagePoke creado en el HTML
    document.getElementById("averagePoke").appendChild(divAverage).innerHTML;
console.log(resultEgg);
    //Llama a la función que muestra a los pokemon enviandole la data ya filtrada
    showPokemon(resultEgg);
});

selectPokeWeakness.addEventListener("change", () => {
    document.getElementById("root").innerHTML = "";
    document.getElementById("averagePoke").innerHTML = "";

    //Guarda el value de la selección del usuario en el select
    pokeWeaknessValue = selectPokeWeakness.value;
    //Le envía al filtro la data y el valor seleccionado por el usuario
    let resultWeakness = window.filterPokeWeakness(dataPokemon, pokeWeaknessValue);
    
    //Calcula el promedio de pokemon de la debilidad seleccionada
    let averageWeakness = ((resultWeakness.length*100)/dataPokemon.pokemon.length);

    //Crea el div que contendrá el dato del promedio
    let divAverage = document.createElement("div");
    divAverage.setAttribute('class', 'average');

    //Texto que estará dentro del div creado
    let pokeWeakness = document.createTextNode('Sabias que un ' + averageWeakness.toFixed(2) + '% de los pokemon son débiles ante los pokemon tipo ' + pokeWeaknessValue);

    //Indica que el texto va dentro del div de clase average
    divAverage.appendChild(pokeWeakness);

    //Indica que el div de clase average debe ser mostrado en el div de id averagePoke creado en el HTML
    document.getElementById("averagePoke").appendChild(divAverage).innerHTML;

    //Llama a la función que muestra a los pokemon enviandole la data ya filtrada
    showPokemon(resultWeakness);
});

selectPokeOrder.addEventListener("change", () => {
    document.getElementById("root").innerHTML = "";
    document.getElementById("averagePoke").innerHTML = "";

    //Guarda el value de la selección del usuario en el select
    pokeOrderValue = selectPokeOrder.value;
    //Le envía al filtro la data y el valor seleccionado por el usuario
    let resultOrder = window.filterPokeOrder(dataPokemon, pokeOrderValue);

    //Llama a la función que muestra a los pokemon enviandole la data ya filtrada
    showPokemon(resultOrder);
});





