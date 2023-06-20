const gameCreator = require("../controllers/createGames");
const getAllById = require("../controllers/getGameById");
const getAll = require("../controllers/getGames")
const getGamesByName = require('../controllers/getGamesByName')


const getAllGames = async (req,res)=>{
    const games = await getAll();

    try {
        res.status(200).json(games);
    } catch (error) {
        res.status(400).send('algo salio mal')
    }
}

const getGameById = async (req,res) =>{
    try {
        const {idVideogame}=req.params;
        const game = await getAllById(idVideogame);
        return res.status(200).json(game);
    } catch (error) {
        res.status(404).send(error.message)
    }
}

const getGameByName = async(req,res)=>{
    try {
        const {name} = req.params;

        const game = await getGamesByName(name)
        return res.status(200).json(game);
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const createGame = async (req,res) => {
    try {
        const {name,description,released,rating,platform,genres,image} = req.body;
        
        const createdGame = await gameCreator(name,description,released,rating,platform,genres,image)  

        res.status(200).json(createdGame);
    } catch (error) {
        res.status(500).send({error:error.message});
    }
}

module.exports = {
    getAllGames, getGameById, getGameByName, createGame
}