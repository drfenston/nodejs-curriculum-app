const { CompTech } = require('../../db/sequelize.js')
const auth = require('../../auth/auth.js')
const helper = require('../../../helper.js')
const prefix = helper.prefix

module.exports = (app) => {
  app.delete(prefix + '/api/competenceTechnique/:id', auth, (req, res) => {
    CompTech.findByPk(req.params.id).then(compTech => {
        if (compTech === null) {
            const message = "La compétence technique demandée n'existe pas. Réessayez dans quelques instants"
            res.status(404).json({ message, data: error })
        }
        const compTechDeleted = compTech;
        return CompTech.destroy({
            where: { id: compTech.id }
        })
        .then(_ => {
            const message = `La compétence technique avec l'identifiant n°${compTech.id} a bien été supprimée.`
            res.json({message, data: compTechDeleted })
        })
    })
    .catch(error => {
        const message = "La compétence technique n'a pas pu être supprimée. Réessayez dans quelques instants"
        res.status(500).json({ message, data: error })
    })
  })
}