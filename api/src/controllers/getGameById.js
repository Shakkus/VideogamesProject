const {Videogames,Genre} = require('../db');
const getGameInfo = require('./toolsController');
const {API_KEY,API_URL} =process.env

const getDbGameById = async (idVideogame) => {

    let dbInfo = await Videogames.findOne({
        where: { id: idVideogame },
            include: { model: Genre, attributes: ['name'], 
                through: { attributes: [], }
            }
    });

    return dbInfo && {...dbInfo.toJSON(), genres:dbInfo.genres.map(game => game.name)}
};

const getAllById = async (idVideogame) => {
    if (isNaN(idVideogame)){
        const dbGame = await getDbGameById(idVideogame);
        return dbGame;
    }else{
        const apiGame = getGameInfo(`${API_URL}/${+idVideogame}${API_KEY}`,'few'); 
        return apiGame
    }
}

module.exports = getAllById  