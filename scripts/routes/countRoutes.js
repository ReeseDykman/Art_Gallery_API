const {handleResponse, handleErrors} = require('../helpers.js');

const setCountRoutes = (app, dataProvider) => {
    getGenresPaintingCount(app, dataProvider);
    getArtistPaintingCount(app, dataProvider);
    getTopGenres(app, dataProvider);
}

const getGenresPaintingCount = (app, dataProvider) => {
    app.get('/api/counts/genres', async (req, res) => {
        console.log('getGenresPaintingCount');
        const { data, error } = await dataProvider.getGenresPaintingCount();
        if (error) 
            handleErrors(error, res); 
        else
            handleResponse(data, req, res);
    });
}

const getArtistPaintingCount = (app, dataProvider) => {
    app.get('/api/counts/artists', async (req, res) => {
        const { data, error } = await dataProvider.getArtistPaintingCount();
        if (error) 
            handleErrors(error, res); 
        else
            handleResponse(data, req, res);
    });
}

const getTopGenres = (app, dataProvider) => {
    app.get('/api/counts/topGenres/:threshold', async (req, res) => {
        const { threshold } = req.params;
        const { data, error } = await dataProvider.getTopGenres(threshold);
        if (error) 
            handleErrors(error, res); 
        else
            handleResponse(data, req, res);
    });
}

module.exports = setCountRoutes;