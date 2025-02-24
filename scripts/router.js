const dataProvider = require('./dataProvider.js');

const setRoutes = (app) => {
    getAllEras(app);
    getAllGalleries(app);
    getGalleryById(app);
    getGalleryByCountry(app);
    getAllArtists(app);
    getArtistById(app);
    getArtistByLastname(app);
    getArtistByNationality(app);
    getAllPaintings(app);
    getPaintingsSorted(app);
    getPaintingsById(app);
    getPaintingsByTitle(app);
    getPaintingsByYear(app);
    getPaintingsByGallery(app);
    getPaintingsByArtist(app);
};

const getAllEras = (app) => {
    app.get('/eras', async (req, res) => {
        const { data, error } = await dataProvider.getAllEras();
        if (error) return res.status(400).json({ error: error.message })
        res.json(data)
    });
};

const getAllGalleries = (app) => {
    app.get('/galleries', async (req, res) => {
        const { data, error } = await dataProvider.getAllGalleries();
        if (error) return res.status(400).json({ error: error.message })
        res.json(data)
    });
};

const getGalleryById = (app) => {
    app.get('/galleries/:id', async (req, res) => {
        const { id } = req.params;
        const { data, error } = await dataProvider.getGalleryById(id);
        if (error) return res.status(400).json({ error: error.message })
        res.json(data)
    });
}

const getGalleryByCountry = (app) => {
    app.get('/galleries/country/:country', async (req, res) => {
        const { country } = req.params;
        const { data, error } = await dataProvider.getGalleryByCountry(country);
        if (error) return res.status(400).json({ error: error.message })
        res.json(data)
    });
}

const getAllArtists = (app) => {
    app.get('/artists', async (req, res) => {
        const { data, error } = await dataProvider.getAllArtists();
        if (error) return res.status(400).json({ error: error.message })
        res.json(data)
    });
};

const getArtistById = (app) => {
    app.get('/artists/:id', async (req, res) => {
        const { id } = req.params;
        const { data, error } = await dataProvider.getArtistById(id);
        if (error) return res.status(400).json({ error: error.message })
        res.json(data)
    });
}

const getArtistByLastname = (app) => {
    app.get('/artists/search/:lastname', async (req, res) => {
        const { lastname } = req.params;
        const { data, error } = await dataProvider.getArtistByLastname(lastname);
        if (error) return res.status(400).json({ error: error.message })
        res.json(data)
    });
}

const getArtistByNationality = (app) => {
    app.get('/artists/country/:nationality', async (req, res) => {
        const { nationality } = req.params;
        const { data, error } = await dataProvider.getArtistByNationality(nationality);
        if (error) return res.status(400).json({ error: error.message })
        res.json(data)
    });
};

const getAllPaintings = (app) => {
    app.get('/paintings', async (req, res) => {
        const { data, error } = await dataProvider.getAllPaintings();
        if (error) return res.status(400).json({ error: error.message })
        res.json(data)
    });
};

const getPaintingsSorted = (app) => {
    app.get('/paintings/sort/:sort', async (req, res) => {
        let { sort } = req.params;
        sort = sort.toLowerCase();
        if (sort !== 'year' && sort !== 'title') return res.status(400).json({ error: 'Invalid sort parameter' });
        const { data, error } = await dataProvider.getPaintingsSorted(sort);
        if (error) return res.status(400).json({ error: error.message })
        res.json(data)
    });
}

const getPaintingsById = (app) => {
    app.get('/paintings/:id', async (req, res) => {
        const { id } = req.params;
        const { data, error } = await dataProvider.getPaintingsById(id);
        if (error) return res.status(400).json({ error: error.message })
        res.json(data)
    });
}

const getPaintingsByTitle = (app) => {
    app.get('/paintings/search/:title', async (req, res) => {
        const { title } = req.params;
        const { data, error } = await dataProvider.getPaintingsByTitle(title);
        if (error) return res.status(400).json({ error: error.message })
        res.json(data)
    });
}

const getPaintingsByYear = (app) => {
    app.get('/paintings/year/:min/:max', async (req, res) => {
        const { min, max } = req.params;
        const { data, error } = await dataProvider.getPaintingsByYear(min, max);
        if (error) return res.status(400).json({ error: error.message })
        res.json(data)
    });
}

const getPaintingsByGallery = (app) => {
    app.get('/paintings/galleries/:galleryId', async (req, res) => {
        const { galleryId } = req.params;
        const { data, error } = await dataProvider.getPaintingsByGallery(galleryId);
        if (error) return res.status(400).json({ error: error.message })
        res.json(data)
    });
}

const getPaintingsByArtist = (app) => {
    app.get('/paintings/artists/:artistId', async (req, res) => {
        const { artistId } = req.params;
        const { data, error } = await dataProvider.getPaintingsByArtist(artistId);
        if (error) return res.status(400).json({ error: error.message })
        res.json(data)
    });
}

module.exports = {setRoutes};