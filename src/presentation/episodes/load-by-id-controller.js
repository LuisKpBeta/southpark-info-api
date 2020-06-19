class LoadEpisodeByIdController {
  constructor (dbConnection) {
    this.dbConnection = dbConnection
  }

  async handle (eppId) {
    try {
      const episodeData = await this.dbConnection.loadEpisodeById(eppId)
      if (episodeData) {
        return { data: episodeData, code: 200 }
      }
      return { data: [], code: 204 }
    } catch (error) {
      return { data: [], code: 500 }
    }
  }
}

module.exports = LoadEpisodeByIdController
