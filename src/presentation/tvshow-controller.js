class TvShowController {
  constructor (dbConnection) {
    this.dbConnection = dbConnection
  }

  async handle () {
    try {
      const tvshowData = await this.dbConnection.loadInfo()
      return { data: tvshowData, code: 200 }
    } catch (error) {
      return { data: [], code: 500 }
    }
  }
}

module.exports = TvShowController
