const {Router} = require('express');
const { getAllGames, getGameById, getGameByName, createGame } = require('../handlers/videogameHandler');

const videogameRouter = Router();

videogameRouter.get('/',getAllGames);
videogameRouter.get('/:idVideogame',getGameById);
videogameRouter.get('/name/:name',getGameByName);
videogameRouter.post('/',createGame);

module.exports = videogameRouter;