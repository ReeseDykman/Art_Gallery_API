//contains all routes for galleries

const {handleResponse, handleErrors} = require('../helpers.js');

//exported to master router file
const setGalleryRoutes = (app, dataProvider) => {
    getAllGalleries(app, dataProvider);
    getGalleryById(app, dataProvider);
    getGalleryByCountry(app, dataProvider);
}

const getAllGalleries = (app, dataProvider) => {
    app.get('/api/galleries', async (req, res) => {
        const { data, error } = await dataProvider.getAllGalleries();
        if (error) 
            handleErrors(error, res); 
        else
            handleResponse(data, req, res);
    });
};

const getGalleryById = (app, dataProvider) => {
    app.get('/api/galleries/:id', async (req, res) => {
        const { id } = req.params;
        const { data, error } = await dataProvider.getGalleryById(id);
        if (error) 
            handleErrors(error, res); 
        else
            handleResponse(data, req, res);
    });
}

const getGalleryByCountry = (app, dataProvider) => {
    app.get('/api/galleries/country/:country', async (req, res) => {
        const { country } = req.params;
        const { data, error } = await dataProvider.getGalleryByCountry(country);
        if (error) 
            handleErrors(error, res); 
        else
            handleResponse(data, req, res);
    });
}

module.exports = setGalleryRoutes;