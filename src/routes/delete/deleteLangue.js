const { Langue } = require('../../db/sequelize.js')
const auth = require('../../auth/auth.js')
const helper = require('../../../helper.js')
const prefix = helper.prefix

module.exports = (app) => {
  app.delete(prefix + '/api/langue/:id', auth, (req, res) => {
    Langue.findByPk(req.params.id).then(langue => {
        if (langue === null) {
            const message = "La langue demandée n'existe pas. Réessayez dans quelques instants"
            res.status(404).json({ message, data: error })
        }
        const langueDeleted = langue;
        return Langue.destroy({
            where: { id: langue.id }
        })
        .then(_ => {
            const message = `La langue avec l'identifiant n°${langue.id} a bien été supprimée.`
            res.json({message, data: langueDeleted })
        })
    })
    .catch(error => {
        const message = "La langue n'a pas pu être supprimée. Réessayez dans quelques instants"
        res.status(500).json({ message, data: error })
    })
  })
}