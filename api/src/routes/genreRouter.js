const {Router} = require('express');
const getGenHandler = require('../handlers/genreHandler');

const genreRouter = Router();

genreRouter.get('/',getGenHandler)

module.exports = genreRouter;