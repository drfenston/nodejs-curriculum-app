const { Sequelize } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('formation', {
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
      etablissement: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: {
            args: [0, 50],
            msg: `L'établissement doit contenir entre 1 et 50 caractères.`
          }
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: {
            args: [0, 50],
            msg: 'La description doit contenir entre 1 et 50 caractères.'
          }
        }
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }