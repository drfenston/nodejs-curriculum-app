const { User } = require('../db/sequelize')
const helper = require('../../helper.js')

module.exports = (app) => {
  const route = helper.prefix + '/api/base'
  app.get(helper.prefix + '/api/base', (req, res) => {

    const message = route
    res.json({ message })

  })
}
