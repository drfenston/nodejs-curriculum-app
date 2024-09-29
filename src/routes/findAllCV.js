const { CV, Autre, Formation, Langue, CompTech, Experience, Projet } = require('../db/sequelize.js')
const { Op } = require('sequelize')
const helper = require('../../helper.js')
const prefix = helper.prefix

module.exports = (app) => {
    app.get(prefix + '/api/findAllCv/:UserId', (req, res) => {
        const userId = req.params.UserId
        if(req.query.name) {
            const name = req.query.name
            const limit = parseInt(req.query.limit) || 5

            if(name.length < 2) {
                const message = 'Le terme de recherche doit contenir au moins deux caractères.'
                return res.status(400).json({ message })
            }

            return CV.findAndCountAll({ 
                where : {
                    name : { 
                        [Op.like]: `%${name}%`
                    }
                },
                include: [{ model: Formation}, {model: Langue}, {model: Autre}, {model: CompTech}, {model: Experience, include:{model: Projet}} ],
                order: ['nom'],
                limit: limit
            })
            .then(({count, rows}) => {
                const message = `Il y a ${count} CVs qui correspondent au terme de recherche ${nom}`
                res.json({ message, data: rows})
            })
        } else {
            CV.findAll({
                where: { userId: `${userId}` },
                order: ['nom'],
                include: [{ model: Formation}, {model: Langue}, {model: Autre}, {model: CompTech}, {model: Experience, include:{model: Projet}} ]
            })
            .then(cvs => {
                const message = 'La liste a bien été récupérée. '
                res.json({ message, data: cvs})
            })
            .catch(error => {
                const message = "La liste des cvs n'a pas pu être récupérée. Réessayez dans quelques instants"
                res.status(500).json({message, data: error})
            })
        }
    })
}