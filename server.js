//npm install express
//npm install @supabase/supabase-js
const express = require('express');
const app = express();
const {setRoutes} = require('./scripts/router.js');
const { count } = require('console');
const { validateHeaderValue } = require('http');

setRoutes(app);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
    console.log('http://localhost:8080/eras');
    console.log('http://localhost:8080/galleries');
    console.log('http://localhost:8080/galleries/2');
    console.log('http://localhost:8080/galleries/country/u');
    console.log('http://localhost:8080/artists');
    console.log('http://localhost:8080/artists/2');
    console.log('http://localhost:8080/artists/search/p');
    console.log('http://localhost:8080/artists/country/FR');
    console.log('http://localhost:8080/paintings');
    console.log('http://localhost:8080/paintings/sort/year');
    console.log('http://localhost:8080/paintings/sort/title');
    console.log('http://localhost:8080/paintings/5');
    console.log('http://localhost:8080/paintings/search/port');
    console.log('http://localhost:8080/paintings/year/1800/1850');
    console.log('http://localhost:8080/paintings/galleries/5');
    console.log('http://localhost:8080/paintings/artists/16');
});