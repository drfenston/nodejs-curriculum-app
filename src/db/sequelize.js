/* L’API Rest et la Base de données : Créer un modèle Sequelize */
const { Sequelize, DataTypes } = require('sequelize')
const UserModel = require('../models/user')
const AutreModel = require('../models/autre')
const FormationModel = require('../models/formation')
const LangueModel = require('../models/langue')
const CompTechModel = require('../models/competenceTechnique')
const ExperienceModel = require('../models/experience')
const ProjetModel = require('../models/projet')
const CVModel = require('../models/cv')
const mockCV = require('./mock-cv')
const competenceTechnique = require('../models/competenceTechnique')
const langue = require('../models/langue')

let sequelize

if (process.env.NODE_ENV === ("production")) {
  sequelize = new Sequelize("", "", "", {
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
      timezone: 'Etc/GMT-2',
    },
    logging: false
  })
} else {
  sequelize = new Sequelize("", "", "", {
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
      timezone: 'Etc/GMT-2',
    },
    logging: true
  })
}

const User = UserModel(sequelize, DataTypes);
const Autre = AutreModel(sequelize, DataTypes);
const Langue = LangueModel(sequelize, DataTypes);
const Formation = FormationModel(sequelize, DataTypes);
const CompTech = CompTechModel(sequelize, DataTypes);
const Experience = ExperienceModel(sequelize, DataTypes);
const Projet = ProjetModel(sequelize, DataTypes);
const CV = CVModel(sequelize, DataTypes);

const initDb = () => {
  User.hasMany(CV, { foreignKey: 'userId', onDelete: 'CASCADE' });
  CV.belongsTo(User, { foreignKey: 'userId' });

  CV.hasMany(Autre, { onDelete: 'cascade' });
  CV.hasMany(Langue, { onDelete: 'cascade' });
  CV.hasMany(Formation, { onDelete: 'cascade' });
  CV.hasMany(CompTech, { onDelete: 'cascade' });
  CV.hasMany(Experience, { onDelete: 'cascade' });
  Experience.hasMany(Projet, { onDelete: 'cascade' });

  Autre.belongsTo(CV);
  Langue.belongsTo(CV);
  Formation.belongsTo(CV);
  CompTech.belongsTo(CV);
  Experience.belongsTo(CV);
  Projet.belongsTo(Experience);

  return sequelize.sync({ alter: true })
  /*.then(async _ => {
    try {
      for (user of mockCV) {
        const tmpUser = await User.create(user);
        for (cv of user.cvs) {
          const tmpCV = await CV.create(cv);
          await tmpUser.addCV(tmpCV);  // Créer l'association entre User et CV

          for (formation of cv.formations) {
            const tmpFormation = await Formation.create(formation)
            await tmpCV.addFormation(tmpFormation)
          }

          for (autre of cv.autres) {
            const tmpAutre = await Autre.create(autre)
            await tmpCV.addAutre(tmpAutre)
          }

          for (lang of cv.langues) {
            const tmpLangue = await Langue.create(lang)
            await tmpCV.addLangue(tmpLangue)
          }

          for (comp of cv.competenceTechniques) {
            const tmpCompTech = await CompTech.create(comp)
            await tmpCV.addCompetenceTechnique(tmpCompTech)
          }

          for (exp of cv.experiences) {
            const tmpExp = await Experience.create(exp)
            await tmpCV.addExperience(tmpExp)

            for(proj of exp.projets) {
              const tmpProj = await Projet.create(proj)
              await tmpExp.addProjet(tmpProj)
            }
          }
        }
      }
      console.log('La base de données a bien été initialisée !');
    } catch (error) {
      console.error('Erreur lors de l\'initialisation de la base de données :', error);
    }
  });*/
}

module.exports = {
  initDb, User, Autre, CV, Formation, Langue, CompTech, Experience, Projet
}