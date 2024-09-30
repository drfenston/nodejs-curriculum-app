const { CV } = require('../../db/sequelize.js')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../../auth/auth.js')
const helper = require('../../../helper.js')
const prefix = helper.prefix

module.exports = (app) => {
  app.post(prefix + '/api/cv', auth, (req, res) => {

    const poste = req.body.poste
    const userId = req.body.userId
    
    CV.create({ poste: poste, userId: userId }) 
      .then(cv => {
        const message = `Le cv ${req.body.poste} a bien été créé.`
        res.json({ message, data: cv })
      })
      .catch(error => {
        if(error instanceof ValidationError){
            return res.status(400).json({ message: error.message, data: error})
        }
        if(error instanceof UniqueConstraintError) {
            return res.status(400).json({ message: error.message, data: error})
        }
        const message = "Le cv n'a pas pu être ajouté. Réessayez dans quelques instants"
        res.status(500).json({message, data: error})
    })
  })
}