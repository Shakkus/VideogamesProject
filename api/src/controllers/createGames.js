const { Videogame, Genre} = require('../db');

const gameCreator = async (name,description,released,rating,platform,genres,image) => {
    try {
        const genresFounded = await Genre.findAll({
            where: { name: genres}
        });

        const newVideogame = await Videogame.create({
            name:name,
            description:description,
            released:released,
            rating:rating,
            platform:platform,
            image:image
        })

        await newVideogame.addGenre(genresFounded)
        return newVideogame
    } catch (error) {
        console.log(error.message);

    }
}

module.exports = gameCreator