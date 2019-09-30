global.window = global;
global.assert = require('chai').assert;
require('../src/data/pokemon/pokemon.js');
require('../src/data');
require('./data.spec.js');


describe('filterPokeType()', () => {

  const sample = [
    {
      "name": "Squirtle",
      "type": [
        "Water"
      ]

    },
    {
      "name": "Wartortle",
      "type": [
        "Water"
      ]
    }
  ];


  it('Debería ser una función', () => {
    assert.equal(typeof window.pokemon.filterPokeType, 'function');
  });

  it('debería retornar "Squirtle" al buscar tipo "Water"', () => {
    assert.deepEqual(window.pokemon.filterPokeType((sample), 'Water'), [{ "name": "Squirtle", "type": ["Water"] }]);
  });
}),

  describe('filterPokeEgg()', () => {

    const sample = [
      {
        "name": "Ekans",
        "egg": "5 km"

      },
      {
        "name": "Charmander",
        "egg": "2 km"

      },
      {
        "name": "Caterpie",
        "egg": "2 km"
      }
    ];


    it('Debería ser una función', () => {
      assert.equal(typeof window.pokemon.filterPokeEgg, 'function');
    });

    it('debería retornar "Ekans" al buscar huevo de "5 km"', () => {
      assert.deepEqual(window.pokemon.filterPokeEgg((sample), '5 km'), [{ "name": "Ekans", "egg": "5 km" }]);
    });
  }),

  describe('filterPokeWeakness()', () => {

    const sample = [
      {
        "name": "Squirtle",
        "weaknesses": [
          "Electric",
          "Grass"
        ]
  
      },
      {
        "name": "Wartortle",
        "weaknesses": [
          "Electric",
          "Grass"
        ]
      }
    ];


    it('Debería ser una función', () => {
      assert.equal(typeof window.pokemon.filterPokeWeakness, 'function');
    });

    it('debería retornar "Squirtle" al buscar debilidad "Electric"', () => {
      assert.deepEqual(window.pokemon.filterPokeWeakness((sample), 'Electric'), [{
        "name": "Squirtle", "weaknesses": [
          "Electric",
          "Grass"
        ]
      }]);
    });
  })
