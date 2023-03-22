import PlanetsRepository from "./PlanetsRepository";

export default class PlanetsService {
  static getPlanet(planetId) {
    return PlanetsRepository.get(planetId);
  }

  static getAllPlanets() {
    return PlanetsRepository.getAll();
  }

  static async movePassengersFromPlanet(planetId, count) {
    // get planet current population
    const planet = await PlanetsRepository.get(planetId);
    // check if count can be removed or not
    let peopleToRemove = 0;
    if (count >= planet.population) {
      peopleToRemove = planet.population;
    } else {
      peopleToRemove = count;
    }

    await PlanetsRepository.removePeople(planetId, count);

    return peopleToRemove;
  }
}
