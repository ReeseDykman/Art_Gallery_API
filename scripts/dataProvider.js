const supa = require('@supabase/supabase-js');

const supabase = supa.createClient(
    'https://hiqkeyskhaecpjxffkow.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpcWtleXNraGFlY3BqeGZma293Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMzUxMzYsImV4cCI6MjA1NTkxMTEzNn0.mNLp9x5gqU9rq_k9wGG1Z00Kwggd3n7fbiCQbt-odCg'
);

const dataProvider = {
    getAllEras: async () => {
        return await supabase.from('eras').select('*');
    },
    getAllGalleries: async () => {
        return await supabase.from('galleries').select('*');
    },
    getGalleryById: async (id) => {
        return await supabase.from('galleries').select('*').eq('galleryId', id);
    },
    getGalleryByCountry: async (country) => {
        return await supabase.from('galleries').select('*').ilike('galleryCountry', `${country}%`);
    },
    getAllArtists: async () => {
        return await supabase.from('artists').select('*');
    },
    getArtistById: async (id) => {
        return await supabase.from('artists').select('*').eq('artistId', id);
    },
    getArtistByLastname: async (lastname) => {
        return await supabase.from('artists').select('*').ilike('lastName', `${lastname}%`);
    },
    getArtistByNationality: async (nationality) => {
        return await supabase.from('artists').select('*').ilike('nationality', `${nationality}%`);
    },
    getAllPaintings: async () => {
        return await supabase.from('paintings')
            .select('paintingId, artists (*), galleries (*), imageFileName, title, shapeId, museumLink, accessionNumber, copyrightText, description, excerpt, yearOfWork, width, height, medium, cost, MSRP, googleLink, googleDescription, wikiLink, jsonAnnotations' )
            .order('title', {ascending: true});
    },
    getPaintingsSorted: async (sort) => {
        if (sort === 'year') sort = 'yearOfWork';
        return await supabase.from('paintings')
            .select('paintingId, artists (*), galleries (*), imageFileName, title, shapeId, museumLink, accessionNumber, copyrightText, description, excerpt, yearOfWork, width, height, medium, cost, MSRP, googleLink, googleDescription, wikiLink, jsonAnnotations' )
            .order(sort, {ascending: true});
    },
    getPaintingsById: async (id) => {
        return await supabase.from('paintings')
            .select('paintingId, artists (*), galleries (*), imageFileName, title, shapeId, museumLink, accessionNumber, copyrightText, description, excerpt, yearOfWork, width, height, medium, cost, MSRP, googleLink, googleDescription, wikiLink, jsonAnnotations' )
            .eq('paintingId', id)
            .order('title', {ascending: true});
    },
    getPaintingsByTitle: async (title) => {
        return await supabase.from('paintings')
            .select('paintingId, artists (*), galleries (*), imageFileName, title, shapeId, museumLink, accessionNumber, copyrightText, description, excerpt, yearOfWork, width, height, medium, cost, MSRP, googleLink, googleDescription, wikiLink, jsonAnnotations' )
            .ilike('title', `%${title}%`)
            .order('title', {ascending: true});
    },
    getPaintingsByYear: async (min, max) => {
        return await supabase.from('paintings')
            .select('paintingId, artists (*), galleries (*), imageFileName, title, shapeId, museumLink, accessionNumber, copyrightText, description, excerpt, yearOfWork, width, height, medium, cost, MSRP, googleLink, googleDescription, wikiLink, jsonAnnotations' )
            .gte('yearOfWork', min)
            .lte('yearOfWork', max)
            .order('yearOfWork', {ascending: true});
    },
    getPaintingsByGallery: async (galleryId) => {
        return await supabase.from('paintings')
            .select('paintingId, artists (*), galleries (*), imageFileName, title, shapeId, museumLink, accessionNumber, copyrightText, description, excerpt, yearOfWork, width, height, medium, cost, MSRP, googleLink, googleDescription, wikiLink, jsonAnnotations' )
            .eq('galleryId', galleryId)
            .order('title', {ascending: true});
    },
    getPaintingsByArtist: async (artistId) => {
        return await supabase.from('paintings')
            .select('paintingId, artists (*), galleries (*), imageFileName, title, shapeId, museumLink, accessionNumber, copyrightText, description, excerpt, yearOfWork, width, height, medium, cost, MSRP, googleLink, googleDescription, wikiLink, jsonAnnotations' )
            .eq('artistId', artistId)
            .order('title', {ascending: true});
    },
    getPaintingsByArtistNationality: async (nationality) => {
        return await supabase.from('paintings')
            .select('paintingId, artists!inner (*), galleries (*), imageFileName, title, shapeId, museumLink, accessionNumber, copyrightText, description, excerpt, yearOfWork, width, height, medium, cost, MSRP, googleLink, googleDescription, wikiLink, jsonAnnotations' )
            .ilike('artists.nationality', `${nationality}%`)
            .order('title', {ascending : true});
    },
    getPaintingsByGenre: async (genreId) => {
        const {data, error} =  await supabase
            .from('paintingGenres')
            .select('paintings(paintingId, title, yearOfWork)')
            .eq('genreId', genreId)
            .order('yearOfWork', { ascending: false, referencedTable: 'paintings'});
        if (error) return {error};

        // Flatten the response to an array of paintings
        const paintings = data.map(item => item.paintings);
        return { data: paintings };
            
    },
    getPaintingsByEra: async (eraId) => {
        const {data, error} = await supabase
            .from('paintingGenres')
            .select('paintings(paintingId, title, yearOfWork), genres!inner(eraId)')
            .eq('genres.eraId', eraId)
            .order('yearOfWork', { ascending: false, referencedTable: 'paintings' });
        if (error) return {error};

        // Flatten the response to an array of paintings
        const paintings = data.map(item => ({
            ...item.paintings,
            eraId: item.genres.eraId
        }));

        const sorted = paintings.sort((a, b) => b.yearOfWork - a.yearOfWork);

        return { data: sorted };

    },
    getAllGenres: async () => {
        return await supabase.from('genres').select('genreId, genreName, eras(*), description, wikiLink').order('genreName', {ascending: true});
    },
    getGenreById: async (id) => {
        return await supabase.from('genres').select('genreId, genreName, eras(*), description, wikiLink').eq('genreId', id);
    },
    getGenresByPainting: async (paintingId) => {
        const {data, error} = await supabase.from('paintingGenres')
                .select('genres(genreId, genreName, eras(*), description, wikiLink)')
                .eq('paintingId', paintingId)
                .order('genreName', {ascending: true, referencedTable: 'genres'});
        if (error) return {error};

        // Flatten the response to an array of genres
        const genres = data.map(item => item.genres);
        return { data: genres };
    },
    getGenresPaintingCount: async () => {
        const {data, error} = await supabase.from('genres')
            .select('genreName, paintingGenres!inner(count)');

        if (error) return {error};

        const genres = data.map(item => ({
            genreName: item.genreName,
            count: item.paintingGenres[0].count,
        }));

        const sorted = genres.sort((a, b) =>  a.count - b.count);

        return { data: sorted };
        
    },
    getArtistPaintingCount: async () => {
        const {data, error} = await supabase.from('artists')
            .select('firstName, lastName, paintings!inner(count)')
            .order('count', {ascending: false, referencedTable: 'paintings'});
        
        if (error) return {error};

        const artists = data.map(item => ({
            firstName: item.firstName,
            lastName: item.lastName,
            count: item.paintings[0].count,
        }));

        const sorted = artists.sort((a, b) => b.count - a.count);

        return { data: sorted };
    },
    getTopGenres: async (threshold) => {
        const {data, error} = await supabase.from('genres')
            .select('genreName, paintingGenres!inner(count)')
        
        //cant use where when aggregating :(

        if (error) return {error};

        const genres = data.map(item => ({
            genreName: item.genreName,
            count: item.paintingGenres[0].count,
        }));

        const sorted = genres.sort((a, b) => b.count - a.count);
        
        const filtered = sorted.filter(item => item.count > threshold);
        return { data: filtered };
    }
};

module.exports = dataProvider;