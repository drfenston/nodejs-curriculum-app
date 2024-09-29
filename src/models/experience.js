const { Sequelize } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('experience', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      dateDebut: {
        type: DataTypes.DATE,
        allowNull:true,
        defaultValue:Sequelize.now
      },
      dateFin: {
        type: DataTypes.DATE,
        allowNull:true,
        defaultValue:Sequelize.now
      },
      entreprise: {
        type: DataTypes.STRING,
        allowNull:true,
        validate: {
          len: {
            args: [0, 60],
            msg: `Le nom de l'entreprise doit contenir entre 1 et 60 caractères.`
          }
        }
      },
      poste: {
        type: DataTypes.STRING,
        allowNull:true,
        validate: {
          len: {
            args: [0, 60],
            msg: 'Le poste doit contenir entre 1 et 60 caractères.'
          }
        }
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }