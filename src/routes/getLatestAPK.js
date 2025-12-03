const { CV, Formation, Langue, Autre, CompTech, Experience, Projet } = require('../db/sequelize.js')
const helper = require('../../helper.js')
const prefix = helper.prefix
const fs = require('fs');
const path = require('path');

module.exports = (app) => {
  app.get(prefix + '/api/latest-apk', async (req, res) => {
    const directoryPath = path.join(__dirname, '../../apk'); // Spécifie ton dossier ici
  
    try {
      const latestAPK = await getLatestAPK(directoryPath);
      res.json({
        message: 'Le fichier APK le plus récent a été trouvé.',
        data: latestAPK
      });
    } catch (error) {
      res.status(500).json({
        message: 'Une erreur est survenue.',
        error: error
      });
    }
  });
}

// Fonction pour comparer deux versions "x.x.x"
const compareVersions = (v1, v2) => {
  const version1 = v1.split('.').map(Number); // Convertir en nombres
  const version2 = v2.split('.').map(Number);

  for (let i = 0; i < Math.max(version1.length, version2.length); i++) {
    if ((version1[i] || 0) > (version2[i] || 0)) return 1;
    if ((version1[i] || 0) < (version2[i] || 0)) return -1;
  }
  return 0;
};

// Fonction pour scanner le dossier et trouver le fichier APK le plus récent
const getLatestAPK = (directoryPath) => {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        return reject('Erreur lors de la lecture du dossier : ' + err);
      }

      // Filtrer uniquement les fichiers qui correspondent à la nomenclature "nom_x.x.x.apk"
      const apkFiles = files.filter(file => file.match(/.+_(\d+\.\d+\.\d+)\.apk$/));

      if (apkFiles.length === 0) {
        return reject('Aucun fichier APK trouvé dans le dossier.');
      }

      let latestFile = apkFiles[0];  // Fichier par défaut (premier fichier)
      let latestVersion = latestFile.match(/_(\d+\.\d+\.\d+)\.apk$/)[1];

      apkFiles.forEach(file => {
        const versionMatch = file.match(/_(\d+\.\d+\.\d+)\.apk$/);
        if (versionMatch) {
          const currentVersion = versionMatch[1];
          if (compareVersions(currentVersion, latestVersion) > 0) {
            latestFile = file;
            latestVersion = currentVersion;
          }
        }
      });
      const baseUrl = "https://maquairecyril.com/curriculum/apk/";
      // Renvoyer les informations du fichier le plus récent
      const filePath = `${baseUrl}${latestFile}`;
      resolve({
        filename: latestFile,
        version: latestVersion,
        path: filePath
      });
    });
  });
};