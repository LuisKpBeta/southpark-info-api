const { TvShowController, LoadEpisodeByIdController, LoadEpisodeBySeasonController } = require('../../presentation/index')
const DbService = require('../../infra/db-file')
async function routes (fastify, options) {
  fastify.get('/', async (request, reply) => {
    const database = new DbService()
    const tvshow = new TvShowController(database)
    const { data, code } = await tvshow.handle()
    reply.statusCode = code
    return data
  })
  fastify.get('/episode/:id', async (request, reply) => {
    const database = new DbService()
    const tvshow = new LoadEpisodeByIdController(database)
    const { id } = request.params
    const { data, code } = await tvshow.handle(id)
    reply.statusCode = code
    return data
  })
  fastify.get('/season/:id', async (request, reply) => {
    const database = new DbService()
    const tvshow = new LoadEpisodeBySeasonController(database)
    const { id: seasonId } = request.params
    const { data, code } = await tvshow.handle(seasonId)
    reply.statusCode = code
    return data
  })
  fastify.setNotFoundHandler('notFound', async (request, reply) => {
    reply.statusCode = 404
    return { message: 'Route Not Found' }
  })
}

module.exports = routes
