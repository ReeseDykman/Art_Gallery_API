//This file contains all routes relating to artists

const {handleResponse, handleErrors} = require('../helpers.js');

//this will be exported to the main router file
const setArtistsRoutes = (app, dataProvider) => {
    getAllArtists(app, dataProvider);
    getArtistById(app, dataProvider);
    getArtistByLastname(app, dataProvider);
    getArtistByNationality(app, dataProvider);
}

const getAllArtists = (app, dataProvider) => {
    app.get('/api/artists', async (req, res) => {
        const { data, error } = await dataProvider.getAllArtists();
        if (error) 
            handleErrors(error, res); 
        else
            handleResponse(data, req, res);
    });
};

const getArtistById = (app, dataProvider) => {
    app.get('/api/artists/:id', async (req, res) => {
        const { id } = req.params;
        const { data, error } = await dataProvider.getArtistById(id);
        if (error) 
            handleErrors(error, res); 
        else
            handleResponse(data, req, res);
    });
}

const getArtistByLastname = (app, dataProvider) => {
    app.get('/api/artists/search/:lastname', async (req, res) => {
        const { lastname } = req.params;
        const { data, error } = await dataProvider.getArtistByLastname(lastname);
        if (error) 
            handleErrors(error, res); 
        else
            handleResponse(data, req, res);
    });
}

const getArtistByNationality = (app, dataProvider) => {
    app.get('/api/artists/country/:nationality', async (req, res) => {
        const { nationality } = req.params;
        const { data, error } = await dataProvider.getArtistByNationality(nationality);
        if (error) 
            handleErrors(error, res); 
        else
            handleResponse(data, req, res);
    });
};

module.exports = setArtistsRoutes;