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
  {
    no: '010',
    name: 'Caterpie',
    img: URI + '/010.png',
  },
  {
    no: '011',
    name: 'Metapod',
    img: URI + '/011.png',
  },
  {
    no: '012',
    name: 'Butterfree',
    img: URI + '/012.png',
  },
  {
    no: '013',
    name: 'Weedle',
    img: URI + '/013.png',
  },
  {
    no: '014',
    name: 'Kakuna',
    img: URI + '/014.png',
  },
  {
    no: '015',
    name: 'Beedrill',
    img: URI + '/015.png',
  },
  {
    no: '016',
    name: 'Pidgey',
    img: URI + '/016.png',
  },
  {
    no: '017',
    name: 'Pidgeotto',
    img: URI + '/017.png',
  },
  {
    no: '018',
    name: 'Pidgeot',
    img: URI + '/018.png',
  },
];

export type Item = typeof ITEMS[number];
