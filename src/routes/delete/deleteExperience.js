const { Experience } = require('../../db/sequelize.js')
const auth = require('../../auth/auth.js')
const helper = require('../../../helper.js')
const prefix = helper.prefix

module.exports = (app) => {
  app.delete(prefix + '/api/experience/:id', auth, (req, res) => {
    Experience.findByPk(req.params.id).then(experience => {
        if (experience === null) {
            const message = "L'expérience demandée n'existe pas. Réessayez dans quelques instants"
            res.status(404).json({ message, data: error })
        }
        const experienceDeleted = experience;
        return Experience.destroy({
            where: { id: experience.id }
        })
        .then(_ => {
            const message = `L'expérience avec l'identifiant n°${experience.id} a bien été supprimée.`
            res.json({message, data: experienceDeleted })
        })
    })
    .catch(error => {
        const message = "L'expérience n'a pas pu être supprimée. Réessayez dans quelques instants"
        res.status(500).json({ message, data: error })
    })
  })
}