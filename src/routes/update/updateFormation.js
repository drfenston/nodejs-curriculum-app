const { Formation } = require('../../db/sequelize.js')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../../auth/auth.js')
const helper = require('../../../helper.js')
const prefix = helper.prefix

module.exports = (app) => {
    app.put(prefix + '/api/formation/:id', auth, (req, res) => {
        const id = req.params.id
        Formation.update(req.body, {
            where: { id: id }
        })
        .then(_ => {
            return Formation.findByPk(id).then(cv => {
                if (cv === null) {
                    const message = "La formation demandée n'existe pas. Réessayez dans quelques instants"
                    res.status(404).json({ message, data: error })
                }
                const message = `La formation a bien été modifiée.`
                res.json({ message, data: cv })
            })
        })
        .catch(error => {
            if(error instanceof ValidationError){
                return res.status(400).json({ message: error.message, data: error})
            }
            if(error instanceof UniqueConstraintError) {
                return res.status(400).json({ message: error.message, data: error})
            }
            const message = "La formation n'a pas pu être modifiée. Réessayez dans quelques instants"
            res.status(500).json({ message, data: error })
        })
    })
}