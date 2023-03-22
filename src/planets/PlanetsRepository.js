import { planets } from "../db";

export default class PlanetsRepository {
  static getAll() {
    return new Promise((resolve, reject) => {
      planets.find({}, (err, planets) => {
        if (err) reject(err);
        resolve(planets);
      });
    });
  }

  static get(planetId) {
    return new Promise((resolve, reject) => {
      planets.findOne({ _id: planetId}, (err, planet) => {
        if(err) reject(err);
        resolve(planet);
      });
    });
  }

  static removePeople(planetId, count) {
    return new Promise((resolve, reject) => {
      planets.update({_id: planetId}, {$inc : {population: -count } }, {}, (err, numReplaced) => {
        if(err) reject(err);
        resolve(numReplaced);
      });
    });
  }

  static addPeople(planetId, count) {
    return new Promise((resolve, reject) => {
      planets.update({_id: planetId}, {$inc : {population: count } }, {}, (err, numReplaced) => {
        if(err) reject(err);
        resolve(numReplaced);
      });
    });
  }
}
