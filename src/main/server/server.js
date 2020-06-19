const fastify = require('fastify')

class FastifyServer {
  constructor (routes) {
    this.fastifyInstance = fastify({ logger: true })
    this.routes = routes
  }

  async run () {
    try {
      this.fastifyInstance.register(this.routes)
      this.fastifyInstance.listen(3000)
    } catch (error) {
      fastify.log.error(error)
      process.exit(1)
    }
  }
}
module.exports = FastifyServer
