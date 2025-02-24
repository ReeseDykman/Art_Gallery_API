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
            .ilike('title', `${title}%`)
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
    }
};

module.exports = dataProvider;