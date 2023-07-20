const CategoriesTab = [
	{
		type: 'Composants et stockage',
		contenu: [
			{
				categorie: 'Composants de base',
				elements: [
					{
						nom: 'CPU / processeurs',
						autresElements: ['Processeurs - Ordinateurs de bureau', 'Processeurs - Serveurs', 'Processeurs - Mobiles'],
					},
					{
						nom: 'Mémoire',
						autresElements: [
							'Mémoire de bureau',
							"Mémoire d'ordinateur portable",
							'Cartes à mémoire',
							'Mémoire du serveur',
							'Mémoire spécifique du système',
							'Lecteurs flash USB',
							'Lecteurs de cartes',
							'Mémoire et refroidissement par chipset',
						],
					},
					{
						nom: 'Cartes mères',
						autresElements: [
							'AMD Cartes mères',
							'Cartes mères Intel',
							'Solutions intégrées',
							'Conseils de développement',
							'Accessoires pour cartes mères',
							'Cartes mères de serveurs',
							'Ventilateurs et dissipateurs thermiques',
							'Cartes à sous-ruban',
							'Câbles électriques internes',
							'Graisse du composé thermique',
						],
					},
					{
						nom: 'GPU et dispositifs vidéo de graphisme',
						autresElements: [
							'GPU / Cartes graphiques vidéo',
							'Lecteurs de médias et téléviseurs',
							'Cartes graphiques de station de travail',
							'Refroidissement VGA',
							'Accessoires pour cartes vidéo',
						],
					},
					{
						nom: "Cas d'ordinateur",
						autresElements: [
							"Cas d'ordinateur",
							'HTPC / Affaires du Centre des médias',
							'Châssis du serveur',
							'Accessoires pour étuis',
							"Ventilateurs de l'affaire",
							'Panneaux de contrôleur',
						],
					},
					{ nom: "Fournitures d'électricité", autresElements: ["Fournitures d'électricité", "Fournisseurs d'électricité"] },
					{
						nom: 'Ventilateurs et refroidissement PC',
						autresElements: [
							"Afants de l'affaire",
							'Ventilateurs et dissipateurs thermiques',
							'Refroidissement du disque dur',
							'Mémoire et refroidissement par chipset',
							'Composé thermique/graisse',
							'Refroidissement VGA',
							"Refroidissement de l'eau/liquide",
							'Plaquettes de refroidissement pour ordinateur portable',
						],
					},
					{
						nom: 'Barebone / Mini-ordinateurs',
						autresElements: ['Minos de cryptographie', 'Mini-PC Barebone', 'PC à abos', 'Accessoires Barebone'],
					},
					{
						nom: 'Composants de serveurs',
						autresElements: [
							'Processeurs - Serveurs',
							'Cartes mères de serveurs',
							'Mémoire du serveur',
							'Contrôleurs / Cartes RAID',
							"Groupe de la distribution d'électricité",
							'Châssis du serveur',
							"Fournisseurs d'électricité",
							'Serveurs / Armoires',
							'UPS',
						],
					},
					{ nom: 'Cartes sonorées', autresElements: ['Cartes sonorées', 'Accessoires de cartes sonorées'] },
				],
			},
			{
				categorie: 'Dispositifs de stockage',
				elements: [
					{
						nom: 'Disques durs',
						autresElements: [
							'DrOULements internes de bureau',
							"Enclencheurs durs internes d'ordinateurs portables",
							'Diffusés dur externes de bureau',
							'Entraînements durs externes portables',
							"Mac D'arbures",
							'Nuage personnel',
							'Contrôleurs / Cartes RAID',
							'Enceintes du disque dur/soupe SSD',
							'Refroidissement du disque dur',
							'Accessoires HDD/SSD',
							'Autres adaptateurs et perturbateurs pour les femmes',
						],
					},
					{
						nom: 'SSD',
						autresElements: [
							'SSD internes',
							"SSD d'entreprise",
							'SSD externes',
							'Autres adaptateurs et perturbateurs pour les femmes',
							'Accessoires HDD/SSD',
						],
					},
					{
						nom: 'Appareils de secours et médias',
						autresElements: ['Défis de secours', 'Médias de secours', 'Disquette de disquette'],
					},
					{
						nom: 'CD/DVD/Blu-Ray Burners et Media',
						autresElements: [
							'Blu-Ray Burners',
							'Diffusés Blu-Ray',
							'Blocage CD/DVD',
							'Drives CD/DVD',
							'Duplicateurs',
							'Téléviseurs externes CD/DVD/Blu-Ray',
							'CD/DVD / Blu-Ray Media',
							'Accessoires CD/DVD',
							'Câbles SATA / eSATA',
							'Câbles électriques internes',
						],
					},
					{
						nom: 'Lecteurs flash et cartes à mémoire USB',
						autresElements: ['Cartes à mémoire', 'Lecteurs de cartes', 'Lecteurs flash USB'],
					},
					{
						nom: 'Enceintes du disque dur',
						autresElements: null,
					},
					{
						nom: 'Stockage de réseau (SNA)',
						autresElements: ['NAS de bureau', 'NAS à montage en rack', 'Nuage personnel'],
					},
				],
			},
			{
				categorie: "Outils d'achat",
				elements: [
					{
						nom: 'NAS Builder',
						autresElements: null,
					},
					{
						nom: 'Fineur de mémoire',
						autresElements: null,
					},
					{
						nom: "Calculateur d'énergie wattve",
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Accessoires',
				elements: [
					{
						nom: 'Accessoires informatiques',
						autresElements: [
							'Cartes à sous-ruban',
							'Convertisseurs audio-vidéo',
							'Gestion câblée',
							'Lecteurs de cartes',
							'Accessoires pour étuis',
							'Glasses pour ordinateur',
							'Panneaux de contrôleur',
							'Enceintes du disque dur/soupe SSD',
							'Accessoires HDD/SSD',
							'Câbles HDMI',
							'Tapis de souris et accessoires pour clavier',
							'Câbles Ethernet de réseau',
							'Autres accessoires informatiques',
							'Outils et testeurs pour PC',
							'Bandes électriques',
							'Câbles USB',
							'Convertisseurs USB',
							"Adaptateurs d'affichage USB",
							'Gadgets USB',
						],
					},
					{
						nom: 'Protection de la puissance',
						autresElements: [
							"Groupe de la distribution d'électricité",
							'Onduleurs de puissance',
							'Bandes électriques',
							'Protecteurs de surtension',
							'UPS',
							'Accessoires UPS',
						],
					},
					{
						nom: 'Câbles',
						autresElements: [
							"Groupe de la distribution d'électricité",
							'Onduleurs de puissance',
							'Bandes électriques',
							'Protecteurs de surtension',
							'UPS',
							'Accessoires UPS',
							'Câbles de foudre',
							'Câbles USB',
							'Câbles DisplayPort',
							'Câbles DVI',
							'Câbles HDMI',
							'Mini câbles DisplayPort',
							'Câbles et adaptateurs Thunderbolt',
							'Câbles VGA/SVGA',
							'Câbles à instruments (professionnels)',
							'Câbles stéréo de 3,5 mm / 2,5 mm',
							'Câbles RCA',
							'Câbles à composants RCA',
							'Câbles composites RCA',
							'Câbles vidéo S',
							'Fils de haut-parleurs',
							'Toslink Câbles audio optiques numériques',
							'Cordons de puissance à courant alternatif pour ordinateur portable',
							"Cordes d'adaptateur pour ordinateur",
							"Cordes d'alimentation informatique",
							"Câbles d'extension d'énergie pour ordinateur",
							"Cordons d'électricité internationaux",
							"Cordes d'extension de puissance",
							'Cordes séparatrices électriques',
							'Câbles IDE',
						],
					},
					{
						nom: 'Adaptateurs et animateurs de genre',
						autresElements: [
							'Adaptateurs audio',
							'Convertisseurs audio-vidéo',
							'Écarts audio/vidéo',
							'Switch audio/vidéo',
							'Connecteurs',
							'Adaptateurs de données',
							'Convertisseurs de données',
							'Extenders et répéteurs',
							"Adaptateurs d'entraînement dur",
							'Adaptateurs modulaires',
							'Adaptateurs pour souris/clavier (PS2)',
							'Connecteurs de réseau/adaptateurs',
							'Adaptateurs de puissance',
							'USB / IEEE-1394 Adaptateurs Firewire',
							'Convertisseurs USB',
							"Adaptateurs d'affichage USB",
							'Adaptateurs vidéo',
							'Chargeurs et câbles',
							'Autres adaptateurs et perturbateurs pour les femmes',
						],
					},
					{
						nom: 'Commutateurs KVM',
						autresElements: null,
					},
					{
						nom: 'Plates-clés',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Remise à neuf',
				elements: [
					{
						nom: 'Composants de base remis à neuf',
						autresElements: null,
					},
					{
						nom: 'Périphériques remis à neuf',
						autresElements: null,
					},
					{
						nom: 'Dispositifs de stockage remis à neuf',
						autresElements: null,
					},
					{
						nom: 'Accessoires remis à neuf',
						autresElements: null,
					},
				],
			},
		],
	},
	{
		type: 'Systèmes informatiques',
		contenu: [
			{
				categorie: 'Systèmes de bureau',
				elements: [
					{
						nom: 'Ordinateurs de bureau',
						autresElements: ['Ordinateurs de bureau'],
					},
					{
						nom: 'Ordinateurs de jeux',
						autresElements: null,
					},
					{
						nom: 'Ordinateurs tout-en-un',
						autresElements: null,
					},
					{
						nom: 'Serveurs et postes de travail',
						autresElements: [
							'Systèmes de serveurs et de stations de travail',
							'Serveur Barebones',
							'Systèmes de clients minces',
							'Serveur Barebones',
							'Systèmes de clients minces',
							'NAS de bureau',
							'NAS à montage en rack',
							'Enveloppe du RAID / Sous-systèmes',
							'Contrôleurs / Cartes RAID',
							'Cartes mères de serveurs',
							'Processeurs - Serveurs',
							'Mémoire du serveur',
							'Châssis du serveur',
							"Fournisseurs d'électricité",
							'Servirs / Armoires',
							'UPS',
							'Accessoires de serveur',
							'Logiciel de serveur',
						],
					},
					{
						nom: 'Ordinateurs de bureau et mini-ordinateurs et mini-ordinateurs',
						autresElements: null,
					},
					{
						nom: 'Responsables de bureau',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Ordinateurs portables/ordinateurs portables',
				elements: [
					{
						nom: 'Ordinateurs portables/ordinateurs portables',
						autresElements: null,
					},
					{
						nom: 'Ordinateurs portables 2 en 1',
						autresElements: [
							'Ordinateurs portables 2 en 1',
							'2 en 1 Accessoires',
							'Diffusés dur externes de bureau',
							'Téléviseurs externes CD/DVD/Blu-Ray',
						],
					},
					{
						nom: 'Chromebooks',
						autresElements: null,
					},
					{
						nom: "Ordinateurs portables d'entreprise",
						autresElements: [
							"Ordinateurs portables d'entreprise",
							"Cartes d'ajout d'ordinateurs portables",
							'Batteries pour ordinateurs portables / adaptateurs à courant alternatif',
							"Enclencheurs durs internes d'ordinateurs portables",
							"Mémoire d'ordinateur portable",
							"Mise en réseau d'ordinateurs portables",
							'Plaquettes de refroidissement pour ordinateur portable',
							'Souris',
						],
					},
					{
						nom: "Systèmes d'écrans tactiles",
						autresElements: null,
					},
					{
						nom: 'Microsoft Surface',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Ordinateurs portables de jeu',
				elements: [
					{
						nom: 'Ordinateurs portables de jeu',
						autresElements: ['Ordinateurs portables de jeu', 'Clavier de jeu', 'Graines de jeu'],
					},
					{
						nom: 'Ordinateurs portables Intel de type 12e génération',
						autresElements: null,
					},
					{
						nom: 'Ordinateurs portables Intel Gaming de la 11e génération',
						autresElements: null,
					},
					{
						nom: 'Ordinateurs portables Intel Gaming de 10e génération',
						autresElements: null,
					},
					{
						nom: 'Série GeForce RTX',
						autresElements: null,
					},
					{
						nom: 'Série GeForce GTX',
						autresElements: null,
					},
				],
			},
			{
				categorie: "Outils d'achat",
				elements: [
					{
						nom: 'Fineur pour ordinateur portable',
						autresElements: null,
					},
					{
						nom: 'Finder de jeu pour PC',
						autresElements: null,
					},
					{
						nom: 'Fineur de mémoire',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Périphériques',
				elements: [
					{
						nom: 'Moniteurs',
						autresElements: ['Moniteurs LCD/DEL', 'Moniteurs de jeu', 'Moniteurs à écran tactile', 'Accessoires de moniteur'],
					},
					{
						nom: 'Clavier et souris',
						autresElements: [
							'Clés',
							'Clavier de jeu',
							'Souris',
							'Graines de jeu',
							'Tapis de souris et accessoires pour clavier',
							'Piles et chargeurs standard',
						],
					},
					{
						nom: "Casques d'écoute, haut-parleurs et cartes sonores",
						autresElements: [
							"Casques d'écoute et accessoires",
							'Casques de jeu',
							'Microphones',
							'Cartes sonorées',
							'Intervenants',
							'Accessoires de cartes sonorées',
						],
					},
					{
						nom: 'Imprimantes/Scanners et fournitures',
						autresElements: [
							'Imprimante/machines de gravure 3D',
							'Imprimantes laser',
							"Imprimantes à jet d'encre",
							'Imprimantes à matrice Dot',
							'Machines-froches et photocopieuses',
							"Code à barres et imprimantes d'étiquettes",
							'Scanner à code-barres',
							'Imprimante de réception',
							'Imprimantes de cartes',
							'Scanners de documents',
							'Scanners spécialisés',
							'Scanners à plat',
							"Cartouches d'encre (marques de sûreté)",
							"Cartouches d'encre (Aftermarket)",
							'Cartouches de toner (marques de sûreté)',
							'Cartéraproduits (après-vente)',
							"Serveurs d'impression réseau",
							"Rubans d'imprimante",
							"Câbles de l'imprimante (parallèle)",
							'Prélèvement et fournitures de scanner',
							'Câbles USB',
						],
					},
					{
						nom: "Dispositifs d'entrée",
						autresElements: [
							'Cartes à sous-ruban',
							'Glasses pour ordinateur',
							'Chaises de jeu',
							'Bureau des bureaux de jeux',
							'Clavier de jeu',
							'Graines de jeu',
							'Graphismes Comprimés',
							"Casques d'écoute et accessoires",
							'Clés',
							'Souris',
							'Microphones',
							'Contrôleurs de jeux PC',
							'Présentation des télécommandes',
							'Cartes sonorées',
							'Accessoires VR',
							'Casques VR',
							'Cams Web',
							'Câbles KVM',
							'Tapis de souris et accessoires pour clavier',
							'Autres adaptateurs et perturbateurs pour les femmes',
							'Accessoires de cartes sonorées',
						],
					},
					{
						nom: 'Protection de la puissance',
						autresElements: ['Onduleurs de puissance', 'Bandes électriques', 'Protecteurs de surtension', 'UPS', 'Accessoires UPS'],
					},
					{
						nom: 'Commutateurs KVM',
						autresElements: null,
					},
					{
						nom: 'Projecteurs',
						autresElements: [
							"Projecteurs d'entreprises",
							'Projecteurs de théâtre à domicile',
							'Accessoires pour projecteurs',
							'Lampes de projecteur',
							'Écrans de projecteurs',
						],
					},
					{
						nom: 'Impression 3D',
						autresElements: ['Imprimante/machines de gravure 3D', 'Scanners 3D', 'Filats', "Accessoires d'imprimantes 3D"],
					},
				],
			},

			{
				categorie: 'Remise à neuf',
				elements: [
					{
						nom: 'PC remis à neuf',
						autresElements: null,
					},
					{
						nom: 'Ordinateurs portables/ordinateurs portables',
						autresElements: null,
					},
					{
						nom: 'Ordinateurs portables de jeux remis à neuf',
						autresElements: null,
					},
					{
						nom: 'Pomme remise à neuf',
						autresElements: null,
					},
					{
						nom: 'Clavier et souris remis à neuf',
						autresElements: null,
					},
				],
			},
		],
	},
	{
		type: "Périphériques d'ordinateur",
		contenu: [
			{
				categorie: 'Moniteurs',
				elements: [
					{
						nom: 'Moniteurs LCD/DEL',
						autresElements: null,
					},
					{
						nom: 'Moniteurs de jeu',
						autresElements: null,
					},
					{
						nom: 'Moniteurs à écran tactile',
						autresElements: null,
					},
					{
						nom: 'Accessoires de moniteur',
						autresElements: null,
					},
					{
						nom: 'Moniteurs 5K / 4K / 2K',
						autresElements: null,
					},
					{
						nom: 'Moniteurs à pain',
						autresElements: null,
					},
					{
						nom: 'Moniteurs USB de type C',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Clavier et souris',
				elements: [
					{
						nom: 'Clés',
						autresElements: null,
					},
					{
						nom: 'Clavier de jeu',
						autresElements: null,
					},
					{
						nom: 'Souris',
						autresElements: null,
					},
					{
						nom: 'Graines de jeu',
						autresElements: null,
					},
					{
						nom: 'Clavier/combustibles pour les souris',
						autresElements: null,
					},
					{
						nom: 'Commutateurs KVM',
						autresElements: null,
					},
					{
						nom: 'Tapis de souris et accessoires pour clavier',
						autresElements: null,
					},
				],
			},
			{
				categorie: "Dispositifs d'entrée",
				elements: [
					{
						nom: "Casques d'écoute et accessoires",
						autresElements: null,
					},
					{
						nom: 'Casques de jeu',
						autresElements: null,
					},
					{
						nom: 'Graphismes Comprimés',
						autresElements: null,
					},
					{
						nom: 'Microphones',
						autresElements: null,
					},
					{
						nom: 'Contrôleurs de jeux PC',
						autresElements: null,
					},
					{
						nom: 'Cartes sonorées',
						autresElements: null,
					},
					{
						nom: 'Cams Web',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Imprimantes/Scanners et fournitures',
				elements: [
					{
						nom: 'Imprimantes 3D',
						autresElements: null,
					},
					{
						nom: 'Imprimantes laser',
						autresElements: null,
					},
					{
						nom: "Imprimantes à jet d'encre",
						autresElements: null,
					},
					{
						nom: "Code à barres et imprimantes d'étiquettes",
						autresElements: null,
					},
					{
						nom: 'Imprimante de réception',
						autresElements: null,
					},
					{
						nom: 'Scanners à plat',
						autresElements: null,
					},
					{
						nom: 'Scanners spécialisés',
						autresElements: null,
					},
				],
			},
			{
				categorie: "Encre d'imprimante et toner",
				elements: [
					{
						nom: "Cartouches d'encre (marques de sûreté)",
						autresElements: null,
					},
					{
						nom: 'Cartouches de toner (marques de sûreté)',
						autresElements: null,
					},
					{
						nom: "Cartouches d'encre (Aftermarket)",
						autresElements: null,
					},
					{
						nom: 'Cartéraproduits (après-vente)',
						autresElements: null,
					},
					{
						nom: 'Étiquettes et faiseurs de tag',
						autresElements: null,
					},
					{
						nom: 'Prélèvement et fournitures de scanner',
						autresElements: null,
					},
					{
						nom: "Rubans d'imprimante",
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Protection de la puissance',
				elements: [
					{
						nom: "Groupe de la distribution d'électricité",
						autresElements: null,
					},
					{
						nom: 'Onduleurs de puissance',
						autresElements: null,
					},
					{
						nom: 'Bandes électriques',
						autresElements: null,
					},
					{
						nom: 'Protecteurs de surtension',
						autresElements: null,
					},
					{
						nom: 'UPS',
						autresElements: null,
					},
					{
						nom: 'Accessoires UPS',
						autresElements: null,
					},
				],
			},
		],
	},
	{
		type: 'Appareils électroménagers',
		contenu: [
			{
				categorie: 'Appareils ménagers',
				elements: [
					{
						nom: 'Petits appareils de cuisine',
						autresElements: [
							'Boulenders',
							'Couches à pain',
							'Friteuses profondes',
							'Skillets électriques et teintures électriques',
							'Fondue',
							"Mélangeurs d'aliments",
							'Râpes alimentaires',
							'Crème glacée et créateurs de yaourt',
							'Éclateurs de glace',
							'Jus et extracteurs',
							'Micro-ondes',
							'Poppers de pop-corn',
							'Cuisinières en rôtissoire',
							'Cuisinières lentes et cuisinières à œufs',
							'Appareils de spécialité',
							'Vapeurs à vapeur',
							'Bouilloires et fabricants de thé glacé',
							'Pots thermos',
							'Fours à pizza et restaurants',
							'Grils à panini',
							'Scelleuses et cartouches à vide',
							'Gaufriers / Grils / Pizzelles / Paninis',
							'Plateaux chauffants',
							'Refroidisseurs de vin, de bière et accessoires',
						],
					},
					{
						nom: 'Cafetières',
						autresElements: [
							'Machines de combinaison',
							'Presse-agrumes et machines à corbeille à un seul écran',
							'Cafetières automatiques',
							'Broyeurs à café',
							'Machines à espresso / cappuccino',
						],
					},
					{
						nom: 'Réfrigérateurs',
						autresElements: null,
					},
					{
						nom: 'Cuisinières à induction',
						autresElements: null,
					},
					{
						nom: 'Cuisineurs à pression',
						autresElements: null,
					},
					{
						nom: 'Principaux applicateurs',
						autresElements: [
							'Lave-linge et sèche-linge',
							'Sèche-linge',
							'Lave-linge et sécheuse combinées',
							'Lave-linge',
							'Lave-vaisselle',
							"Pièces d'appareils électroménagers",
						],
					},
					{
						nom: "Filtration et distributeurs d'eau",
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Aspirateurs et soins au sol',
				elements: [
					{
						nom: 'Bâtiment et bus',
						autresElements: null,
					},
					{
						nom: 'Aspirations verticales',
						autresElements: null,
					},
					{
						nom: 'Tapis et nettoyants à vapeur',
						autresElements: null,
					},
					{
						nom: 'Aspirateurs à main',
						autresElements: null,
					},
					{
						nom: 'Aspirateurs en cartouches',
						autresElements: null,
					},
					{
						nom: 'Aspirations robotiques',
						autresElements: null,
					},
					{
						nom: "Accessoires d'aspiration",
						autresElements: null,
					},
				],
			},
			{
				categorie: "Chauffage, refroidissement et qualité de l'air",
				elements: [
					{
						nom: 'Climatiseurs',
						autresElements: null,
					},
					{
						nom: 'Filtres à air',
						autresElements: null,
					},
					{
						nom: "Purificateurs d'air",
						autresElements: null,
					},
					{
						nom: 'Chimenea et cheminées extérieures',
						autresElements: null,
					},
					{
						nom: 'Déshumidificateurs',
						autresElements: null,
					},
					{
						nom: 'Cheminées électriques',
						autresElements: null,
					},
					{
						nom: 'Ventilateurs',
						autresElements: null,
					},
					{
						nom: 'Chauffage',
						autresElements: null,
					},
					{
						nom: 'Humidificateurs',
						autresElements: null,
					},
				],
			},
		],
	},
	{
		type: 'Télévisuel et cinéma à domicile',
		contenu: [
			{
				categorie: 'Télévision et accessoires',
				elements: [
					{
						nom: 'TV à DEL',
						autresElements: null,
					},
					{
						nom: 'Combus de télévision',
						autresElements: null,
					},
					{
						nom: 'Joueurs de rayons Blu',
						autresElements: null,
					},
					{
						nom: 'Lecteurs de médias et téléviseurs',
						autresElements: null,
					},
					{
						nom: 'Supports de télévision et Mobilier AV',
						autresElements: null,
					},
					{
						nom: 'Montages de télévision et installer des accessoires',
						autresElements: null,
					},
					{
						nom: 'Antennes de télévision',
						autresElements: null,
					},
					{
						nom: 'Télécommandes universelles',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Théâtre à domicile',
				elements: [
					{
						nom: 'Projecteurs',
						autresElements: [
							"Projecteurs d'entreprises",
							'Projecteurs de théâtre à domicile',
							'Accessoires pour projecteurs',
							'Lampes de projecteur',
							'Écrans de projecteurs',
						],
					},
					{
						nom: 'Haut-parleurs audio à domicile',
						autresElements: null,
					},
					{
						nom: 'Théâtre à domicile dans une boîte',
						autresElements: null,
					},
					{
						nom: 'Barres acoustiques',
						autresElements: null,
					},
					{
						nom: 'Receveurs',
						autresElements: null,
					},
					{
						nom: "Systèmes d'étagères stéréo",
						autresElements: null,
					},
					{
						nom: 'Platines et cartouches',
						autresElements: null,
					},
					{
						nom: 'Accessoires pour le cinéma à domicile',
						autresElements: [
							'Accessoires audio/vidéo',
							'Lampes de remplacement DLP',
							'Accessoires pour projecteurs',
							'Supports et montures',
							'Accessoires de télévision',
						],
					},
				],
			},
			{
				categorie: 'Remise à neuf',
				elements: [
					{
						nom: 'Télévision et vidéo remises à neuf',
						autresElements: null,
					},
					{
						nom: 'Théâtre audio et à domicile remis à neuf',
						autresElements: null,
					},
				],
			},
		],
	},
	{
		type: 'Électronique',
		contenu: [
			{
				categorie: 'Téléphones portables',
				elements: [
					{
						nom: 'Téléphones cellulaires',
						autresElements: [
							'Téléphones cellulaires - déverrouillés',
							'Gadgets et portables',
							'Chargeurs et câbles',
							'Écouteurs et accessoires',
							'Spots chauds mobiles',
							"Casques d'écoute et d'orateurs NFC",
							'Montages, supports et poignées de téléphone',
							'Boosters de signaux',
							'Stylet',
							"Casques d'écoute et d'orateurs câblés",
							'Cartes SIM',
						],
					},
					{
						nom: "Piles, banques d'énergie et chargeurs",
						autresElements: [
							'Piles de téléphone portable',
							'Chargeurs et câbles',
							"Banques d'électricité",
							'Piles et chargeurs standard',
							'Chargeurs USB',
						],
					},
					{
						nom: 'Casques et accessoires Bluetooth',
						autresElements: ['Casques et accessoires Bluetooth', "Casques d'écoute et d'orateurs câblés"],
					},
					{
						nom: 'Cas et couvertures',
						autresElements: ['Cas et couvertures', 'Chargeurs et câbles', "Casques d'écoute et d'orateurs câblés"],
					},
					{
						nom: 'Accessoires pour téléphones portables',
						autresElements: [
							'Affaires',
							'Casques de téléphone portable',
							"Protecteur d'écran",
							"Banques d'électricité",
							'Chargeurs de téléphones portables',
							'Montages, supports et poignées de téléphone',
							'Boosseurs de signaux',
							'Stylet',
							'Accessoires de visualisation',
							'Chargeurs et câbles',
						],
					},
				],
			},
			{
				categorie: 'Électronique portable',
				elements: [
					{
						nom: 'Écouteurs',
						autresElements: ['Écouteurs et accessoires'],
					},
					{
						nom: 'Accessoires pour appareils photo numériques',
						autresElements: [
							"Accessoires de caméra d'action",
							'Jumelles et optiques',
							'Accessoires pour caméscopes',
							'Batteries et chargeurs pour caméscopes',
							'Kits de caméscopes',
							'Médias de caméscope',
							'Accessoires pour caméras',
							'Piles et chargeurs pour appareils photo',
							'Câbles et télécommandes',
							'Étuis pour caméras',
							'Docks de caméras',
							'Filtres de caméra',
							'Flashes de caméra',
							'Kits de caméras',
							'Lentilles de la caméra',
							'Trépieds de caméra',
							'Lecteurs de cartes',
							'Éclairage et studio',
							'Cartes à mémoire',
							'Piles et chargeurs standard',
						],
					},
					{
						nom: 'Appareils photo numériques',
						autresElements: [
							'Caméras DSLR',
							'Caméras sans rétroviseurs compacts',
							'Cauchettes à point et à tir',
							'Caméras rigides',
							"Caméras d'action",
							'Caméscopes grand public',
							'Caméras de film',
							'Caméscopes professionnels',
							'Cadres photo numériques',
						],
					},
					{
						nom: 'Dispositifs électroniques portables',
						autresElements: [
							'Écouteurs et accessoires',
							'Accessoires GPS',
							'Navigation GPS',
							'Lecteurs MP3/MP4',
							'Accessoires MP3/MP4',
							'Accessoires pour livres électroniques',
							'Lecteurs de livres électroniques',
							'Lecteurs de DVD portables',
							'Audio portable',
							'Radios',
							'Enregistreurs de voix',
							'Lecteurs de CD',
							'Joueurs de cassettes',
							'Boomboxes',
							'Radio par satellite',
							'PDA, Dictionnaires et traducteurs',
							'Assistant numérique personnel/Papiers portatifs Accessoires',
							'Radios à deux voies',
							'Lecteurs MiniDisc',
							'Accessoires pour appareils électroniques mobiles',
						],
					},
					{
						nom: 'Haut-parleurs portables',
						autresElements: ['Haut-parleurs portables'],
					},
				],
			},
			{
				categorie: 'Comprimés',
				elements: [
					{
						nom: 'Comprimés',
						autresElements: ['Comprimés', "Projecteurs d'entreprises", 'Projecteurs de théâtre à domicile', 'Accessoires pour projecteurs'],
					},
					{
						nom: 'Comprimés Android',
						autresElements: null,
					},
					{
						nom: 'Tablettes de fenêtres',
						autresElements: null,
					},
					{
						nom: 'Véritables accessoires pour comprimés',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Vêtus',
				elements: [
					{
						nom: 'Montres intelligentes',
						autresElements: null,
					},
					{
						nom: "Traqueurs d'activité",
						autresElements: null,
					},
					{
						nom: 'Technologie portable',
						autresElements: null,
					},
					{
						nom: 'Étuis Smartwatch',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Électronique spécialisée',
				elements: [
					{
						nom: 'Pomme',
						autresElements: null,
					},
					{
						nom: 'Énergie de remplacement',
						autresElements: ['Eco Gadgets', 'Solaire'],
					},
					{
						nom: 'Produits compatibles avec les applications',
						autresElements: null,
					},
					{
						nom: 'Gadgets',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Remise à neuf',
				elements: [
					{
						nom: 'Électronique remise à neuf',
						autresElements: null,
					},
					{
						nom: 'Téléphones cellulaires remis à neuf',
						autresElements: null,
					},
				],
			},
		],
	},
	{
		type: 'Jeux et réalité virtuelle',
		contenu: [
			{
				categorie: 'Xbox',
				elements: [
					{
						nom: 'Xbox Series X et S Console',
						autresElements: null,
					},
					{
						nom: 'Xbox Series X et S Games',
						autresElements: null,
					},
					{
						nom: 'Xbox Series X et S Accessoires',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'PlayStation',
				elements: [
					{
						nom: 'Console PS5',
						autresElements: null,
					},
					{
						nom: 'PS5 Jeux vidéo',
						autresElements: null,
					},
					{
						nom: 'Accessoires PS5',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Réalité virtuelle',
				elements: [
					{
						nom: 'Casques VR',
						autresElements: null,
					},
					{
						nom: 'Accessoires VR',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Jeu de poche',
				elements: [
					{
						nom: 'Console de jeu portative',
						autresElements: null,
					},
					{
						nom: 'Accessoires de jeu portatifs',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'PC Gaming',
				elements: [
					{
						nom: 'Ordinateurs de jeux',
						autresElements: null,
					},
					{
						nom: 'Ordinateurs portables de jeu',
						autresElements: null,
					},
					{
						nom: 'Moniteurs de jeu',
						autresElements: null,
					},
					{
						nom: 'Chaises de jeu',
						autresElements: null,
					},
					{
						nom: 'Bureau des bureaux de jeux',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Nintendo',
				elements: [
					{
						nom: 'Console Nintendo Switch',
						autresElements: null,
					},
					{
						nom: 'Nintendo Switch Jeux vidéo',
						autresElements: null,
					},
					{
						nom: 'Accessoires Nintendo Switch',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Jeux numériques',
				elements: [
					{
						nom: 'Jeux téléchargeables',
						autresElements: null,
					},
					{
						nom: 'Affiliation à un jeu et carte-cadeau',
						autresElements: null,
					},
				],
			},
			{
				categorie: "Outils d'achat",
				elements: [
					{
						nom: 'Affiliation à un jeu et carte-cadeau',
						autresElements: null,
					},
					{
						nom: "Guide d'achat de la chaire de jeux",
						autresElements: null,
					},
					{
						nom: 'Comment choisir le meilleur bureau de jeu',
						autresElements: null,
					},
				],
			},
		],
	},
	{
		type: 'La mise en réseau',
		contenu: [
			{
				categorie: 'Réseaux à domicile',
				elements: [
					{
						nom: 'Réseaux sans fil',
						autresElements: ['Foyer entier/Wifi maillé', 'Accessoires câblés et sans fil', 'Adaptateurs sans fil'],
					},
					{
						nom: 'Wifi à domicile entier',
						autresElements: null,
					},
					{
						nom: 'Routeurs sans fil',
						autresElements: null,
					},
					{
						nom: 'Modems/voies de portes',
						autresElements: null,
					},
					{
						nom: 'Extender/pont des médias sans fil',
						autresElements: null,
					},
					{
						nom: "Réseaux d'électricité",
						autresElements: null,
					},
					{
						nom: 'VoIP',
						autresElements: null,
					},
					{
						nom: 'Adaptateurs Bluetooth',
						autresElements: null,
					},
					{
						nom: 'Acteurs de médias de réseau',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Réseaux commerciaux',
				elements: [
					{
						nom: 'Réseaux câblés',
						autresElements: ['Modules de commutation', 'Plates-clés', 'Émetteurs-récepteurs de réseau'],
					},
					{
						nom: 'Interrupteurs',
						autresElements: null,
					},
					{
						nom: 'PSP sans fil',
						autresElements: null,
					},
					{
						nom: 'Pare-feu / appareils de sécurité',
						autresElements: null,
					},
					{
						nom: 'Stockage de réseau (SNA)',
						autresElements: ['NAS de bureau', 'NAS à montage en rack', 'Nuage personnel'],
					},
					{
						nom: "Cartes d'interface réseau",
						autresElements: null,
					},
					{
						nom: 'Routeurs câblés',
						autresElements: null,
					},
					{
						nom: "Serveurs d'impression réseau",
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Accessoires',
				elements: [
					{
						nom: 'Injecteur POE',
						autresElements: null,
					},
					{
						nom: 'Accessoires câblés',
						autresElements: null,
					},
					{
						nom: 'Câbles Ethernet de réseau',
						autresElements: null,
					},
					{
						nom: 'Antennes de réseau',
						autresElements: null,
					},
					{
						nom: 'Adaptateurs MoCA',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Remise à neuf',
				elements: [
					{
						nom: 'Routeurs sans fil remis à neuf',
						autresElements: null,
					},
					{
						nom: 'Extender de portée reprochauffée',
						autresElements: null,
					},
					{
						nom: 'Réseaux filaires remis à neuf',
						autresElements: null,
					},
					{
						nom: 'Commutateurs remis à neuf',
						autresElements: null,
					},
					{
						nom: 'Téléphone remis à neuf - VOIP',
						autresElements: null,
					},
				],
			},
		],
	},
	{
		type: 'Maison intelligente et sécurité',
		contenu: [
			{
				categorie: 'Foyer intelligent',
				elements: [
					{
						nom: 'Automatisation intelligente de la maison',
						autresElements: ['Capteurs de commande'],
					},
					{
						nom: 'Serrures et accès à portes intelligentes',
						autresElements: null,
					},
					{
						nom: 'Fiche intelligente et LED',
						autresElements: null,
					},
					{
						nom: 'Huile et kits intelligents',
						autresElements: null,
					},
					{
						nom: 'Thermostats intelligents',
						autresElements: null,
					},
					{
						nom: 'Capteur intelligent et alarmes',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Dispositifs de sécurité',
				elements: [
					{
						nom: 'Camisques de sécurité et surveillance',
						autresElements: ['Sûreté et sécurité à domicile', 'Surveillance sans fil'],
					},
					{
						nom: 'Caméra de réseau IP/Caméra',
						autresElements: null,
					},
					{
						nom: 'Systèmes de surveillance de sécurité',
						autresElements: null,
					},
					{
						nom: 'Caméra de télévision en circuit fermé/caméras analogiques',
						autresElements: null,
					},
					{
						nom: 'Enregistreurs vidéo',
						autresElements: null,
					},
					{
						nom: 'Accessoires de surveillance',
						autresElements: null,
					},
					{
						nom: 'Logiciels de surveillance',
						autresElements: null,
					},
				],
			},
			{
				categorie: "Outils d'achat",
				elements: [
					{
						nom: 'Smart Living Blog',
						autresElements: null,
					},
				],
			},
		],
	},
	{
		type: 'Solutions de bureau',
		contenu: [
			{
				categorie: 'Affichage et impression',
				elements: [
					{
						nom: 'Imprimantes/Scanners et fournitures',
						autresElements: [
							'Imprimante/machines de gravure 3D',
							'Filats',
							'Imprimantes laser',
							"Imprimantes à jet d'encre",
							'Scanners 3D',
							'Scanners de documents',
							'Imprimantes à matrice Dot',
							'Scanners à plat',
							'Scanners spécialisés',
							"Serveurs d'impression réseau",
							"Cartouches d'encre (marques de sûreté)",
							"Cartouches d'encre (Aftermarket)",
							'Cartouches de toner (marques de sûreté)',
							'Cartéraproduits (après-vente)',
							"Rubans d'imprimante",
							"Accessoires d'imprimantes 3D",
							"Câbles de l'imprimante (parallèle)",
							'Prélèvement et fournitures de scanner',
							'Câbles USB',
						],
					},
					{
						nom: 'Signalisation numérique',
						autresElements: [
							'Lecteurs de supports de signalisation numérique',
							'Kiosque de signalisation numérique',
							'Affichages commerciaux',
							'TVs commerciales',
							'Signalisation numérique interactive',
							'Murs vidéo',
							"Accessoires d'application numérique",
						],
					},
					{
						nom: 'Moniteurs',
						autresElements: ['Moniteurs LCD/DEL', 'Moniteurs de jeu', 'Moniteurs à écran tactile', 'Accessoires de moniteur'],
					},
					{
						nom: 'Projecteurs',
						autresElements: [
							"Projecteurs d'entreprises",
							'Projecteurs de théâtre à domicile',
							'Accessoires pour projecteurs',
							'Lampes de projecteur',
							'Écrans de projecteurs',
						],
					},
					{
						nom: "Encre d'imprimante et toner",
						autresElements: [
							"Cartouches d'encre (marques de sûreté)",
							'Cartouches de toner (marques de sûreté)',
							"Cartouches d'encre (Aftermarket)",
							'Cartéraproduits (après-vente)',
							"Rubans d'imprimante",
						],
					},
				],
			},
			{
				categorie: 'Point de vente',
				elements: [
					{
						nom: 'Point de vente',
						autresElements: [
							'Lecteur de cartes de crédit',
							'Moniteurs de points de vente',
							'Cabaruttes de signature',
							'Terminal POS',
							'Traitement des espèces',
							'Clavier POS',
							'POS Ordinateur',
							'Affichage des pôles',
							'Logiciels POS',
							'Système POS',
							'Compotrage mobile',
							'Papier récépissé',
							'Rubans de réception',
							'Accessoires informatiques mobiles',
							'Accessoires POS',
						],
					},
					{
						nom: "Code à barres et imprimantes d'étiquettes",
						autresElements: null,
					},
					{
						nom: 'Imprimantes de cartes',
						autresElements: null,
					},
					{
						nom: 'RFID',
						autresElements: null,
					},
					{
						nom: 'Systèmes portatifs/mobiles',
						autresElements: null,
					},
					{
						nom: 'Scanner à code-barres',
						autresElements: null,
					},
					{
						nom: 'Imprimante de réception',
						autresElements: null,
					},
					{
						nom: 'Scanner de contrôle',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Technologie des bureaux',
				elements: [
					{
						nom: 'Équipement de bureau et mobilier',
						autresElements: [
							'Imprimante/machines de gravure 3D',
							'Scanners 3D',
							"Projecteurs d'entreprises",
							'Filats',
							'Projecteurs de théâtre à domicile',
							'Scanners de documents',
							'Scanners à plat',
							'Scanners spécialisés',
							"Accessoires d'imprimantes 3D",
							'Laminage et reliure',
							'Accessoires de moniteur',
							'Accessoires pour projecteurs',
						],
					},
					{
						nom: 'Téléphones / VoIP',
						autresElements: [
							'Machines à répondre',
							'Téléphones filaires',
							'Téléphones sans fil',
							'Pièces de rechange',
							'Téléphone et dispositifs de conférence',
							'Accessoires de téléphone',
							'Téléphones téléphoniques',
							'Radios à deux voies',
							'VoIP',
						],
					},
					{
						nom: 'Scanners',
						autresElements: ['Scanners de documents', 'Scanners spécialisés', 'Scanners à plat'],
					},
					{
						nom: 'Calculateurs',
						autresElements: ['Scanners de documents', 'Scanners spécialisés', 'Scanners à plat'],
					},
					{
						nom: 'Machines-froches et photocopieuses',
						autresElements: null,
					},
					{
						nom: 'Étiquettes et faiseurs de tag',
						autresElements: null,
					},
					{
						nom: 'Coffres-forts',
						autresElements: null,
					},
					{
						nom: 'Déchiqueteuses et fournitures de déchaufrage',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Mobilier',
				elements: [
					{
						nom: 'Mobilier de bureau',
						autresElements: ['Mobilier de bureau', 'Chaises, tabourets et accessoires de sièges'],
					},
					{
						nom: 'Bibliothèques et huttes',
						autresElements: null,
					},
					{
						nom: 'Chariots et supports',
						autresElements: null,
					},
					{
						nom: 'Chaise, Chaise Tapis et Accessoires',
						autresElements: null,
					},
					{
						nom: 'Accessoires et organisateurs de bureaux',
						autresElements: null,
					},
					{
						nom: 'Bureaux et supports pour ordinateurs portables',
						autresElements: null,
					},
					{
						nom: 'Cabinets de dossiers',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Fournitures de bureaux',
				elements: [
					{
						nom: "Fournitures de bureau et d'école",
						autresElements: [
							'Petite chambre et nettoyage',
							'Fournitures pour bateaux et fournitures de classe',
							'Installation et équipement de sécurité routière',
							'Équipement de protection individuelle',
						],
					},
					{
						nom: 'Arts et métiers',
						autresElements: [
							'Peinture artisanale',
							'Artisans en tissu',
							'Encadrement',
							'Artisanat et accessoires généraux',
							'Artisanat et cartons de papier',
							'Dessin et illustration',
							'Bijoux et perles',
							'Fournitures pour les Parties',
							'Poterie, céramique et sculpture',
							'Printmaking',
							'Fournitures de studios',
						],
					},
					{
						nom: 'Fournitures de bureau',
						autresElements: [
							'Clips, fixations et bandes de caoutchouc',
							'Timbres et fournitures',
							'Staplificateurs et poinçons à trous',
							'Notes et drapeaux collants',
							'Dispositifs de coupe et de mesure',
							'Ruban adhésif et fixations',
							'Rédaction et fournitures de correction',
						],
					},
					{
						nom: 'Fournitures éducatives',
						autresElements: null,
					},
					{
						nom: 'Dépôt et organisateurs',
						autresElements: [
							'Titulaires de littérature et ortardateurs',
							'Liants et accessoires',
							'Calendriers et planificateurs',
							'Cartes et classement des cartes',
							'Dossiers et accessoires pour fichiers',
							'Fournitures pour le stockage et les archives',
						],
					},
					{
						nom: 'Papier et supports imprimables',
						autresElements: ["Formulaires d'affaires et d'impôts", 'Tampons et tampons encreurs', 'Documents'],
					},
					{
						nom: "Présentation/plans d'affichage",
						autresElements: [
							"Conseils d'administration",
							'Easels et tampons de facilité',
							'Cartes et accessoires',
							'Matériel de présentation et fournitures',
						],
					},
				],
			},
			{
				categorie: 'Fournitures par courrier et stocks',
				elements: [
					{
						nom: 'Transports maritimes et courrier',
						autresElements: ['Fournitures pour le transport maritime et le courrier'],
					},
					{
						nom: 'Enveloppes',
						autresElements: null,
					},
					{
						nom: 'Signes',
						autresElements: null,
					},
					{
						nom: "Entrepôts et fournitures d'inventaire",
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Remise à neuf',
				elements: [
					{
						nom: 'Moniteurs remis à neuf',
						autresElements: null,
					},
					{
						nom: 'Imprimantes remises à neuf',
						autresElements: null,
					},
				],
			},
			{
				categorie: "Outils d'achat",
				elements: [
					{
						nom: 'Fineur de mémoire',
						autresElements: null,
					},
				],
			},
		],
	},
	{
		type: 'Logiciels et services',
		contenu: [
			{
				categorie: 'Logiciels',
				elements: [
					{
						nom: "Systèmes d'exploitation",
						autresElements: null,
					},
					{
						nom: 'Bureau et comptabilité',
						autresElements: null,
					},
					{
						nom: "Antivirus et sécurité de l'Internet",
						autresElements: null,
					},
					{
						nom: 'Audio et vidéo',
						autresElements: null,
					},
					{
						nom: 'Photo et conception',
						autresElements: null,
					},
					{
						nom: 'Logiciel de serveur',
						autresElements: null,
					},
					{
						nom: "Sauvegarde et services d'utilité publique",
						autresElements: null,
					},
					{
						nom: 'Logiciels universitaires',
						autresElements: null,
					},
					{
						nom: 'Langues et apprentissage',
						autresElements: null,
					},
					{
						nom: 'Licences',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Logiciels téléchargeables',
				elements: [
					{
						nom: 'Jeux téléchargeables',
						autresElements: null,
					},
					{
						nom: 'Antivirus et sécurité Internet - Téléchargement',
						autresElements: null,
					},
					{
						nom: 'Bureau et comptabilité - Téléchargement',
						autresElements: null,
					},
					{
						nom: 'Photo et conception - Téléchargement',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Cartes-cadeaux',
				elements: [
					{
						nom: 'En ligne',
						autresElements: null,
					},
					{
						nom: 'Jeu',
						autresElements: null,
					},
					{
						nom: 'Restaurants',
						autresElements: null,
					},
					{
						nom: 'Vêtements et chaussures',
						autresElements: null,
					},
					{
						nom: 'Grands magasins',
						autresElements: null,
					},
					{
						nom: 'Compagnies aériennes et voyages',
						autresElements: null,
					},
					{
						nom: 'Commerce de spécialité',
						autresElements: null,
					},
					{
						nom: 'Cartes-cadeaux Newegg',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Services et médias',
				elements: [
					{
						nom: 'Cartes-cadeaux',
						autresElements: null,
					},
					{
						nom: 'CPS de service prioritaire pour les consommateurs',
						autresElements: null,
					},
					{
						nom: 'DVD, Blu-ray - Films et télévision',
						autresElements: null,
					},
				],
			},
		],
	},
	{
		type: 'Automobile et Outils',
		contenu: [
			{
				categorie: 'Électronique automobile',
				elements: [
					{
						nom: 'Alarmes de voiture, sécurité et démarrage à distance',
						autresElements: null,
					},
					{
						nom: 'Amplificateurs de voiture',
						autresElements: null,
					},
					{
						nom: 'Accessoires pour appareils électroniques de voiture',
						autresElements: null,
					},
					{
						nom: 'Orateurs de voitures',
						autresElements: null,
					},
					{
						nom: 'Sous-woofers de voiture',
						autresElements: null,
					},
					{
						nom: 'Navigation GPS',
						autresElements: null,
					},
					{
						nom: 'Systèmes de caméra embarqués',
						autresElements: null,
					},
					{
						nom: 'Unités et récepteurs',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Pièces automobiles',
				elements: [
					{
						nom: 'Éclairage de spécialité automobile',
						autresElements: null,
					},
					{
						nom: 'Produits de soins de la voiture',
						autresElements: ['Kits de nettoyage', 'Soins extérieurs', 'Gardes intérieures', 'Pneus et soins des roues', 'Soins au verre'],
					},
					{
						nom: 'Accessoires extérieurs',
						autresElements: null,
					},
					{
						nom: 'Pièces et accessoires pour leres',
						autresElements: [
							'Gestion des cargaisons, racks et extensions',
							'Système de freinage',
							'Éclairage électrique',
							'Batteries et allumage',
							"Systèmes d'admission d'air et de carburant",
							'Pièces et accessoires pour moteurs',
							'Sièges',
							'Contrôles',
							'Pare-brise',
							'Rétroviseurs',
							'Jauges et tirets',
						],
					},
					{
						nom: 'Accessoires intérieurs',
						autresElements: [
							'Couvres et accessoires pour sièges',
							'Tapis de sol et doublures de chargement',
							'Roues et accessoires de direction',
						],
					},
					{
						nom: 'Peinture, corps et garniture',
						autresElements: null,
					},
					{
						nom: 'Pneus et roues',
						autresElements: [
							'Pneumatiques',
							'Roues',
							'Pneus et soins des roues',
							'Accessoires - Roues',
							'Hubcaps et housses',
							'Vis de lame',
							'Pneus et assemblages de roues',
						],
					},
				],
			},
			{
				categorie: 'Outils et équipements',
				elements: [
					{
						nom: 'Outils électriques',
						autresElements: [
							'Outils électriques',
							'Autre puissance',
							'Aliments électriques et pneumatiques',
							'Perceuses électriques et ferragesements',
							'Scies électriques',
						],
					},
					{
						nom: 'Outils et accessoires pour les mains',
						autresElements: [
							'Marteaux à main et outils de frappe',
							'Tournevis à main et nutdrivers',
							'Clés à main et pinces',
							'Autres outils à main',
							'Aliments électriques et pneumatiques',
						],
					},
					{
						nom: 'Stockage de garage',
						autresElements: ["Stockage de l'outil"],
					},
					{
						nom: 'Outils électriques',
						autresElements: null,
					},
					{
						nom: 'Sûreté et sécurité',
						autresElements: [
							"Obstacles à l'accès et contrôle des clés",
							'Installation et équipement de sécurité routière',
							'Premiers secours, soins médicaux et de sauvetage',
							'Composants des systèmes hydrauliques',
							'Brosses à peinture, rouleaux et pulvérisateurs',
							'Équipement de protection individuelle',
							'Coffres-forts',
							'Sécurité',
							'Surveillance - Industrie',
							"Entrepôts et fournitures d'inventaire",
						],
					},
				],
			},
			{
				categorie: 'Sports de pouvoir et RV',
				elements: [
					{
						nom: 'Pouvoirs',
						autresElements: null,
					},
					{
						nom: 'Pièces marines',
						autresElements: [
							"Obstacles à l'accès et contrôle des clés",
							'Installation et équipement de sécurité routière',
							'Premiers secours, soins médicaux et de sauvetage',
							'Composants des systèmes hydrauliques',
							'Brosses à peinture, rouleaux et pulvérisateurs',
							'Équipement de protection individuelle',
							'Coffres-forts',
							'Sécurité',
							'Surveillance - Industrie',
							"Entrepôts et fournitures d'inventaire",
						],
					},
					{
						nom: 'Aviation',
						autresElements: ["GPS de l'aviation"],
					},
					{
						nom: 'Pièces détachées et accessoires pour RV',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Outils automobiles',
				elements: [
					{
						nom: 'Démarreurs à saut, chargeurs de batterie et puissance portable',
						autresElements: null,
					},
					{
						nom: 'Applicateurs',
						autresElements: null,
					},
					{
						nom: 'Outils de système électrique',
						autresElements: null,
					},
					{
						nom: "Outils de système d'alimentation en carburant",
						autresElements: null,
					},
					{
						nom: "Outils de prise d'allumage et d'allumage",
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Industrie',
				elements: [
					{
						nom: 'Groupes électrogènes et fournitures électriques',
						autresElements: [
							'Disjoncteurs et protection des lignes',
							'Récipients de sortie électrique',
							'Commutateurs de temporisation électriques',
							'Fuseurs',
							'Pièces et accessoires pour groupes électrogènes',
							'Accessoires pour générateurs industriels',
							"Fournitures d'électricité industrielle",
							'Relais',
							'Commutateurs de sécurité et déconnexion',
							'Transformateurs',
						],
					},
					{
						nom: 'Entretien du sol et équipement extérieur',
						autresElements: [
							'Bâtiments et abris de stockage',
							'Fournitures pour les exploitations agricoles et les ranchs',
							'Clôture',
							'Garages, recyclage et entretien au sol',
						],
					},
					{
						nom: 'CHAMB',
						autresElements: [
							'AC - Pièces frigorifiques et accessoires',
							"Distribution d'air, travaux sur les conduits et ventilation",
							"Traitement de l'air",
							'Soufflants',
							'Climatisation commerciale',
							'Chauffage commercial',
							'Commandes CVC',
							'Ventilateurs de refroidissement industriel',
							'Thermostats',
						],
					},
					{
						nom: 'Sûreté et sécurité',
						autresElements: [
							"Obstacles à l'accès et contrôle des clés",
							'Installation et équipement de sécurité routière',
							'Premiers secours, soins médicaux et de sauvetage',
							'Composants des systèmes hydrauliques',
							'Brosses à peinture, rouleaux et pulvérisateurs',
							'Équipement de protection individuelle',
							'Coffres-forts',
							'Sécurité',
							'Surveillance - Industrie',
							"Entrepôts et fournitures d'inventaire",
						],
					},
					{
						nom: 'Machines et magasin de machines',
						autresElements: [
							"Signalisation de l'automatisation",
							'Commande, Équipement de commutation et affichages',
							'Démarreurs électriques et contacteurs',
							'Composants des systèmes hydrauliques',
							'Lubrifiants, concatons et fluides',
							"Matériel d'atelier de machines",
							'Machines',
							'Moteurs de machines et de pièces détachées',
							'Transmission de puissance, roulements et ceintures en V',
							'Matières premières',
						],
					},
					{
						nom: 'Puissance extérieure',
						autresElements: [
							"Signalisation de l'automatisation",
							'Commande, Équipement de commutation et affichages',
							'Démarreurs électriques et contacteurs',
							'Composants des systèmes hydrauliques',
							'Lubrifiants, concatons et fluides',
							"Matériel d'atelier de machines",
							'Machines',
							'Moteurs de machines et de pièces détachées',
							'Transmission de puissance, roulements et ceintures en V',
							'Matières premières',
						],
					},
					{
						nom: 'Peinture',
						autresElements: ['Brosses à peinture, rouleaux et pulvérisateurs', 'Peintures et taches', 'Sheeting and Tarps'],
					},
					{
						nom: 'Tuyaux, robinets et raccords',
						autresElements: ['Montages et accouplements', 'Tuyaux, tuyaux et tuyauterie', 'Pompes et accessoires', 'Soupapes'],
					},
				],
			},
		],
	},
	{
		type: 'Maison et extérieur',
		contenu: [
			{
				categorie: 'Vie à domicile',
				elements: [
					{
						nom: 'Décoration',
						autresElements: ['Montages et accouplements', 'Tuyaux, tuyaux et tuyauterie', 'Pompes et accessoires', 'Soupapes'],
					},
					{
						nom: 'Mobilier',
						autresElements: [
							'Racks de boulangers',
							'Tapis de bar',
							'Pièces et accessoires de rechange pour lits',
							'Accents de la chambre à coucher',
							'Ensembles de chambres',
							'Lits',
							'Présidents',
							'Cabinets et panneaux latéraux de la Chine',
							'Organisation de placards - Étanche',
							'Étagères décoratives',
							'Tables, chaises et ensembles',
							'Entrée et halls',
							'Accessoires pour cheminée',
							'Tables de jeux',
							'Divertissement à domicile',
							'Cuisson des îles/chariots',
							'Matelas et fondations',
							'Tableaux occasionnels',
							'Ottomans et taboures',
							'Ottomans et taboures',
							'Reclinateurs',
							'Canapés et sections',
						],
					},
					{
						nom: 'Mobilier de jardin',
						autresElements: [
							'Étagères à livres',
							'Étagères décoratives',
							'Ensembles de bureau et de chaise',
							'Desks',
							'Cabinets de dossiers',
							'Chaises de jeu',
							'Bureau des bureaux de jeux',
							'Chaises de bureau',
							'Mobilier de bureau',
						],
					},
					{
						nom: 'Cuisine et repas',
						autresElements: [
							'Fournitures de décoration de gâteau',
							'Matériaux de boulangerie',
							'Outils et gadgets de boulangerie',
							'Outils et accessoires de barres',
							'Ouvre-porte-portes',
							'Fournitures de canlanges',
							'Canning - Préservatif',
							'Colanders et tendeurs',
							'Ustensiles de cuisson',
							'Ustensiles de cuisine',
							'Ustensiles de cuisine',
							'Pièces de coupe et de soucoupes',
							'Couvertes',
							'Couvertes',
							'Conseils de coupe',
							'Cuves à manger',
							'Ensembles de vaisselle',
							'Ustensiles de boisson',
							'Vaisselle blé',
							'Usines et moulins à rique',
							'Stockage alimentaire',
							'Fruits et outils végétaux',
							'Râches',
							'Gadgets à domicile',
						],
					},
					{
						nom: 'Bagages et sacs',
						autresElements: [
							'Sacs',
							'Affaires commerciales',
							'Porteurs et conditionnements',
							'Sachets à main',
							'Bagages',
							'Accessoires de voyage',
						],
					},
					{
						nom: 'Étagères, entreposage et organisation',
						autresElements: ['Étagères à bois'],
					},
					{
						nom: 'Fournitures pour animaux de compagnie',
						autresElements: ['Chats', 'Chiens', 'Poisson', "Besoins d'animaux de compagnie", 'Éléments de sécurité pour animaux de compagnie'],
					},
					{
						nom: 'Nettoyage',
						autresElements: null,
					},
				],
			},
			{
				categorie: "Amélioration de l'habitat",
				elements: [
					{
						nom: 'Bains',
						autresElements: [
							'Ventilateurs et accessoires de bains',
							'Pièces de robinets de bain',
							'Robinets de bain',
							'Rétroviseurs de bain',
							'Stockage du bain',
							'Bains de salle de bains',
							'Matériaux',
							'Drop-in - Auto-crèmes',
							'Tubes de blanchisserie',
							'Cabinets de médecine',
							'Matériel de Bain Misc',
							'Pédestal et bassin',
							'Bases de douche, murs et portes',
							'Têtes de douche',
							'Accessoires de toilettes',
							'Supports de papier WC',
							'Toilettes',
							'Anneaux et barres de serviettes',
							'Meubles de cuve et de douche',
							'Pièces de cuve et de douche',
							'Éviers de salle de bains à sous-mouvement',
							'Vanités avec des toups',
							'Vanités sans topoise',
							'Tops de vanité',
						],
					},
					{
						nom: 'Ventilateurs, ventilateurs de plafond et accessoires',
						autresElements: [
							'Fans de plafond',
							'Médaillons de plafond',
							'Cordes/couvercles de cordon',
							'Ronds en bas',
							'Accessoires de ventilateur',
							'Lames de ventilation',
							'Contrôle des ventilateurs',
							'Ventilateurs extérieurs',
							'Bras de sciage',
						],
					},
					{
						nom: "Matériel d'amélioration de l'habitat",
						autresElements: [
							'Cabinet et matériel de tiroir',
							'Conduite',
							'Matériel de portes et de fenêtres',
							'Serrures de porte',
							'Systèmes de sonnettes et de matrices',
							'Portes',
							'Cheminées électriques',
							'Ventilateur et gradateur',
							'Planchers',
							'Outils et matériaux de revêtement de sol',
							'Boîte à bandes et couvertures',
							'Échelles',
							'Boîtes aux lettres et postes',
							'Nombres, lettres et signes',
							'Chauffe-panches de plein air',
							'Cadenas',
							'Ombres',
							'Plaques de commutation',
							"Pièces et accessoires pour chauffage d'eau",
							'Chauffe-eau',
						],
					},
					{
						nom: 'Éclairage intérieur',
						autresElements: [
							"Éclairage d'accent",
							'Éclairage de salle de bains',
							'Lumières du livre',
							'Chandeliers',
							'Lampes de bureau',
							'Lampes de sol',
							'Mounts à chasser',
							'Ombres en verre',
							'Lumières des îles',
							'Kits légers',
							'Prises légères et supports',
							'Feux de nuit',
							'Pendentifs',
							"Feux d'images",
							'Éclairage encastré',
							'Semi-flotte',
							'Lampes de table',
							'Éclairage sur piste',
							'Sous la rubrique Cabinet',
							'Appliques murales',
						],
					},
					{
						nom: 'Cuisine',
						autresElements: [
							'Disposants',
							'Accessoires de cuisine',
							'Robinets de cuisine',
							'Éviers de cuisine',
							"Filtration et distributeurs d'eau",
						],
					},
					{
						nom: 'Ampoules légères',
						autresElements: ['Ampoules lumineuses à DEL', 'Bulbs standard'],
					},
				],
			},
			{
				categorie: 'Plein air et jardin',
				elements: [
					{
						nom: 'Énergie de remplacement',
						autresElements: ['Ampoules lumineuses à DEL', 'Bulbs standard'],
					},
					{
						nom: 'Piscine, spa et saunas',
						autresElements: [
							'Pools au-dessus du sol',
							'Jambes chaudes et stations thermales',
							'Piscine et spa Produits chimiques',
							'Accessoires de piscine',
							'Pool Toys et Flotteurs',
						],
					},
					{
						nom: 'Grills de barbecue',
						autresElements: ['Grills de barbecue', 'Accessoires de grillage'],
					},
					{
						nom: 'Centre de jardinage',
						autresElements: [
							'Arbors et Trellises',
							'Feuillage et tombaires artificiels',
							'Oiseaux et produits pour la faune sauvage',
							'Engrais et traitements',
							'Drapeaux et bannières',
							'Décor de jardin et statues',
							'Jardin Stakes et crochets de moutons',
							'Serres',
							'Cultivement des lumières',
							'Confort extérieur',
							"Accessoires de jeux de jeux d'extérieur",
							'Contol de parasites',
							'Supports et cintres des plantes',
							'Planteurs et boîtes de fenêtre',
							'Étodes et jardins aquatiques',
							"Toiles d'ombre",
							'Petite patio et stockage',
						],
					},
					{
						nom: 'Éclairage extérieur',
						autresElements: [
							'Lampes de poche et lanternes',
							'Inondations et lumière du spot',
							'Feux de vacances/chaînes',
							'Éclairage de paysage',
							'Porche et feu de patio',
							'Feux de poste',
							'Éclairage intelligent',
							'Légers et cordes',
						],
					},
					{
						nom: 'Bois et structures extérieures',
						autresElements: [
							'Serres',
							"Accessoires de jeux de jeux d'extérieur",
							'Emballages de jeux en plein air',
							'Bâtiments de stockage en plein air',
							'Petite patio et stockage',
							'Tableaux et structures spécialisées',
						],
					},
					{
						nom: 'Meubles de patio',
						autresElements: [
							'Chimenea et cheminées extérieures',
							'Gazebos et canopées',
							'Tapis de plein air',
							'Coussins et accessoires de patio',
							'Meubles de patio',
							'Parapluies et bases de patio',
							'Chauffe-panches de plein air',
						],
					},
					{
						nom: 'Ébreu et irrigation',
						autresElements: [
							'Irrigation au goutte-à-goutte',
							'Bobines de tuyau',
							'Tuyaux flexibles',
							'Buses et baguettes',
							'Gicleurs',
							'Minuges',
							"Boîtes d'eau",
						],
					},
					{
						nom: 'Outils de triage',
						autresElements: [
							'Axes, Picks et Sledgehammers',
							'Cultivateurs, Chaussures et râteaux',
							'Découpe, embrayage et élagage',
							'Échelle et clôture',
							'Autres outils de triage',
							'Pièces détachées et accessoires',
							'Scies électriques',
							'Pelles et bêches',
							'Neige et glace',
							'Outils à main de jardin spécialisé',
							'Tondeuses et Edgers',
							'Brouillards',
						],
					},
				],
			},
			{
				categorie: 'Puissance extérieure',
				elements: [
					{
						nom: 'Générateurs',
						autresElements: null,
					},
					{
						nom: 'Lave-pression',
						autresElements: null,
					},
					{
						nom: 'Panneaux et accessoires solaires',
						autresElements: null,
					},
					{
						nom: 'Soufflants à feuilles',
						autresElements: null,
					},
					{
						nom: 'Scies à chaîne et accessoires',
						autresElements: null,
					},

					{
						nom: 'Tondeuses à gazon et tracteurs',
						autresElements: null,
					},
					{
						nom: 'Tondeuses et accessoires',
						autresElements: null,
					},
				],
			},
		],
	},
	{
		type: 'Santé & Sport',
		contenu: [
			{
				categorie: 'Aptitude',
				elements: [
					{
						nom: 'Aptitude physique et exercice physique',
						autresElements: ['Accessoires de fitness', 'Médecine sportive', "Balayage et sorties d'eau"],
					},
					{
						nom: "Traqueurs d'activité",
						autresElements: null,
					},
					{
						nom: 'Skateboard',
						autresElements: ['Accessoires pour planches à roulettes', 'Pièces pour planches à roulettes', 'Planches à roulettes et scooters'],
					},
					{
						nom: 'Équipement de cardiologie',
						autresElements: null,
					},
					{
						nom: 'Entraînement de poids et gymnases à domicile',
						autresElements: null,
					},
					{
						nom: 'Camping et randonnée pédestre',
						autresElements: [
							'Mobilier de camp',
							'Camping ustensiles de cuisine et ustensiles',
							'Lampes de poche et lanternes',
							'Alimentation et eau',
							'Éclairage, chauffage et puissance',
							'Soins personnels et assainissement',
							'Polonais, outils et gadgets',
							'Sacs et lits',
							'Stockage et conditionnement',
							'Tentes, abris et auvents',
						],
					},
					{
						nom: 'Yoga, pilates et ton',
						autresElements: null,
					},
					{
						nom: 'Technologie portable',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Transport électrique',
				elements: [
					{
						nom: 'Hauts-bords',
						autresElements: null,
					},
					{
						nom: 'Vélos électriques',
						autresElements: null,
					},
					{
						nom: 'Scooters électriques',
						autresElements: null,
					},
					{
						nom: 'Équipement de sécurité et accessoires',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Santé',
				elements: [
					{
						nom: 'Santé et bien-être',
						autresElements: [
							'Allergie et sinus',
							'Médecine de remplacement',
							'Toux, rhume et grippe',
							"Soins de l'oreille",
							'Soins oculaires',
							'Soins aux femmes',
							'Premiers secours',
							'Soins aux pieds',
							'Tests à domicile',
							'Incontinence',
							'Soins bucco-dentaires',
							"Traitements de l'état de la peau",
							'Aides au sommeil et au ronflement',
							'Supports et accolades',
						],
					},
					{
						nom: 'Soins personnels',
						autresElements: [
							'Échelles de bain et accessoires de bain',
							'Fers à repasser',
							'Humidificateurs et vaporisateurs',
							'Masseurs',
							'Thermomètres',
							'Soins bucco-dentaires',
							'Épilateurs',
							'Sèche-cheveux',
							'Outils de coiffure',
							'Rasoirs et tondeuses',
							'Fermeture à fers à repasser',
						],
					},
					{
						nom: 'Régime alimentaire et condition physique',
						autresElements: null,
					},
					{
						nom: 'Soins de santé à domicile',
						autresElements: null,
					},
					{
						nom: 'Massage et relaxation',
						autresElements: null,
					},
					{
						nom: 'Moniteurs de pression artérielle',
						autresElements: null,
					},
					{
						nom: 'Bébé',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Sports',
				elements: [
					{
						nom: 'Articles de sport',
						autresElements: [
							'Accessoires et équipements sportifs',
							'Coffrets-cadeaux sportifs',
							'Mémoires de sport et objets de collection',
							"Balayage et sorties d'eau",
							'Baseball et softball',
							'Basket-ball',
							'Football',
							'Hockey',
							'Football',
							'Chasse',
							'Sports nautiques',
							'Sports hivernaux',
							'Arts martiaux mixtes',
							'Racquet Sports',
						],
					},
					{
						nom: 'Cyclisme',
						autresElements: ['Vélos', 'Pièces de cycle', 'Accessoires de cyclisme', 'Engrenage de protection du vélo'],
					},
					{
						nom: 'Golf',
						autresElements: ['Accessoires de golf', 'Sacs de golf', 'Ensembles de clubs de golf', 'Golf Tech', 'Aides à la formation au golf'],
					},
					{
						nom: 'Jumelles et optiques',
						autresElements: null,
					},
					{
						nom: 'Pêche',
						autresElements: [
							'Attraits de poisson et appâts',
							'Bondelles de pêche',
							'Rods et arcs de pêche',
							'Boîtes de pêche',
							'Terminal de pêche',
							'Outils et accessoires de pêche',
							'Bod et bobine de stockage',
						],
					},
					{
						nom: 'Airsoft et Paintball',
						autresElements: [
							"Etuis et stockage d'Airsoft",
							'Pièces détachées et accessoires pour pistolets Airsoft',
							'Airsoft Tactical Gear, Safety et Accessories',
							'Accessoires pour balles de peinture',
							'Paintball Protection',
						],
					},
				],
			},
		],
	},
	{
		type: 'Jouets, drones et fabricant',
		contenu: [
			{
				categorie: 'Drones et jouets RC',
				elements: [
					{
						nom: 'Drones',
						autresElements: ['Drones', 'Accessoires de drones'],
					},
					{
						nom: 'Jouets RC',
						autresElements: [
							'Moteurs',
							'Pièces pour moteurs',
							'Pièces de moteur',
							'Servos, Gyros et systèmes de contrôle',
							'Radios et accessoires',
							'Pièces détachées et accessoires pour jouets',
						],
					},
					{
						nom: 'Voitures et camions',
						autresElements: null,
					},
					{
						nom: 'Hélicoptères',
						autresElements: null,
					},
					{
						nom: 'Batteries et chargeurs',
						autresElements: null,
					},
					{
						nom: 'Pièces de rechange',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Objets de collection et jeux',
				elements: [
					{
						nom: 'Articles de collection',
						autresElements: null,
					},
					{
						nom: "Chiffres d'action",
						autresElements: null,
					},
					{
						nom: 'Jeux',
						autresElements: null,
					},
					{
						nom: 'Véhicules',
						autresElements: null,
					},
					{
						nom: 'Jouets moulés sous pression',
						autresElements: null,
					},
					{
						nom: 'Objets de collection',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Apprentissage et construction',
				elements: [
					{
						nom: 'Électronique pour les enfants',
						autresElements: null,
					},
					{
						nom: 'Apprentissage et éducation',
						autresElements: null,
					},
					{
						nom: "Centres d'activités et zones de jeu",
						autresElements: null,
					},
					{
						nom: 'Arts et métiers',
						autresElements: [
							'Peinture artisanale',
							'Dessin et illustration',
							'Artisans en tissu',
							'Encadrement',
							'Artisanat et accessoires généraux',
							'Bijoux et perles',
							'Artisanat et cartons de papier',
							'Fournitures pour les Parties',
							'Poterie, céramique et sculpture',
							'Printmaking',
							'Fournitures de studios',
						],
					},
				],
			},
			{
				categorie: 'Plush et faire semblant de jouer',
				elements: [
					{
						nom: 'En peluche et farcie',
						autresElements: null,
					},
					{
						nom: 'Poupées et accessoires',
						autresElements: null,
					},
					{
						nom: 'Faire semblant de jouer et de la robe',
						autresElements: null,
					},
					{
						nom: 'Stockage des jouets',
						autresElements: null,
					},
				],
			},
			{
				categorie: 'Extérieur',
				elements: [
					{
						nom: "Jouets d'extérieur",
						autresElements: null,
					},
					{
						nom: 'Science et nature',
						autresElements: null,
					},
				],
			},
		],
	},
];
export default CategoriesTab;
