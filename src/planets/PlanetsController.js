import PlanetsService from "./PlanetsService";

export default class PlanetsController {
  static async get(req, res, next) {
    const planets = await PlanetsService.getAllPlanets();
    res.json(planets);
  }
}
