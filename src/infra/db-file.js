const { readFile, existsSync } = require('fs')
const { promisify } = require('util')
const [readFileAsync] = [promisify(readFile)]

// eslint-disable-next-line no-extend-native
Array.prototype.episodesFilter = function (callback) {
  const episodesList = []
  for (const item of this) {
    const result = callback(item)
    if (result) {
      episodesList.push({
        id: item.id,
        name: item.name,
        season: item.season,
        number: item.number,
        airdate: item.airdate,
        image: item.image.original,
        summary: item.summary
      })
    }
  }
  return episodesList
}
class DbFileConnection {
  static async createConnection (file) {
    return new Promise((resolve, reject) => {
      if (existsSync(file)) {
        DbFileConnection.file = file
        resolve('Database connected')
      } else {
        reject(new Error('Database not found'))
      }
    })
  }

  async getData () {
    const data = await readFileAsync(DbFileConnection.file)
    return JSON.parse(data)
  }

  async loadInfo () {
    const { name, type, language, status } = await this.getData()
    return { name, type, language, status }
  }

  async loadEpisodeById (id) {
    const { episodes } = await this.getData()
    const episode = episodes.episodesFilter(epp => {
      return epp.id === parseInt(id)
    })
    return episode.length > 0 ? episode : null
  }

  async loadEpisodesBySeason (seasonId) {
    const { episodes } = await this.getData()
    const episodeOnSeason = episodes.episodesFilter(epp => {
      return epp.season === parseInt(seasonId)
    })
    return episodeOnSeason.length > 0 ? episodeOnSeason : null
  }
}
module.exports = DbFileConnection
