const { Videogames, Genres} = require('../db');

const gameCreator = async (name,description,released,rating,platform,genres,image) => {
    try {

        const genresFounded = await Genres.findAll({
            where: { name: genres}
        });
        
        const newVideogame = await Videogames.create({
            name:name,
            description:description,
            released:released,
            rating:rating,
            platform:platform,
            image:image
        })

        await newVideogame.addGenres(genresFounded)
        return newVideogame
       
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = gameCreator