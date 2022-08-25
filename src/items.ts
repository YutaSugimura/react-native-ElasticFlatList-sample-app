// https://www.pokemon.com/us/pokedex/

const URI = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full';

export const ITEMS = [
  {
    no: '001',
    name: 'Bulbasaur',
    img: URI + '/001.png',
  },
  {
    no: '002',
    name: 'Ivysaur',
    img: URI + '/002.png',
  },
  {
    no: '003',
    name: 'Venusaur',
    img: URI + '/003.png',
  },
  {
    no: '004',
    name: 'Charmander',
    img: URI + '/004.png',
  },
  {
    no: '005',
    name: 'Charmeleon',
    img: URI + '/005.png',
  },
  {
    no: '006',
    name: 'Charizard',
    img: URI + '/006.png',
  },
  {
    no: '007',
    name: 'Squirtle',
    img: URI + '/007.png',
  },
  {
    no: '008',
    name: 'Wartortle',
    img: URI + '/008.png',
  },
  {
    no: '009',
    name: 'Blastoise',
    img: URI + '/009.png',
  },
];

export type Item = typeof ITEMS[number];
