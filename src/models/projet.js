module.exports = (sequelize, DataTypes) => {
    return sequelize.define('projet', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nom: {
        type: DataTypes.STRING,
        allowNull:true,
        validate: {
          len: {
            args: [0, 60],
            msg: `Le nom de l'entreprise doit contenir entre 1 et 60 caractères.`
          }
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull:true,
        validate: {
          len: {
            args: [0, 250],
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