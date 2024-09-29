const { CompTech } = require('../../db/sequelize.js')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../../auth/auth.js')
const helper = require('../../../helper.js')
const prefix = helper.prefix

module.exports = (app) => {
  app.post(prefix + '/api/competenceTechnique/:id', auth, (req, res) => {
    const CVId = req.params.id
    CompTech.create( {CVId : CVId })
      .then(compTech => {
        const message = `La competence technique a bien été créée.`
        res.json({ message, data: compTech })
      })
      .catch(error => {
        if(error instanceof ValidationError){
            return res.status(400).json({ message: error.message, data: error})
        }
        if(error instanceof UniqueConstraintError) {
            return res.status(400).json({ message: error.message, data: error})
        }
        const message = "La compétence technique n'a pas pu être ajoutée. Réessayez dans quelques instants"
        res.status(500).json({message, data: error})
    })
  })
}