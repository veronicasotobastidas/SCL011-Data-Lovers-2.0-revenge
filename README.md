# Pokémon Go Easy Guide

## **Índice**

* [Preámbulo](#preámbulo)
* [Descripción](#resumen-del-proyecto)
* [Consideraciones generales](#consideraciones-generales)
* [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
* [Parte obligatoria](#parte-obligatoria)
* [Parte opcional](#parte-opcional-hacker-edition)
* [Consideraciones técnicas](#consideraciones-técnicas)
* [Primeros pasos](#primeros-pasos)
* [Contenido de referencia](#contenido-de-referencia)
* [Checklist](#checklist)

***

## Preámbulo

"Pokémon Easy Guide" es una guía fácil, o simple, que contiene información para jugadores de Pokémon Go y está enfocada en los 151 Pókemon de la región de Kanto. En ella se pueden visualizar datos de cada pokemon por peso, altura, huevos o tipo, y también, conocer sus debilidades para prepararlos en futuras batallas Pokemón. 

## Definición de Usuario

El usuario de esta aplicación es una persona de entre los 15 y 30 años, sin distingir genéro. No es jugador experto pero tiene conocimiento acerca de la series de televisión Pókemon y ha instalado la aplicación en su dispositivo móvil. Quiere ganar experiancia en el juego Pókemon Go y para ello necesita conocer datos acerca de los pókemon.

## 2.4 Historias de Usuario

### HU 1
Yo como jugador de Pokemon Go, quiero ver a todos los personajes de la región de Kanto para encontrarlos por su nombre.

### HU2
Yo como jugador de Pokemon Go quiero poder filtrar los pokemon por su tipo para poder ver solo aquellos de mi tipo favorito.

### HU3
Yo como jugador de Pokemon Go quiero poder filtrar por huevo para saber que huevos eclosionar dependiendo de del pokemon que quiero.

### HU4
Yo como jugador de Pokemon Go quiero poder filtrar por debilidad para poder batallar en los gimnasios y ver que pokemon equipar.
 

## Criterios de aceptación y requerimientos DOD

-   Mostrar la lista de todos los pokémons según su número y nombre
-  Ordenar los personajes de A-Z y Z-A, tambien por su número
-   Filtrar los pokémons según su tipo
-   Filtrar los pokémons según huevo
-   Mostrar información más específica, como estadísticas de cada pokémon

## Definición del Producto

### Experiencia

El usuario de esta aplicación ingresará a la página y podrá ver la lista completa de los 151 Pokémons de la región de Kanto, cada tarjeta del pokemon muestra su nombre, número en la pokédex y datos de su peso, altura, huev y promedio de aparición. En una columna de lado derecho se ubican los selectores que permiten al usuario realizar filtros según el tipo de pokemon, huevo o tipo de debilidad. A continuación y debajo de los selectores, cada vez que el usuraio aplica algun filtro en estos, aparecen estadísticas en porcentaje de los pokémon por tipo, huevo y debilidad, kilometros de incubación de huevos y datos de su promedio de aparición. 

### Requerimientos de la Aplicación

-   La información se debe encontrar rapidamente
-   La información debe tener un fácil acceso
-   El usuario tendrá acceso a toda la interacción en la página principal
-   Debe permitir ordenar de forma alfabética
-   Debe permitir realizar búsquedas por tipo
-   Debe mostrar estadísticas

### Planificación 

Se realizó en base a las historias de usuario, estas definicieron el trabajo de cada sección consecutiva en la página.

1.  Abrir la página
2.  Previsualizar la información básica del Pókemon
    >Número - Nombre - Imagen
    
3.  Podrá ver más datos de cada pokemon para conocer información que complementa de sus caracteríticas
    
    > Su tipo original y sub tipos. Altura - Peso - Huevos - Promedio de Aparición en un rango de 10,000
    
4.  Podrá cerrar las busquedas y volver a realizar otra cuando el usuario actualice la página.
5.  Ordenará la búsqueda de manera alfabética ascente y descente
6. Filtrará los pokémons según su tipo
7.  Filtrará los pokémons según su debilidad
8.  Conocerá estadísticas asociadas a su tipo
9.  Conocerá estadísticas asociadas a sus características

#  Diseño

### Mapa de Flujo

### Wireframes

Comenzamos a trabajar en un prototipo de baja fidelidad considerando los niveles de navegación de nuestro mapa de flujo, el diseño fue pensado también como un responsive.

## Decisiones de Diseño

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
### Prototipo Baja Fifelidad