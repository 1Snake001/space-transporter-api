const Datastore = require('nedb');
const planets = new Datastore({ filename: './db/planet.db', autoload: true });
const spaceship = new Datastore({ filename: './db/spaceship.db', autoload: true });

export { planets, spaceship };
