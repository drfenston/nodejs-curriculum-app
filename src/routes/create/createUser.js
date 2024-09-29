const { User } = require('../../db/sequelize.js')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const bcrypt = require('bcryptjs')
const helper = require('../../../helper.js')
const prefix = helper.prefix

module.exports = (app) => {
  app.post(prefix + '/api/user', (req, res) => {

    bcrypt.hash(req.body.password, 10)
      .then(hash => User.create({ username: req.body.username, password: hash }).then(user => {
        const message = `L'utilisateur' ${req.body.username} a bien été créé.`
        res.json({ message, data: user })
      })
        .catch(error => {
          if (error instanceof ValidationError) {
            return res.status(400).json({ message: error.message, data: error })
          }
          if (error instanceof UniqueConstraintError) {
            return res.status(400).json({ message: error.message, data: error })
          }
          const message = "L'utilisateur' n'a pas pu être ajouté. Réessayez dans quelques instants"
          res.status(500).json({ message, data: error })
        }))
  })
}