const { Projet } = require('../../db/sequelize.js')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../../auth/auth.js')
const helper = require('../../../helper.js')
const prefix = helper.prefix

module.exports = (app) => {
  app.post(prefix + '/api/projet/:id', auth, (req, res) => {
    const experienceId = req.params.id
    Projet.create( {experienceId : experienceId })
      .then(autre => {
        const message = `Le projet a bien été créé.`
        res.json({ message, data: autre })
      })
      .catch(error => {
        if(error instanceof ValidationError){
            return res.status(400).json({ message: error.message, data: error})
        }
        if(error instanceof UniqueConstraintError) {
            return res.status(400).json({ message: error.message, data: error})
        }
        const message = "Le projet n'a pas pu être ajouté. Réessayez dans quelques instants"
        res.status(500).json({message, data: error})
    })
  })
}