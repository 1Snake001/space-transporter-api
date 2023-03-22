import { spaceship } from '../db';

export default class SpaceshipRepository {
  static getTheShip() {
    return new Promise((resolve, reject) => {
      spaceship.findOne({_id: 1}, (err, spaceship) => {
        if (err) reject(err);
        resolve(spaceship);
      });
    });
  }

  static move(spaceshipId, planetId) {
    return new Promise((resolve, reject) => {
      spaceship.update({ _id: spaceshipId}, { $set: {planetId}}, {}, (err, numAffected) => {
        if (err) reject(err);
        resolve(numAffected);
      });
    });
  }

  static addPeople(spaceshipId, count) {
    return new Promise((resolve, reject) => {
      spaceship.update({ _id: spaceshipId}, { $inc: {passengers: count}}, {}, (err, numAffected) => {
        if (err) reject(err);
        resolve(numAffected);
      });
    });
  }

  static removePeople(spaceshipId, count) {
    return new Promise((resolve, reject) => {
      spaceship.update({ _id: spaceshipId}, { $inc: {passengers: -count}}, {}, (err, numAffected) => {
        if (err) reject(err);
        resolve(numAffected);
      });
    });
  }
}
