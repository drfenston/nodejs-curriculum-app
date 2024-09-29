const { Autre } = require('../../db/sequelize.js')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../../auth/auth.js')
const helper = require('../../../helper.js')
const prefix = helper.prefix

module.exports = (app) => {
  app.post(prefix + '/api/autre/:id', auth, (req, res) => {
    const CVId = req.params.id
    Autre.create( {CVId : CVId })
      .then(autre => {
        const message = `Le autre a bien été créé.`
        res.json({ message, data: autre })
      })
      .catch(error => {
        if(error instanceof ValidationError){
            return res.status(400).json({ message: error.message, data: error})
        }
        if(error instanceof UniqueConstraintError) {
            return res.status(400).json({ message: error.message, data: error})
        }
        const message = "Le autre n'a pas pu être ajouté. Réessayez dans quelques instants"
        res.status(500).json({message, data: error})
    })
  })
}