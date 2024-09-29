const { Formation } = require('../../db/sequelize.js')
const auth = require('../../auth/auth.js')
const helper = require('../../../helper.js')
const prefix = helper.prefix

module.exports = (app) => {
  app.delete(prefix + '/api/formation/:id', auth, (req, res) => {
    Formation.findByPk(req.params.id).then(formation => {
        if (formation === null) {
            const message = "La formation demandée n'existe pas. Réessayez dans quelques instants"
            res.status(404).json({ message, data: error })
        }
        const formationDeleted = formation;
        return Formation.destroy({
            where: { id: formation.id }
        })
        .then(_ => {
            const message = `La formation avec l'identifiant n°${formation.id} a bien été supprimée.`
            res.json({message, data: formationDeleted })
        })
    })
    .catch(error => {
        const message = "La formation n'a pas pu être supprimée. Réessayez dans quelques instants"
        res.status(500).json({ message, data: error })
    })
  })
}