import express from 'express';
import PlanetsController from "./planets/PlanetsController";
import SpaceshipController from "./spaceships/SpaceshipController";

const apiRouter = express.Router();

apiRouter.get('/planets', PlanetsController.get);
apiRouter.get('/spaceship', SpaceshipController.get);
apiRouter.patch('/spaceship/:planetId', SpaceshipController.patch);
apiRouter.post('/passengers/toship/:planetId', SpaceshipController.passengersToShip);
apiRouter.post('/passengers/toplanet/:planetId', SpaceshipController.passengersToPlanet);

export default apiRouter;
