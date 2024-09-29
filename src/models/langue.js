module.exports = (sequelize, DataTypes) => {
    return sequelize.define('langue', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      origine: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: {
                args: [0, 25],
                msg: 'La langue doit contenir entre 1 et 25 caractères.'
              }
        }
      },
      niveau: {
        type: DataTypes.STRING,
        allowNull: true, 
        validate: {
          len: {
            args: [0, 50],
            msg: 'Le niveau doit contenir entre 1 et 50 caractères.'
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