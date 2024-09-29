const { CV, Formation, Langue, Autre, CompTech, Experience, Projet } = require('../../db/sequelize.js')
const auth = require('../../auth/auth.js')
const helper = require('../../../helper.js')
const prefix = helper.prefix

module.exports = (app) => {
    app.put(prefix + '/api/cv/:id', auth, (req, res) => {
        const id = req.params.id;
        register(id, req, res);
    })
}

async function register(id, req, res) {
    let transaction;
    try {
        transaction = await CV.sequelize.transaction();

        await CV.update(req.body, {
            where: { id: id },
            transaction: transaction
        })

        if (req.body.formations) {
            for (const formation of req.body.formations) {
                await Formation.update(formation, {
                    where: { id: formation.id },
                    transaction: transaction
                })
            };
        }

        if (req.body.langues) {
            for (const langue of req.body.langues) {
                await Langue.update(langue, {
                    where: { id: langue.id },
                    transaction: transaction
                })
            };
        }

        if (req.body.autres) {
            for (const autre of req.body.autres) {
                await Autre.update(autre, {
                    where: { id: autre.id },
                    transaction: transaction
                })
            };
        }

        if (req.body.competenceTechniques) {
            for (const comptTech of req.body.competenceTechniques) {
                await CompTech.update(comptTech, {
                    where: { id: comptTech.id },
                    transaction: transaction
                })
            };
        }

        if (req.body.experiences) {
            for (const experience of req.body.experiences) {
                await Experience.update(experience, {
                    where: { id: experience.id },
                    transaction: transaction
                })

                if (experience.projets) {
                    for (const projet of experience.projets) {
                        await Projet.update(projet, {
                            where: { id: projet.id },
                            transaction: transaction
                        })
                    };
                }

            };
        }

        await transaction.commit();

        const updatedCV = await CV.findByPk(id, { include: [{ model: Formation }, { model: Langue }, { model: Autre }, { model: CompTech }, { model: Experience, include: { model: Projet } }] }, transaction)
        const message = `Le cv de ${updatedCV.nom} ${updatedCV.prenom} a bien été modifié.`
        res.json({ message, data: updatedCV })
    } catch (error) {
        if (transaction) {
            await transaction.rollback();
        }
        const message = "Le cv n'a pas pu être modifié. Réessayez dans quelques instants"
        res.status(500).json({ message, data: error })
    }
}