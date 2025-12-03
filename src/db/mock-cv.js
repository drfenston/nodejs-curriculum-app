const mockCV = [{
    username: "admin",
    password: "$2a$10$hZcRKNriKXugJ4q6arMp4.9dph2MdG4GAvGLOOJpTqvj.biMNIzwi",
    cvs: [
        {
            poste: "Glandeur",
            nom: "Jean",
            prenom: "Paul",
            competenceTechniques: [{
                libelle: "Android",
                competence: "Lu, Ecrit, Parlé"
            }],
            formations: [
                {
                    dateDebut: "01/01/2016",
                    description: "Etudes de FDPuterie"
                }
            ],
            langues: [{
                origine: "Anglais",
                niveau: "Lu, écrit, parlé"
            }
            ],
            autres: [{
                id: 1,
                libelle: "coucou"
            }],
            experiences: [
                {
                    dateDebut: "Juin 2020",
                    dateFin: "Aout 2022",
                    entreprise: "McDo",
                    poste: "Responsable des frites",
                    projets: [
                        {
                            nom: "truc",
                            description: "Description du projet, il en faut bien une, en effet."
                        }
                    ]
                },
                {
                    dateDebut: "Février 2012",
                    dateFin: "Mai 2020",
                    entreprise: "Quick",
                    poste: "Responsable des burgers",
                    projets:[]
                }
            ]
        },
        {
            poste: "Restaurateur",
            nom: "Pierre",
            prenom: "Jacques",
            formations: [
                {
                    dateDebut: "01/01/2016",
                    description: "Etudes de FDPuterie"
                }
            ],
            autres: [
                { libelle: "pute" }, { libelle: "salope" }
            ],
            langues: [{
                origine: "Anglais",
                niveau: "Lu, écrit, parlé"
            }
            ],
            competenceTechniques: [],
            experiences: [
                {
                    dateDebut: "Juin 2020",
                    dateFin: "Aout 2022",
                    entreprise: "McDo",
                    poste: "Responsable des frites",
                    projets:[]
                },
                {
                    dateDebut: "Février 2012",
                    dateFin: "Mai 2020",
                    entreprise: "Quick",
                    poste: "Responsable des burgers",
                    projets:[]
                }
            ]
        }
    ]
}, {
    username: "Fenston",
    password: "$2a$10$hZcRKNriKXugJ4q6arMp4.9dph2MdG4GAvGLOOJpTqvj.biMNIzwi",
    cvs: [
        {
           "poste":"Glandeur",
           "profileImage":"59411463_10219446527816454_429016904443625472_n.jpg",
           "description":"Coucou !",
           "nom":"Buschemi",
           "prenom":"Sonic",
           "adresse1":"",
           "adresse2":"",
           "city":"Green Hill",
           "zipCode":"31330",
           "telephone":"0600000000",
           "apropos":"...",
           "mail":"drfenston@gmail.com",
           "website":"www.maquairecyril.com",
           "reseaux":"...",
           "formations":[
              {
                 "dateDebut":"avr. 2012",
                 "dateFin":"...",
                 "etablissement":"...",
                 "description":"...",
              },
              {
                 "dateDebut":"sept. 2015",
                 "dateFin":"mai 2018",
                 "etablissement":"...",
                 "description":"...",
              },
              {
                 "dateDebut":"...",
                 "dateFin":"...",
                 "etablissement":"...",
                 "description":"...",
              }
           ],
           "langues":[
              {
                 "origine":"Mexicain",
                 "niveau":"Langue Natale",
                 "percent":100,
              },
              {
                 "origine":"Egyptien",
                 "niveau":"...",
                 "percent":0,
              },
              {
                 "origine":"Espagnol",
                 "niveau":"Nul !",
                 "percent":16,
              }
           ],
           "autres":[
              {
                 "libelle":"123",
                 "description":"...",
              },
              {
                 "libelle":"6899",
                 "description":"...",
              },
              {
                 "libelle":"...",
                 "description":"...",
              },
              {
                 "libelle":"...",
                 "description":"...",
              }
           ],
           "competenceTechniques":[
              {
                 "icon":"...",
                 "libelle":"Cuisine",
                 "competence":"...",
                 "percent":70,
              },
              {
                 "icon":"...",
                 "libelle":"ReactJS",
                 "competence":"Lu,écrit",
                 "percent":50,
              }
           ],
           "experiences":[
              {
                 "dateDebut":"...",
                 "dateFin":"...",
                 "entreprise":"...",
                 "poste":"...",
                 "projets":[
                    
                 ]
              },
              {
                 "dateDebut":"Février 2012",
                 "dateFin":"Mai 2020",
                 "entreprise":"Quick",
                 "poste":"Responsable des burgers",
                 "projets":[
                    {
                       "nom":"Là",
                       "description":"Aussi",
                    }
                 ]
              },
              {
                 "dateDebut":"Juin 2013",
                 "dateFin":"Juillet 2014",
                 "entreprise":"Burger King",
                 "poste":"",
                 "projets":[
                    {
                       "nom":"...",
                       "description":"...",
                    },
                    {
                       "nom":"...",
                       "description":"...",
                    }
                 ]
              },
              {
                 "dateDebut":"Juin 2020",
                 "dateFin":"Aout 2022",
                 "entreprise":"McDo",
                 "poste":"Responsable des frites",
                 "projets":[
                    {
                       "nom":"truc",
                       "description":"Description du projet, il en faut bien une, en effet.",
                    }
                 ]
              }
           ]
        },
        {
           "poste":"Développeur Mobile / Web",
           "profileImage":"Autoportrait.png",
           "description":"Développeur Android depuis 2009, j'ai pu assister à l'évolution de cette plate forme en développant tout d'abord en Java, puis en Kotlin. En parallèle, j'ai travaillé sur divers projets en PHP et Javascript, ainsi que sur d'autres technologies.",
           "nom":"Maquaire",
           "prenom":"Cyril",
           "adresse1":"34A rue de la république",
           "adresse2":"",
           "city":"Grenade sur Garonne",
           "zipCode":"31330",
           "telephone":"0687806139",
           "apropos":"...",
           "mail":"contact@maquairecyril.com",
           "website":"www.maquairecyril.com",
           "reseaux":"...",
           "formations":[
              {
                 "dateDebut":"1999",
                 "dateFin":"2000",
                 "etablissement":"Université Paul Sabatier",
                 "description":"1ère année de DEUG MIAS",
              },
              {
                 "dateDebut":"2008",
                 "dateFin":"2009",
                 "etablissement":"Afpa Toulouse Palays",
                 "description":"Formation de DEVELOPPEUR LOGICIEL (Option JEE)",
              },
              {
                 "dateDebut":"2014",
                 "dateFin":"",
                 "etablissement":"Aelion",
                 "description":"Formation en développement d'applications iOS",
              }
           ],
           "langues":[
              {
                 "origine":"Français",
                 "niveau":"Langue maternelle",
                 "percent":100,
              },
              {
                 "origine":"Anglais",
                 "niveau":"Lu, écrit, parlé",
                 "percent":80,
              }
           ],
           "autres":[
              {
                 "libelle":"Dessin",
                 "description":"Crayon, aquarelle, numérique",
              },
              {
                 "libelle":"Littérature",
                 "description":"Science Fiction / Imaginaire",
              },
              {
                 "libelle":"Jeux vidéo",
                 "description":"PC, rétro",
              },
              {
                 "libelle":"Cinéma",
                 "description":"Cinéma de genre",
              }
           ],
           "competenceTechniques":[
              {
                 "icon":"...",
                 "libelle":"NodeJs",
                 "competence":"",
                 "percent":80,
              },
              {
                 "icon":"...",
                 "libelle":"ReactJs",
                 "competence":"",
                 "percent":80,
              },
              {
                 "icon":"...",
                 "libelle":"Android",
                 "competence":"Java, Kotlin + librairies communes (room, retrofit)",
                 "percent":100,
              }
           ],
           "experiences":[
              {
                 "dateDebut":"Déc. 2011",
                 "dateFin":"Nov. 2013",
                 "entreprise":"Index Multimedia",
                 "poste":"Chef de Produit",
                 "projets":[
                    {
                       "nom":"Mission Gate",
                       "description":"Développement d'un site de jeux sociaux mobiles en ligne",
                    },
                    {
                       "nom":"Xibalba",
                       "description":"Développement d'un jeu mobile sur Iphone et Android",
                    },
                    {
                       "nom":"OnitsukaTiger",
                       "description":"Développement d'un jeu mobile sur Iphone et Android",
                    },
                    {
                       "nom":"Kizunatag",
                       "description":"Développement d'un technologie de tag naturel",
                    },
                    {
                       "nom":"Planet SMS",
                       "description":"Développement d'un site d'envoi groupé de SMS",
                    }
                 ]
              },
              {
                 "dateDebut":"Mars 2021",
                 "dateFin":"Aout 2023",
                 "entreprise":"Neo Gestion Informatique",
                 "poste":"Développeur Android",
                 "projets":[
                    {
                       "nom":"Neo WMS",
                       "description":"Création d’une application de WMS, permettant la gestion d’entrepôts, via les processus de réception, de stockage, de préparation, de conditionnement, d’expédition et de suivi des stocks.",
                    },
                    {
                       "nom":"Neo Scan",
                       "description":"Evolution d’une application de gestion de commandes",
                    },
                    {
                       "nom":"Neo Livreur",
                       "description":"Evolution d’une application de gestion de livraisons",
                    }
                 ]
              },
              {
                 "dateDebut":"Sept. 2014",
                 "dateFin":"Déc. 2015",
                 "entreprise":"Ausy",
                 "poste":"Développeur Android",
                 "projets":[
                    {
                       "nom":"divers (X2I)",
                       "description":"X2I est une société spécialisée dans le développement Magento, en charge d’une trentaine de sites. J’ai réalisé du développement, du bugfix, ainsi que la migration de la plate-forme vers Magento 2.",
                    },
                    {
                       "nom":"Verizon (Intel)",
                       "description":"Customisation de l’interface utilisateur de la ROM Android Verizon afin d’accueillir leur nouvelle technologie de VOIP.",
                    },
                    {
                       "nom":"LBS (Insiteo)",
                       "description":"Insiteo développe une solution de géolocalisation indoor. Je me suis chargé de l’évolution du framework Insiteo 3.5 et du développement de la version 4.1.",
                    },
                    {
                       "nom":"Mail2AES (Living Objects)",
                       "description":"Développement d'une interface entre le back office du framework maison et un pool d’avertisseurs sonores répartis à travers la France.",
                    }
                 ]
              },
              {
                 "dateDebut":"Oct. 2010",
                 "dateFin":"Nov. 2011",
                 "entreprise":"SII",
                 "poste":"Ingénieur en nouvelles technologies",
                 "projets":[
                    {
                       "nom":"Ubleam (Ubleam)",
                       "description":"Développement d'une application de reconnaissance de Tags propriétaires",
                   },
                    {
                       "nom":"Meego (Intel)",
                       "description":"Développement d’un système d'exploitation et d’une plate-forme de développement pour les appareils mobiles open source et basé sur Linux",
                    },
                    {
                       "nom":"MyWay (Aéroports de Paris)",
                       "description":"Développement d'une application de géolocalisation indoor et de guidage pour le compte des aéroports de Paris.",
                    }
                 ]
              },
              {
                 "dateDebut":"Déc. 2015",
                 "dateFin":"Juin 2020",
                 "entreprise":"Insiteo",
                 "poste":"Lead Développer Android",
                 "projets":[
                    {
                       "nom":"LBS V5",
                       "description":"Conception et développement d’un nouvel SDK avec prise en charge de cartes 3D basé sur le moteur 3D Unity",
                    },
                    {
                       "nom":"LBS V3",
                       "description":"Développement d'une librairie de géolocalisation indoor avec guidage, cartographie et scan BLE.",
                    },
                    {
                       "nom":"LBS V4",
                       "description":"Conception et développement d’une nouvelle version de la librairie V3",
                    }
                 ]
              },
              {
                 "dateDebut":"Nov. 2012",
                 "dateFin":"Juillet 2014",
                 "entreprise":"Smart Reality",
                 "poste":"Développeur Android / PHP",
                 "projets":[
                    {
                       "nom":"Smart Tag",
                       "description":"Développement d'une nouvelle technologie de reconnaissance d'images à destination de smartphones.",
                    }
                 ]
              },
              {
                 "dateDebut":"Aout 2009",
                 "dateFin":"Oct. 2010",
                 "entreprise":"ViaMobility",
                 "poste":"Développeur Android / PHP",
                 "projets":[
                    {
                       "nom":"Me2",
                       "description":"Développement d’un lecteur de widgets universel pour plateformes mobiles. Formats de widgets supportés: Google et JIL (XML / HTML / JavaScript).",
                    }
                 ]
              }
           ]
        }
     ]
}
];

module.exports = mockCV