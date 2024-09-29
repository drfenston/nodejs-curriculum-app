const { Formation } = require('../../db/sequelize.js')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../../auth/auth.js')
const helper = require('../../../helper.js')
const prefix = helper.prefix

module.exports = (app) => {
  app.post(prefix + '/api/formation/:id', auth, (req, res) => {
    const CVId = req.params.id
    Formation.create( {CVId : CVId })
      .then(formation => {
        const message = `La formation a bien été créée.`
        res.json({ message, data: formation })
      })
      .catch(error => {
        if(error instanceof ValidationError){
            return res.status(400).json({ message: error.message, data: error})
        }
        if(error instanceof UniqueConstraintError) {
            return res.status(400).json({ message: error.message, data: error})
        }
        const message = "La formation n'a pas pu être ajoutée. Réessayez dans quelques instants"
        res.status(500).json({message, data: error})
    })
  })
}