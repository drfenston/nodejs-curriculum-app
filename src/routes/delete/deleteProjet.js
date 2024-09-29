const { Projet } = require('../../db/sequelize.js')
const auth = require('../../auth/auth.js')
const helper = require('../../../helper.js')
const prefix = helper.prefix

module.exports = (app) => {
  app.delete(prefix + '/api/projet/:id', auth, (req, res) => {
    Projet.findByPk(req.params.id).then(projet => {
        if (projet === null) {
            const message = "Le projet demandé n'existe pas. Réessayez dans quelques instants"
            res.status(404).json({ message, data: error })
        }
        const projetDeleted = projet;
        return Projet.destroy({
            where: { id: projet.id }
        })
        .then(_ => {
            const message = `Le projet avec l'identifiant n°${projet.id} a bien été supprimé.`
            res.json({message, data: projetDeleted })
        })
    })
    .catch(error => {
        const message = "Le projet n'a pas pu être supprimé. Réessayez dans quelques instants"
        res.status(500).json({ message, data: error })
    })
  })
}