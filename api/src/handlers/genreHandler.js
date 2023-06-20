const getGenres = require("../controllers/getGenres");

const getGenHandler = async (req,res) => {
    const gender = await getGenres();

    try {
        res.status(200).json(gender)
    } catch (error) {
        res.status(404).send('Algo salio mal')
    }
}

module.exports = getGenHandler