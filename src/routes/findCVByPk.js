const { CV, Formation, Langue, Autre, CompTech, Experience, Projet } = require('../db/sequelize.js')
const helper = require('../../helper.js')
const prefix = helper.prefix

module.exports = (app) => {
  app.get(prefix + '/api/cv/:id', (req, res) => {
    CV.findByPk(req.params.id, { include: [{ model: Formation }, { model: Langue }, { model: Autre }, { model: CompTech }, { model: Experience, include: { model: Projet } }] })
      .then(cv => {
        const message = 'Un cv a bien été trouvé.'
        res.json({ message, data: cv })
      })
  })
}