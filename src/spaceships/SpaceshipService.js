import SpaceshipRepository from "./SpaceshipRepository";
import PlanetsRepository from "../planets/PlanetsRepository";
import PlanetsService from "../planets/PlanetsService";

export default class SpaceshipService {
  static async move(planetId) {
    if (!await this.isMovableTo(planetId)) {
      return false;
    }
    const rowsUpdated = await SpaceshipRepository.move(1, planetId);
    return {
      ship: await SpaceshipRepository.getTheShip(),
      isSuccess: true
    };
  }

  static async isMovableTo(planetId) {
    const ship = await SpaceshipRepository.getTheShip();
    return ship.planetId !== planetId;
  }

  static async movePassengersToShip(planetId) {
    const ship = await SpaceshipRepository.getTheShip();
    if (planetId !== ship.planetId) {
      const error = new Error('A spaceship is not on that planet - yet');
      error.httpStatusCode = 400;
      throw error;
    }

    const availableSlots = this.getAvailableSlots(ship);
    let peopleToMoveFromPlanetToShip = availableSlots;
    const planet = await PlanetsService.getPlanet(planetId);
    if (planet.population <= availableSlots) {
      peopleToMoveFromPlanetToShip = planet.population;
    }

    const peopleCanBeRemoved = await PlanetsService.movePassengersFromPlanet(planetId, peopleToMoveFromPlanetToShip)
    await SpaceshipRepository.addPeople(1, peopleCanBeRemoved);
    return {
      ship: await SpaceshipRepository.getTheShip(),
      planet: await PlanetsRepository.get(planetId),
      isSuccess: true
    };
  }

  static async movePassengersToPlanet(planetId) {
    const ship = await SpaceshipRepository.getTheShip();
    if (planetId !== ship.planetId) {
      const error = new Error('A spaceship is not on that planet - yet');
      error.httpStatusCode = 400;
      throw error;
    }

    await SpaceshipRepository.removePeople(1, parseInt(ship.passengers));
    await PlanetsRepository.addPeople(planetId, parseInt(ship.passengers));

    return {
      ship: await SpaceshipRepository.getTheShip(),
      planet: await PlanetsRepository.get(planetId),
      isSuccess: true
    };
  }

  static getAvailableSlots(ship) {
    return ship.maxCapacity - ship.passengers;
  }
}
