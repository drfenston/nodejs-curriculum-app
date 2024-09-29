const { Sequelize } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('CV', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      poste: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:"...",
        validate: {
            len: {
                args: [1, 50],
                msg: 'Le poste doit contenir entre 1 et 50 caractères.'
              },
            notEmpty: {msg: "Le poste ne peut pas être vide."},
            notNull: {msg: "Vous devez entrer obligatoirement un nom de poste."}
        }
      },
      debut: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue:Sequelize.now,
        validate: {
            notEmpty: {msg: "Le poste ne peut pas être vide."},
            notNull: {msg: "Vous devez entrer obligatoirement un nom de poste."}
        }
      },
      profileImage: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'default.jpg',
        validate: {
            len: {
                args: [0, 256],
                msg: 'Le nom doit contenir entre 1 et 256 caractères.'
              }
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: {
                args: [0, 1000],
                msg: 'Le nom doit contenir entre 1 et 1000 caractères.'
              }
        }
      },
      nom: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: {
                args: [0, 50],
                msg: 'Le nom doit contenir entre 1 et 50 caractères.'
              }
        }
      },
      prenom: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: {
            args: [0, 50],
            msg: 'Le prénom doit contenir entre 1 et 50 caractères.'
          }
        }
      },
      adresse1: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: {
            args: [0, 95],
            msg: `L'adresse doit contenir entre 1 et 95 caractères.`
          }
        }
      },
      adresse2: {
        type: DataTypes.STRING,
        allowNull: true, 
        validate: {
          len: {
            args: [0, 95],
            msg: `L'adresse 2 doit contenir entre 1 et 95 caractères.`
          }
        }
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: {
            args: [0, 45],
            msg: `La ville doit contenir entre 3 et 45 caractères.`
          }
        }
      },
      zipCode: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: {
            args: [0, 5],
            msg: `Le code postal doit contenir entre 3 et 5 caractères.`
          }
        }
      },
      telephone: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: {
            args: [0, 15],
            msg: 'Le numéro de téléphone doit contenir entre 8 et 15 caractères.'
          }
        }
      },
      apropos: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: {
            args: [0, 50],
            msg: `L'à propos doit contenir entre 1 et 50 caractères.`
          }
        }
      },
      mail: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: {
            args: [0, 255],
            msg: `L'adresse mail doit contenir entre 3 et 255 caractères.`
          }
        }
      },
      website: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: {
            args: [0, 250],
            msg: 'Le réseau doit contenir entre 1 et 250 caractères.'
          }
        }
      },
      reseaux: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: {
            args: [0, 50],
            msg: 'Le réseau doit contenir entre 1 et 50 caractères.'
          }
        }
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
  }