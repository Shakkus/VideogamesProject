const {Videogame,Genre} = require('../db');
const getGameInfo = require('./toolsController');

const URL = 'https://api.rawg.io/api/games?key=576a8a6f2f9a4060a1ca382252427343'

const getApiGames = async (url)=>{
    let allGames = [];
    let nextPage = url;

    while (nextPage && allGames.length < 100) {
        let {game,next} = await getGameInfo (nextPage,'many')
        allGames = [...allGames,...game];
        nextPage= next;
    }
    return allGames;
}

const getDbGames = async (db) => await db.findAll({
    include: {
        model: Genre,
        attributes: ['name'],
        through:{
            attributes:[]
        },
    },
})

const getAll = async () => {
    const db = await getDbGames(Videogame);
    const api = await getApiGames(URL);
    return [...db,...api]
}

module.exports = getAll