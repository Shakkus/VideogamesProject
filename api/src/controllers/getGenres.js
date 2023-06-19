const {Genre} = require('../db');

const axios = require('axios');

const api_url = 'https://api.rawg.io/api/genres?key=576a8a6f2f9a4060a1ca382252427343'

const getGenres = async()=>{
    const {data} = await axios(api_url);
    const result = data.results;
    const allGenders = [];

    for (const gen of result) {
        await Genre.findOrCreate({where:{name: gen.name}})
        allGenders.push(gen.name)
    }
    return allGenders;
}

module.exports = getGenres