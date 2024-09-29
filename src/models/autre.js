module.exports = (sequelize, DataTypes) => {
  const Autre = sequelize.define('autre', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    libelle: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [0, 25],
          msg: 'Le libellé doit contenir entre 1 et 25 caractères.'
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

  return Autre;
}