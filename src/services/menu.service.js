import albumImage from '../assets/images/album.jpg';

export default class MenuModel {
  static getClassics() {
    return [
      {
        id: 1,
        name: 'Vieux Carré',
        ingredients: 'Martell Vsop Cognac // Bulleit rye Whisky // Dom benedictine // Cinzano rosso // Peychauds // Angostura',
        price: '220',
        description: ''
      },
      {
        id: 2,
        name: 'Brooklyn',
        ingredients: 'Bulleit rye whisky // Carpano dry // Doppo teatro amaro // Luxardo maraschino',
        price: '200',
        description: ''
      },
      {
        id: 3,
        name: 'Vesper Martini',
        ingredients: 'Beefeater Gin // Grey goose Vodka // Cocchi Americano',
        price: '190',
        description: ''
      },
      {
        id: 4,
        name: 'Rosita Negroni',
        ingredients: 'Espolon Blanco // Campari // Cinzano rosso // Carpano dry // Angostura // Saline',
        price: '220',
        description: ''
      },
      {
        id: 5,
        name: 'Americano',
        ingredients: 'Campari // Cinzano rosso // Soda',
        price: '180',
        description: ''
      },
      {
        id: 6,
        name: 'Fog Cutter',
        ingredients: 'Bacardi Spiced rum // Martell VSOP Cognac // Bombay Saphire Gin // Lustau Oloroso sherry // Orgeat // Angostura orange // Orange // Lemon',
        price: '220',
        description: ''
      },
      {
        id: 7,
        name: 'Clover Club',
        ingredients: 'Beefeater Gin // Carpano Dry // Raspberry gum // Lemon // Albumin',
        price: '180',
        description: ''
      },
      {
        id: 8,
        name: 'Espresso Martini',
        ingredients: 'Grey Goose Vodka // Kahlua // Espresso',
        price: '180',
        description: ''
      },
      {
        id: 9,
        name: 'Paloma',
        ingredients: 'Espolon Blanco Tequila // Grapefruit // Soda // Lime',
        price: '190',
        description: ''
      },
      {
        id: 10,
        name: '20th Century',
        ingredients: 'Beefeater Gin // Cocchi Americano // Giffard white chocolate // Lemon',
        price: '180',
        description: ''
      }
    ];
  }

  static getSnacks() {
    return [
      {
        id: 1,
        name: 'Seoul Sliders',
        ingredients: '',
        price: '110',
        description: 'Trio bulgogi sliders layered with melted American cheese, fresh kimchi, and house made gochujang aioli. Served with nori shoestring fries. Savory. Tangy. Bold!'
      },
      {
        id: 2,
        name: 'Numb & Crunch',
        ingredients: '',
        price: '75',
        description: 'Battered cauliflower tossed in mala spice, dried chillies, and Szechuan peppercorn. Fiery, tingly, and fun! A plant-based riot that hits sharp and lingers electric.'
      },
      {
        id: 3,
        name: 'Umami Butter Noodle',
        ingredients: '',
        price: '85',
        description: 'Garlic-forward noodle, coated in parmesan cheese and butter. Served with crispy duck skin. Rich. Unapologetically umami. Addictive.'
      },
      {
        id: 4,
        name: 'Brazilian Cheese Bomb',
        ingredients: '',
        price: '75',
        description: 'Chewy Brazilian cheese breads. Crisp outside, chewy and cheesy inside. Dip in garlic sauce for depth or hot honey for a sweet kick. No wrong way, only good ones!'
      },
      {
        id: 5,
        name: 'Vinyl Tinychanga',
        ingredients: '',
        price: '95',
        description: 'Crunchy mini chimichangas packed with bold filling and melted cheese. Finished with sour cream and chipotle aioli for a messy, irresistible bite. Crisp. LOUD. Repeat.'
      },
      {
        id: 6,
        name: 'Dutch Satay Fries',
        ingredients: '',
        price: '65',
        description: 'Crispy fries loaded with peanut sauce, mayo and sharp fresh onion. A Dutch late-night staple reimagined. Rich. Saucy. Dangerous.'
      }
    ];
  }

  static getEchoes() {
    return [
      {
        id: 1,
        title: 'Echoes Collection',
        image: albumImage,
        description: 'Our signature soundscapes and curated vinyl records available for purchase. Experience the analog warmth of our collection, handpicked to complement your night.'
      }
    ];
  }
}
