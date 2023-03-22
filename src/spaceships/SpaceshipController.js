import SpaceshipService from "./SpaceshipService";
import SpaceshipRepository from "./SpaceshipRepository";

export default class SpaceshipController {
  static async get(req, res, next) {
    res.json(await SpaceshipRepository.getTheShip());
  }

  static async patch(req, res, next) {
    const planetId = req.params.planetId;

    if (!planetId) {
      const error = new Error('PlanetId is missing');
      error.statusCode = 400;
      return next(error);
    }

    const result = await SpaceshipService.move(parseInt(planetId));

    res.json(result);
  }

  static async passengersToShip(req, res, next) {
    const planetId = req.params.planetId;
    if (!planetId) {
      const error = new Error('PlanetId is missing');
      error.httpStatusCode = 400;
      next(error)
    }

    const result = await SpaceshipService.movePassengersToShip(parseInt(planetId));

    res.json(result);
  }

  static async passengersToPlanet(req, res, next) {
    const planetId = req.params.planetId;
    if (!planetId) {
      const error = new Error('PlanetId is missing');
      error.httpStatusCode = 400;
      next(error)
    }

    const result = await SpaceshipService.movePassengersToPlanet(parseInt(planetId));

    res.json(result);
  }
}
