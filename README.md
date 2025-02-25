
# Art Gallery Api

This project is for Web 3: Advanced Web Development at Mount Royal University. It demonstrates using nodeJs and Express to interact with database services through API routes.


## Built With

**NodeJs:** Runtime Environment

**Express:** Routing

**SupaBase:** Data Storage and Retrieval



## Demo Links

[/api/eras](https://glory-zinc-peripheral.glitch.me/api/eras)

[/api/galleries](https://glory-zinc-peripheral.glitch.me/api/galleries)

[/api/galleries/30](https://glory-zinc-peripheral.glitch.me/api/galleries/30)

[/api/galleries/Calgary](https://glory-zinc-peripheral.glitch.me/api/galleries/Calgary)

[/api/galleries/country/fra](https://glory-zinc-peripheral.glitch.me/api/galleries/country/fra)

[/api/artists](https://glory-zinc-peripheral.glitch.me/api/artists)

[/api/artists/12](https://glory-zinc-peripheral.glitch.me/api/artists/12)

[/api/artists/1223423](https://glory-zinc-peripheral.glitch.me/api/artists/1223423)

[/api/artists/search/ma](https://glory-zinc-peripheral.glitch.me/api/artists/search/ma)

[/api/artists/search/mA](https://glory-zinc-peripheral.glitch.me/api/artists/search/mA)

[/api/artists/country/fra](https://glory-zinc-peripheral.glitch.me/api/artists/country/fra)

[/api/paintings](https://glory-zinc-peripheral.glitch.me/api/paintings)

[/api/paintings/sort/year](https://glory-zinc-peripheral.glitch.me/api/paintings/sort/year)

[/api/paintings/63](https://glory-zinc-peripheral.glitch.me/api/paintings/63)

[/api/paintings/search/port](https://glory-zinc-peripheral.glitch.me/api/paintings/search/port)

[/api/paintings/search/pORt](https://glory-zinc-peripheral.glitch.me/api/paintings/search/pORt)

[/api/paintings/search/connolly](https://glory-zinc-peripheral.glitch.me/api/paintings/search/connolly)

[/api/paintings/years/1800/1850](https://glory-zinc-peripheral.glitch.me/api/paintings/years/1800/1850)

[/api/paintings/galleries/5](https://glory-zinc-peripheral.glitch.me/api/paintings/galleries/5)

[/api/paintings/artist/16](https://glory-zinc-peripheral.glitch.me/api/paintings/artist/16)

[/api/paintings/artist/666](https://glory-zinc-peripheral.glitch.me/api/paintings/artist/666)

[/api/paintings/artist/country/ital](https://glory-zinc-peripheral.glitch.me/api/paintings/artist/country/ital)

[/api/genres](https://glory-zinc-peripheral.glitch.me/api/genres)

[/api/genres/76](https://glory-zinc-peripheral.glitch.me/api/genres/76)

[/api/genres/painting/408](https://glory-zinc-peripheral.glitch.me/api/genres/painting/408)

[/api/genres/painting/jsdfhg](https://glory-zinc-peripheral.glitch.me/api/genres/painting/jsdfhg)

[/api/paintings/genre/78](https://glory-zinc-peripheral.glitch.me/api/paintings/genre/78)

[/api/paintings/era/2](https://glory-zinc-peripheral.glitch.me/api/paintings/era/2)

[/api/counts/genres](https://glory-zinc-peripheral.glitch.me/api/counts/genres)

[/api/counts/artists](https://glory-zinc-peripheral.glitch.me/api/counts/artists)

[/api/counts/topgenres/20](https://glory-zinc-peripheral.glitch.me/api/counts/topgenres/20)

[/api/counts/topgenres/2034958](https://glory-zinc-peripheral.glitch.me/api/counts/topgenres/2034958)



## API Reference

#### Get all eras

```http
  GET /api/eras
```


#### Get all galleries

```http
  GET /api/galleries
```


#### Get galleries by galleryId

```http
  GET /api/galleries/:galleryId
```

#### Get galleries by country substring (begins with)

```http
  GET /api/galleries/country/substring
```

#### Get all artists

```http
  GET /api/artists
```

#### Get artists by Id

```http
  GET /api/artists/:artistId
```

#### Get artists by last name search (begins with)

```http
  GET /api/artists/search/:substring
```

#### Get Artists by nationality substring (begins with)

```http
  GET /api/artists/country/:substring
```

#### Get all paintings

```http
  GET /api/paintings
```

#### Get paintings sorted by title or yearOfWork

```http
  GET /api/paintings/sort/year
  GET /api/paintings/sort/title
```

#### Get painting by Id

```http
  GET /api/paintings/:id
```

#### Get painting by title substring (contains)

```http
  GET /api/paintings/search/:substring
```

#### Get paintings by year range

```http
  GET /api/paintings/years/:start/:end
```

#### Get paintings by GalleryId

```http
  GET /api/paintings/galleries/:galleryId
```

#### Get paintings by ArtistId

```http
  GET /api/paintings/artist/:id 
```

#### Get painting by artist nationality substring (begins with)

```http
  GET /api/paintings/artists/country/:nationality
```

#### Get all genres

```http
  GET /api/genres
```

#### Get genre by Id

```http
  GET /api/genres/:id
```

#### Get genres used in a painting

```http
  GET /api/genres/painting/:paintingId
```

#### Get all paintings for a given genre

```http
  GET /api/paintings/genre/:genre
```

#### Get all paintings for a given era

```http
  GET /api/paintings/era/:era 
```

#### Get number of paintings per genre

```http
  GET /api/counts/genres
```

#### Get number of paintings for each artist

```http
  GET /api/counts/artists
```

#### Returns the number of painting for each genre that are above :threshold

```http
  GET /api/counts/topgenres/:threshold
```


