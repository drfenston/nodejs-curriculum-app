const { types } = require("util")

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('competenceTechnique', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      icon: {
        type: DataTypes.STRING,
        allowNull:true,
        validate: {
            len: {
                args: [0, 60],
                msg: 'Le libellé doit contenir entre 1 et 60 caractères.'
              }
        }
      },
      libelle: {
        type: DataTypes.STRING,
        allowNull:true,
        validate: {
            len: {
                args: [0, 60],
                msg: 'Le libellé doit contenir entre 1 et 60 caractères.'
              }
        }
      },
      competence: {
        type: DataTypes.STRING,
        allowNull:true,
        validate: {
          len: {
            args: [0, 60],
            msg: 'La compétence doit contenir entre 1 et 60 caractères.'
          }
        }
      },
      percent: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        validate: {
            isInt: {msg: "Utilisez uniquement des nombres entiers pour l'évalution de votre niveau en langue'."},
            min: {
                args: [0],
                msg: "L'évaluation de votre niveau en langue doit être supérieur ou égales à zéro."
            },
            max: {
                args: [100],
                msg: "L'évaluation de votre niveau en langue doit inférieurs ou égales à 100."
            }
        }
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }