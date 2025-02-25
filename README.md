
# Art Gallery Api

This project is for Web 3: Advanced Web Development at Mount Royal University. It demonstrates using nodeJs and Express to interact with database services through API routes.


## Built With

**NodeJs:** Runtime Environment

**Express:** Routing

**SupaBase:** Data Storage and Retrieval


## API Reference and Test Links

#### Get all eras

```http
  GET /api/eras
```

[/api/eras](https://glory-zinc-peripheral.glitch.me/api/eras)

#### Get all galleries

```http
  GET /api/galleries
```

[/api/galleries](https://glory-zinc-peripheral.glitch.me/api/galleries)

#### Get galleries by galleryId

```http
  GET /api/galleries/:galleryId
```

[/api/galleries/30](https://glory-zinc-peripheral.glitch.me/api/galleries/30)

[/api/galleries/Calgary](https://glory-zinc-peripheral.glitch.me/api/galleries/Calgary)

#### Get galleries by country substring (begins with)

```http
  GET /api/galleries/country/substring
```

[/api/galleries/country/fra](https://glory-zinc-peripheral.glitch.me/api/galleries/country/fra)

#### Get all artists

```http
  GET /api/artists
```

[/api/artists](https://glory-zinc-peripheral.glitch.me/api/artists)

#### Get artists by Id

```http
  GET /api/artists/:artistId
```

[/api/artists/12](https://glory-zinc-peripheral.glitch.me/api/artists/12)

[/api/artists/1223423](https://glory-zinc-peripheral.glitch.me/api/artists/1223423)

#### Get artists by last name search (begins with)

```http
  GET /api/artists/search/:substring
```

[/api/artists/search/ma](https://glory-zinc-peripheral.glitch.me/api/artists/search/ma)

[/api/artists/search/mA](https://glory-zinc-peripheral.glitch.me/api/artists/search/mA)

#### Get Artists by nationality substring (begins with)

```http
  GET /api/artists/country/:substring
```

[/api/artists/country/fra](https://glory-zinc-peripheral.glitch.me/api/artists/country/fra)

#### Get all paintings

```http
  GET /api/paintings
```

[/api/paintings](https://glory-zinc-peripheral.glitch.me/api/paintings)

#### Get paintings sorted by title or yearOfWork

```http
  GET /api/paintings/sort/year
  GET /api/paintings/sort/title
```

[/api/paintings/sort/year](https://glory-zinc-peripheral.glitch.me/api/paintings/sort/year)

#### Get painting by Id

```http
  GET /api/paintings/:id
```

[/api/paintings/63](https://glory-zinc-peripheral.glitch.me/api/paintings/63)

#### Get painting by title substring (contains)

```http
  GET /api/paintings/search/:substring
```

[/api/paintings/search/port](https://glory-zinc-peripheral.glitch.me/api/paintings/search/port)

[/api/paintings/search/pORt](https://glory-zinc-peripheral.glitch.me/api/paintings/search/pORt)

[/api/paintings/search/connolly](https://glory-zinc-peripheral.glitch.me/api/paintings/search/connolly)

#### Get paintings by year range

```http
  GET /api/paintings/years/:start/:end
```

[/api/paintings/years/1800/1850](https://glory-zinc-peripheral.glitch.me/api/paintings/years/1800/1850)

#### Get paintings by GalleryId

```http
  GET /api/paintings/galleries/:galleryId
```

[/api/paintings/galleries/5](https://glory-zinc-peripheral.glitch.me/api/paintings/galleries/5)

#### Get paintings by ArtistId

```http
  GET /api/paintings/artist/:id 
```

[/api/paintings/artist/16](https://glory-zinc-peripheral.glitch.me/api/paintings/artist/16)

[/api/paintings/artist/666](https://glory-zinc-peripheral.glitch.me/api/paintings/artist/666)

#### Get painting by artist nationality substring (begins with)

```http
  GET /api/paintings/artists/country/:nationality
```

[/api/paintings/artist/country/ital](https://glory-zinc-peripheral.glitch.me/api/paintings/artist/country/ital)

#### Get all genres

```http
  GET /api/genres
```

[/api/genres](https://glory-zinc-peripheral.glitch.me/api/genres)

#### Get genre by Id

```http
  GET /api/genres/:genreId
```

[/api/genres/76](https://glory-zinc-peripheral.glitch.me/api/genres/76)

#### Get genres used in a painting

```http
  GET /api/genres/painting/:paintingId
```

[/api/genres/painting/408](https://glory-zinc-peripheral.glitch.me/api/genres/painting/408)

[/api/genres/painting/jsdfhg](https://glory-zinc-peripheral.glitch.me/api/genres/painting/jsdfhg)

#### Get all paintings for a given genre

```http
  GET /api/paintings/genre/:genreId
```

[/api/paintings/genre/78](https://glory-zinc-peripheral.glitch.me/api/paintings/genre/78)

#### Get all paintings for a given era

```http
  GET /api/paintings/era/:eraId 
```
[/api/paintings/era/2](https://glory-zinc-peripheral.glitch.me/api/paintings/era/2)

#### Get number of paintings per genre

```http
  GET /api/counts/genres
```

[/api/counts/genres](https://glory-zinc-peripheral.glitch.me/api/counts/genres)

#### Get number of paintings for each artist

```http
  GET /api/counts/artists
```

[/api/counts/artists](https://glory-zinc-peripheral.glitch.me/api/counts/artists)

#### Returns the number of painting for each genre that are above :threshold

```http
  GET /api/counts/topgenres/:threshold
```

[/api/counts/topgenres/20](https://glory-zinc-peripheral.glitch.me/api/counts/topgenres/20)

[/api/counts/topgenres/2034958](https://glory-zinc-peripheral.glitch.me/api/counts/topgenres/2034958)


