//npm install express
//npm install @supabase/supabase-js
const express = require('express');
const app = express();
const {setRoutes} = require('./scripts/router.js');

setRoutes(app);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
    console.log('http://localhost:8080/api/eras');
    console.log('http://localhost:8080/api/galleries');
    console.log('http://localhost:8080/api/galleries/2');
    console.log('http://localhost:8080/api/galleries/country/u');
    console.log('http://localhost:8080/api/artists');
    console.log('http://localhost:8080/api/artists/2');
    console.log('http://localhost:8080/api/artists/search/p');
    console.log('http://localhost:8080/api/artists/country/FR');
    console.log('http://localhost:8080/api/paintings');
    console.log('http://localhost:8080/api/paintings/sort/year');
    console.log('http://localhost:8080/api/paintings/sort/title');
    console.log('http://localhost:8080/api/paintings/5');
    console.log('http://localhost:8080/api/paintings/search/port');
    console.log('http://localhost:8080/api/paintings/years/1800/1850');
    console.log('http://localhost:8080/api/paintings/galleries/5');
    console.log('http://localhost:8080/api/paintings/artist/16');
    console.log('http://localhost:8080/api/paintings/artist/country/FR');
    console.log('http://localhost:8080/api/genres');
    console.log('http://localhost:8080/api/genres/76');
    console.log('http://localhost:8080/api/genres/painting/408');
    console.log('http://localhost:8080/api/paintings/genre/78');
    console.log('http://localhost:8080/api/paintings/era/2');
    console.log('http://localhost:8080/api/counts/genres');
    console.log('http://localhost:8080/api/counts/artists');
    console.log('http://localhost:8080/api/counts/topGenres/5');
});