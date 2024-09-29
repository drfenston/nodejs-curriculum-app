const { Autre } = require('../../db/sequelize.js')
const auth = require('../../auth/auth.js')
const helper = require('../../../helper.js')
const prefix = helper.prefix

module.exports = (app) => {
  app.delete(prefix + '/api/autre/:id', auth, (req, res) => {
    Autre.findByPk(req.params.id).then(autre => {
        if (autre === null) {
            const message = "Le autre demandé n'existe pas. Réessayez dans quelques instants"
            res.status(404).json({ message, data: error })
        }
        const autreDeleted = autre;
        return Autre.destroy({
            where: { id: autre.id }
        })
        .then(_ => {
            const message = `Le autre avec l'identifiant n°${autre.id} a bien été supprimé.`
            res.json({message, data: autreDeleted })
        })
    })
    .catch(error => {
        const message = "Le autre n'a pas pu être supprimé. Réessayez dans quelques instants"
        res.status(500).json({ message, data: error })
    })
  })
}