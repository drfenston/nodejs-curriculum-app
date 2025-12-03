const express = require('express')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const cors = require('cors')
const sequelize = require('./src/db/sequelize')

var corsOptions = {
    origin: "*"
  };

const app = express()
const port = process.env.PORT || 3000

app
    .use(favicon(__dirname+'/favicon.ico'))
    .use(express.json())
    .use(cors(corsOptions))
    .use(express.urlencoded({ extended: true }));

sequelize.initDb()

//Ici nous placerons nos futurs points de terminaison.
require('./src/routes/base')(app)
require('./src/routes/findAllCV')(app)
require('./src/routes/findCVByPk')(app)
require('./src/routes/getPdf')(app)
require('./src/routes/update/updateCV')(app)
require('./src/routes/update/updateLangue')(app)
require('./src/routes/update/updateAutre')(app)
require('./src/routes/update/updateCompTech')(app)
require('./src/routes/update/updateFormation')(app)
require('./src/routes/update/updateExperience')(app)
require('./src/routes/create/createUser')(app)
require('./src/routes/create/createCV')(app)
require('./src/routes/create/createLangue')(app)
require('./src/routes/create/createAutre')(app)
require('./src/routes/create/createCompTech')(app)
require('./src/routes/create/createFormation')(app)
require('./src/routes/create/createExperience')(app)
require('./src/routes/create/createProjet')(app)
require('./src/routes/create/uploadProfileImage')(app)
require('./src/routes/delete/deleteCV')(app)
require('./src/routes/delete/deleteAutre')(app)
require('./src/routes/delete/deleteCompTech')(app)
require('./src/routes/delete/deleteExperience')(app)
require('./src/routes/delete/deleteFormation')(app)
require('./src/routes/delete/deleteLangue')(app)
require('./src/routes/delete/deleteProjet')(app)
require('./src/routes/login')(app)
require('./src/routes/getLatestAPK')(app)

// On gère les routes 404.
app.use(({res}) => {
    const message = 'Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.'
      res.status(404).json({message});
  });

app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))