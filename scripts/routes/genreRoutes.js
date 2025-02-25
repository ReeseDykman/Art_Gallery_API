//this file contains the routes for the genre entity

const {handleResponse, handleErrors} = require('../helpers.js');

//exported to master router file
const setGenreRoutes = (app, dataProvider) => {
    getAllGenres(app, dataProvider);
    getGenreById(app, dataProvider);
    getGenresByPainting(app, dataProvider);
}

const getAllGenres = (app, dataProvider) => {
    app.get('/api/genres', async (req, res) => {
        const { data, error } = await dataProvider.getAllGenres();
        if (error) 
            handleErrors(error, res); 
        else
            handleResponse(data, req, res);
    });
};

const getGenreById = (app, dataProvider) => {
    app.get('/api/genres/:id', async (req, res) => {
        const { id } = req.params;
        const { data, error } = await dataProvider.getGenreById(id);
        if (error) 
            handleErrors(error, res); 
        else
            handleResponse(data, req, res);
    });
}

const getGenresByPainting = (app, dataProvider) => {
    app.get('/api/genres/painting/:paintingId', async (req, res) => {
        const { paintingId } = req.params;
        const { data, error } = await dataProvider.getGenresByPainting(paintingId);
        if (error) 
            handleErrors(error, res); 
        else
            handleResponse(data, req, res);
    });
}

module.exports = setGenreRoutes;