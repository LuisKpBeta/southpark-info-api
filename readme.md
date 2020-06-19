 # South Park API

An API to show some data about South Park (yes, that polemic animation from Adult Swin!!). Dataset used on this API can be access on [SoutPark](http://api.tvmaze.com/singlesearch/shows?q=south-park&embed=episodes)

This application was builded for tests with Fastify framework

 ## Functionalities

- [x] Get SouthPark information
- [x] Search an episode by id
- [x] List episodes by season

 ## Routes

> **GET /** 
   Retrieve South Park information

> **GET /episode/:id** 
  Retrieve Episode information

> **GET /season/:id** 
  Retrieve Season information with episodes list