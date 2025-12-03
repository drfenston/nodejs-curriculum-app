const puppeteer = require('puppeteer');
const helper = require('../../helper.js');
const prefix = helper.prefix;
const path = require('path');
const { v4: uuidv4 } = require('uuid'); // Utilisation de la librairie 'uuid' pour générer un identifiant unique

module.exports = (app) => {
  app.get(prefix + '/api/getPdf', async (req, res) => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      // Désactiver le cache pour éviter de servir une version en cache
      await page.setCacheEnabled(false);

      // Forcer un User-Agent desktop
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3');

      // Définir un viewport large pour forcer la mise en page desktop
      await page.setViewport({
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1
      });

      // URL spécifique que tu veux charger
      const url = 'https://maquairecyril.com/print/4';
      await page.goto(url, { waitUntil: 'networkidle2' });

      // Supprimer la barre de navigation si nécessaire
      await page.evaluate(() => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
          navbar.style.display = 'none';
        }
      });

      // Générer un nom de fichier aléatoire avec UUID
      const randomFileName = `pdf_${uuidv4()}.pdf`;

      // Chemin du fichier PDF à générer
      const pdfPath = path.join(__dirname, randomFileName);

      // Générer le PDF
      await page.pdf({
        path: pdfPath,
        format: 'A4',
        printBackground: false,
        margin: {
          top: '20mm',
          bottom: '20mm',
          left: '10mm',
          right: '10mm'
        }
      });

      // Fermer le navigateur
      await browser.close();

      // Envoyer le PDF généré
      res.setHeader('Content-Type', 'application/pdf');
      res.download(pdfPath, randomFileName, (err) => {
        if (err) {
          res.status(500).json({
            message: 'Erreur lors de l\'envoi du fichier PDF.',
            error: err
          });
        }
      });

    } catch (error) {
      res.status(500).json({
        message: 'Une erreur est survenue.',
        error: error
      });
    }
  });
};
