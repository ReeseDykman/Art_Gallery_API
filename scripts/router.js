const setArtistsRoutes = require('./routes/artistRoutes');
const setCountRoutes = require('./routes/countRoutes');
const setErasRoutes = require('./routes/eraRoutes');
const setGalleriesRoutes = require('./routes/galleryRoutes');
const setGenresRoutes = require('./routes/genreRoutes');
const setPaintingsRoutes = require('./routes/paintingRoutes');
const dataProvider = require('./dataProvider');

const setRoutes = (app) => {
    setArtistsRoutes(app, dataProvider);
    setCountRoutes(app, dataProvider);
    setErasRoutes(app, dataProvider);
    setGalleriesRoutes(app, dataProvider);
    setGenresRoutes(app, dataProvider);
    setPaintingsRoutes(app, dataProvider);
};

module.exports = {setRoutes};