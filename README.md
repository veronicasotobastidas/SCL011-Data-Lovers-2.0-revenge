# Pokémon Go Easy Guide

## **Índice**

*  [Preámbulo](#preámbulo)

*  [Definición de Usuario](#definicion-de-usuario)

*  [Historias de Usuario](#historias-de-usuario)

*  [Criterios de aceptación](#criterios-de-aceptacion)

*  [Definición del Producto](#definicion-del-producto)

*  [Diseño](#diseno)

*  [Decisiones de Diseño](#decisiones-de-Diseño)

*  [Producto Final](#producto-final)

  
***

## Preámbulo

"Pokémon Easy Guide" es una guía fácil, o simple, que contiene información para jugadores de Pokémon Go y está enfocada en los 151 Pókemon de la región de Kanto. En ella se pueden visualizar datos de cada pokemon por peso, altura, huevos o tipo, y también, conocer sus debilidades para prepararlos en futuras batallas Pokemón. 

## Definición de Usuario

El usuario de esta aplicación es una persona de entre los 15 y 30 años, sin distingir genéro. No es jugador experto pero tiene conocimiento acerca de la serie de televisión "Pókemon" y ha instalado la aplicación Pokemon GO en su dispositivo móvil. Quiere ganar experiancia en el juego y para ello necesita conocer datos acerca de estos.

### Investigación del Usuario

Se relizaron entrevistas a usuarios del juego donde en mayoria se trataba de usuarios nuevos o que han empezado a jugar tardiamente. La mayoria, entre 15 y 25 años, conocen Pokemon y Pokemon GO pero solo información en general. Un porcentaje pequeño, entre 25 y 30 años, juega por nostalgia. Usa aplicaciones o visita páginas web para conocer estadísticas de los Pokémon e investiga por su cuenta. Desea llegar a nivel en el juego de 30 o 40.

## Historias de Usuario

### HU 1
Yo como jugador de Pokemon Go, quiero ver a todos los personajes de la región de Kanto, para encontrarlos por su nombre.

### HU2
Yo como jugador de Pokemon Go, quiero poder filtrar los pokemon por su tipo, para poder ver solo aquellos de mi tipo favorito.

### HU3
Yo como jugador de Pokemon Go, quiero poder filtrar por huevo, para saber que huevos eclosionar dependiendo de del pokemon que quiero.

### HU4
Yo como jugador de Pokemon Go, quiero poder filtrar por debilidad, para poder batallar en los gimnasios y ver que pokemon equipar.
 

## Criterios de aceptación y requerimientos DOD

-   Mostrar la lista de todos los pokémons según su número y nombre
-   Ordenar los personajes de A-Z y Z-A, también por su número de Pokedex
-   Filtrar los pokemon según su tipo
-   Filtrar los pokemon según huevo
-   Mostrar información más específica, como estadísticas de cada pokémon


## Definición del Producto

### Experiencia

El usuario de esta aplicación ingresará a la página y podrá ver la lista completa de los 151 Pokémons de la región de Kanto, cada tarjeta del pokemon muestra su nombre, número en la pokedex y datos de su peso, altura, huevo y promedio de aparición. En una columna ubicada al lado derecho, se muestran los selectores que permiten al usuario realizar filtros según el tipo de pokemon, huevo o tipo de debilidad. A continuación y debajo de los selectores, cada vez que el usuraio aplica algun filtro en estos, aparecen estadísticas en porcentaje de los pokémon por tipo, huevo y debilidad, kilometros de incubación de huevos y datos de su promedio de aparición. 

### Requerimientos de la Aplicación

-   Los datos deben encontrarse rapidamente
-   Los datos deben tener un acceso claro y fácil
-   El usuario tendrá acceso a toda la interación en la página principal
-   Debe permitir ordenar de forma alfabética y por número.
-   Debe permitir realizar búsquedas por tipo
-   Debe mostrar estadísticas


### Planificación 

Esta se realizó en base a las historias de usuario y definicieron el trabajo de cada sección consecutiva en la página.

1.  Abrir la página
2.  Previsualizar la información básica del Pókemon
    >Número - Nombre - Imagen
    
3.  Podrá ver más datos de cada pokemon para conocer información que complementa de sus caracteríticas
    
    > Su tipo original y sub tipos. Altura - Peso - Huevos - Promedio de Aparición en un rango de 10,000
    
4.  Podrá cerrar las busquedas y volver a realizar otra cuando el usuario actualice la página.
5.  Ordenará la búsqueda de manera alfabética ascente y descente
6.  Filtrará los pokemon según su tipo
7.  Filtrará los pokemon según su debilidad
8.  Conocerá estadísticas asociadas a su tipo
9.  Conocerá estadísticas asociadas a sus características

##  Diseño

### Control de Flujo
```text
.
├── package.json
├── Página Principal
│   ├── Filtro Alfabético y Numérico
│   │   ├── A-Z
│   │   ├── Z-A
│   │   ├── 1-151
│   │   ├── 151- 1
│   ├── Filtro por Tipo
│   │   ├── Agua  Normal
│   │   ├── Bicho
│   │   ├── Dragón
│   │   ├── Eléctrico
│   │   ├── Fantasma
│   │   ├── Fuego
│   │   ├── Hielo
│   │   ├── Lucha
│   │   ├── Normal
│   │   ├── Planta
│   │   ├── Psíquico
│   │   ├── Roca
│   │   ├── tierra
│   │   ├── Veneno
│   │   ├── Volador
│   ├─ Filtro por Huevos
│   │       ├── 2km
│   │       ├── 5km
│   │       ├── 10km
│   │       ├── No en huevos
│   ├── Filtro por Debilidades
│   │   ├── Agua  Normal
│   │   ├── Bicho
│   │   ├── Dragón
│   │   ├── Eléctrico
│   │   ├── Fantasma
│   │   ├── Fuego
│   │   ├── Hielo
│   │   ├── Lucha
│   │   ├── Normal
│   │   ├── Planta
│   │   ├── Psíquico
│   │   ├── Roca
│   │   ├── tierra
│   │   ├── Veneno
│   │   ├── Volador
│   ├── Calculo - Estadisticas

```

### Prototipo Baja Fifelidad 📝

![Prototipo Sketch](https://raw.githubusercontent.com/veronicasotobastidas/SCL011-Data-Lovers-2.0-revenge/master/src/img/ProtoipoBajaFidelidad.jpg)


## Decisiones de Diseño

### Paleta de color 🎨

La paleta de color fue definida en el prototipo de alta fidelidad, se usan colores claros basados en el amarillo que caracterizan a personajes de Pokemon. en combinarción con blancos y grises para no distraer al usuario del objetivo principal que es mostrar la imagen de cada Pokemon.

![](https://raw.githubusercontent.com/veronicasotobastidas/SCL011-Data-Lovers-2.0-revenge/master/src/img/palette.jpg)


### Tipografía

La tipografía elegida para este proyecto es Rubik 🖌

![](https://raw.githubusercontent.com/veronicasotobastidas/SCL011-Data-Lovers-2.0-revenge/master/src/img/TipografiaRubik.jpg)


### Prototipo Alta Fidelidad 👍

![Esquemaen Prototipo de Alta Fidelidad](https://raw.githubusercontent.com/veronicasotobastidas/SCL011-Data-Lovers-2.0-revenge/master/src/img/ProtoipoAltaFidelidad.jpg)


### Testeo de Usabilidad en protoripo interactivo

Puedes revisarlo en 👉  [Test Usabilidad Prototipo en Loom](https://www.loom.com/share/8de01bce3d8f440c99204241df9e5775) 


## Producto Final

Finalmente, luego de algunos cambios sugeridos en el feedback con compañeras y usuarios, en el Producto Final se le permite a este ver en la pagina de inicio los 151 pokemon de la region Kanto, y obtener información de las caracteristicas de altura, peso, huevos y promedio de aparición del pokemon interacctuando con cada imagen de los pokemon (pasando elpuntero delmouse por sobre cada imagen). En una lista de selectores ordenarlos alfabéticamente y por su número en la pokedex, filtrar pokemon por tipo, huevo y debilidad. Además de ver estadisticas que se muestran en la medida que el usuario va ingresando sus opciones.

![Esquemaen Vista Producto Final](https://raw.githubusercontent.com/veronicasotobastidas/SCL011-Data-Lovers-2.0-revenge/master/src/img/ProductoFinal1.png)

Para ver y probar el resultado funcionando puedes ingresar 👉 [aquí](https://veronicasotobastidas.github.io/SCL011-Data-Lovers-2.0-revenge/src/index.html)


***
2019. Laboratoria SCL011.
