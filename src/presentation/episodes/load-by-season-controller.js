class LoadEpisodeBySeasonController {
  constructor (dbConnection) {
    this.dbConnection = dbConnection
  }

  async handle (eppId) {
    try {
      const episodes = await this.dbConnection.loadEpisodesBySeason(eppId)
      if (episodes) {
        return { data: episodes, code: 200 }
      }
      return { data: [], code: 204 }
    } catch (error) {
      return { data: [], code: 500 }
    }
  }
}

module.exports = LoadEpisodeBySeasonController
