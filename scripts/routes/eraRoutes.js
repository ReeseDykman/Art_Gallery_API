const {handleResponse, handleErrors} = require('../helpers.js');

const setEraRoutes = (app, dataProvider) => {
    getAllEras(app, dataProvider);
};

const getAllEras = (app, dataProvider) => {
    app.get('/api/eras', async (req, res) => {
        const { data, error } = await dataProvider.getAllEras();
        if (error) 
            handleErrors(error, res); 
        else
            handleResponse(data, req, res);
    });
};

module.exports = setEraRoutes;