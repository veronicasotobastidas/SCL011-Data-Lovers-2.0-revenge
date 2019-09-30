global.window = global;
global.assert = require('chai').assert;
require('../src/data/pokemon/pokemon.js');
require('../src/data');
require('./data.spec.js');


describe('filterPokeType()', () => {

  const sample1 = [
    {
      "name": "Squirtle",
      "type": [
        "Water"
      ]

    },
    {
      "name": "Charmander",
      "type": [
        "Fire"
      ]
    }
  ];


  it('Debería ser una función', () => {
    assert.equal(typeof window.filterPokeType, 'function');
  });

  it('debería retornar "Squirtle" al buscar tipo "Water"', () => {
    assert.deepEqual(window.filterPokeType(sample1, "Water"), [{ "name": "Squirtle", "type": ["Water"] }]);
  });
}),

  describe('filterPokeEgg()', () => {

    const sample1 = [
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
      assert.equal(typeof window.filterPokeEgg, 'function');
    });

    it('debería retornar "Ekans" al buscar huevo de "5 km"', () => {
      assert.deepEqual(window.filterPokeEgg(sample1, '5 km'), [{ "name": "Ekans", "egg": "5 km" }]);
    });
  }),

  describe('filterPokeWeakness()', () => {

    const sample1 = [
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
      assert.equal(typeof window.filterPokeWeakness, 'function');
    });

    it('debería retornar "Squirtle" al buscar debilidad "Electric"', () => {
      assert.deepEqual(window.filterPokeWeakness(sample1, 'Electric'), [{
        "name": "Squirtle", "weaknesses": [
          "Electric",
          "Grass"
        ]
      }]);
    });
  })
