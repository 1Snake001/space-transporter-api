import * as db from './db';

const planetsCollection = [
  {
    _id: 1,
    name: 'Dagobah',
    population: 1
  },
  {
    _id: 2,
    name: 'Tatooine',
    population: 200_000
  },
  {
    _id: 3,
    name: 'Alderaan',
    population: 2_000_000_000
  },
  {
    _id: 4,
    name: 'Hoth',
    population: 9
  },
];

const theTransporter = {
  _id: 1,
  maxCapacity: 60,
  planetId: 4,
  passengers: 0
};

planetsCollection.forEach(planet => {
  db.planets.insert(planet);
});

db.spaceship.insert(theTransporter);
