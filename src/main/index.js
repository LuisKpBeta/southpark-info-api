const FastifyServer = require('./server/server')
const routes = require('./routes/routes')
const DatabaseFile = require('../infra/db-file')
const path = require('path')
DatabaseFile.createConnection(path.join(__dirname, '../../southpark.json')).then(() => {
  const fastifyInstance = new FastifyServer(routes)
  fastifyInstance.run()
}).catch((err) => {
  console.log(err)
})
