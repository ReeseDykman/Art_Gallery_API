//contains all routes for paintings
const {handleResponse, handleErrors} = require('../helpers.js');

//exported to master router file
const setPaintingRoutes = (app, dataProvider) => {
    getAllPaintings(app, dataProvider);
    getPaintingsSorted(app, dataProvider);
    getPaintingsById(app, dataProvider);
    getPaintingsByTitle(app, dataProvider);
    getPaintingsByYear(app, dataProvider);
    getPaintingsByGallery(app, dataProvider);
    getPaintingsByArtist(app, dataProvider);
    getPaintingsByArtistNationality(app, dataProvider);
    getPaintingsByGenre(app, dataProvider);
    getPaintingsByEra(app, dataProvider);
}

const getAllPaintings = (app, dataProvider) => {
    app.get('/api/paintings', async (req, res) => {
        const { data, error } = await dataProvider.getAllPaintings();
        if (error) 
            handleErrors(error, res); 
        else
            handleResponse(data, req, res);
    });
};

const getPaintingsSorted = (app, dataProvider) => {
    app.get('/api/paintings/sort/:sort', async (req, res) => {
        let { sort } = req.params;
        sort = sort.toLowerCase();
        //ensure proper sort params
        if (sort !== 'year' && sort !== 'title') return res.status(400).json({ error: 'Invalid sort parameter' });

        const { data, error } = await dataProvider.getPaintingsSorted(sort);
        
        if (error) 
            handleErrors(error, res); 
        else
            handleResponse(data, req, res);
    });
}

const getPaintingsById = (app, dataProvider) => {
    app.get('/api/paintings/:id', async (req, res) => {
        const { id } = req.params;
        const { data, error } = await dataProvider.getPaintingsById(id);
        if (error) 
            handleErrors(error, res); 
        else
            handleResponse(data, req, res);
    });
}

const getPaintingsByTitle = (app, dataProvider) => {
    app.get('/api/paintings/search/:title', async (req, res) => {
        const { title } = req.params;
        const { data, error } = await dataProvider.getPaintingsByTitle(title);
        if (error) 
            handleErrors(error, res); 
        else
            handleResponse(data, req, res);
    });
}

const getPaintingsByYear = (app, dataProvider) => {
    app.get('/api/paintings/years/:min/:max', async (req, res) => {
        const { min, max } = req.params;

        if (isNaN(min) || isNaN(max)) return res.status(400).json({ error: 'Invalid year parameter' });
        if (min > max) return res.status(400).json({ error: 'Invalid year range' });

        const { data, error } = await dataProvider.getPaintingsByYear(min, max);
        if (error) 
            handleErrors(error, res); 
        else
            handleResponse(data, req, res);
    });
}

const getPaintingsByGallery = (app, dataProvider) => {
    app.get('/api/paintings/galleries/:galleryId', async (req, res) => {
        const { galleryId } = req.params;
        const { data, error } = await dataProvider.getPaintingsByGallery(galleryId);
        if (error) 
            handleErrors(error, res); 
        else
            handleResponse(data, req, res);
    });
}

const getPaintingsByArtist = (app, dataProvider) => {
    app.get('/api/paintings/artist/:artistId', async (req, res) => {
        const { artistId } = req.params;
        const { data, error } = await dataProvider.getPaintingsByArtist(artistId);
        if (error) 
            handleErrors(error, res); 
        else
            handleResponse(data, req, res);
    });
}

const getPaintingsByArtistNationality = (app, dataProvider) => {
    app.get('/api/paintings/artist/country/:nationality', async (req, res) => {
        const {nationality} = req.params;
        const {data, error} = await dataProvider.getPaintingsByArtistNationality(nationality);
        if (error) 
            handleErrors(error, res); 
        else
            handleResponse(data, req, res);
    });
}

const getPaintingsByGenre = (app, dataProvider) => {
    app.get('/api/paintings/genre/:genreId', async (req, res) => {
        const { genreId } = req.params;
        const { data, error } = await dataProvider.getPaintingsByGenre(genreId);
        if (error) 
            handleErrors(error, res); 
        else
            handleResponse(data, req, res);
    });
}

const getPaintingsByEra = (app, dataProvider) => {
    app.get('/api/paintings/era/:eraId', async (req, res) => {
        const { eraId } = req.params;
        const { data, error } = await dataProvider.getPaintingsByEra(eraId);
        if (error) 
            handleErrors(error, res); 
        else
            handleResponse(data, req, res);
    });
}

module.exports = setPaintingRoutes;