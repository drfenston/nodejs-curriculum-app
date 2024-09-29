const { CV } = require('../../db/sequelize.js')
const auth = require('../../auth/auth.js')
const helper = require('../../../helper.js')
const prefix = helper.prefix

module.exports = (app) => {
  app.delete(prefix + '/api/cv/:id', auth, (req, res) => {
    CV.findByPk(req.params.id).then(cv => {
        if (cv === null) {
            const message = "Le cv demandé n'existe pas. Réessayez dans quelques instants"
            res.status(404).json({ message, data: error })
        }
        const cvDeleted = cv;
        return CV.destroy({
            where: { id: cv.id }
        })
        .then(_ => {
            const message = `Le cv avec l'identifiant n°${cv.id} a bien été supprimé.`
            res.json({message, data: cvDeleted })
        })
    })
    .catch(error => {
        const message = "Le cv n'a pas pu être supprimé. Réessayez dans quelques instants"
        res.status(500).json({ message, data: error })
    })
  })
}