import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from '../styles/MeilleursOffre.module.css';
import Categories from './Categories';
import ChoixPersonnel from './ChoixPersonnel';
import ModeMaintenant from './ModeMaintenant';
import NosMagasins from './NosMagasins';
import AimeAussi from './AimeAussi';
import ProduitsPopulaires from './ProduitsPopulaires';
import IncriptionOffre from './IncriptionOffre';
import Footer from './Footer';

const MeilleursOffre = () => {
	const [timeRemaining, setTimeRemaining] = useState(7200);

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeRemaining((prevTime) => prevTime - 1);
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	const hours = Math.floor(timeRemaining / 3600);
	const minutes = Math.floor((timeRemaining % 3600) / 60);
	const seconds = timeRemaining % 60;

	const images = [
		{
			src: [
				'/images/produits/meuilleursOffres/i1.0.jpg',
				'/images/produits/meuilleursOffres/i1.1.jpg',
				'/images/produits/meuilleursOffres/i1.2.jpg',
				'/images/produits/meuilleursOffres/i1.3.jpg',
				'/images/produits/meuilleursOffres/i1.4.jpg',
				'/images/produits/meuilleursOffres/i1.5.jpg',
				'/images/produits/meuilleursOffres/i1.6.jpg',
			],
			description:
				"Casque de jeu sans fil ASUS ROG Cetra True (écouteurs Bluetooth à faible latence, suppression active du bruit, autonomie de 27 heures, résistance à l'eau IPX4, chargement sans fil) - Noir",
			prix: 109.99,
			ancien_prix: 150.99,
			etoiles: 2,
		},
		{
			src: [
				'/images/produits/meuilleursOffres/i2.1.jpg',
				'/images/produits/meuilleursOffres/i2.2.jpg',
				'/images/produits/meuilleursOffres/i2.3.jpg',
				'/images/produits/meuilleursOffres/i2.4.jpg',
				'/images/produits/meuilleursOffres/i2.5.jpg',
				'/images/produits/meuilleursOffres/i2.6.jpg',
			],
			description:
				'Clavier de jeu mécanique sans fil Logitech G715 avec éclairage RVB LIGHTSYNC, vitesse de la lumière, commutateurs tactiles (GX marron) et repose-mains pour clavier, compatible PC et Mac, brume blanche',
			prix: 249.99,
			ancien_prix: 260.99,
			etoiles: 178,
		},
		{
			src: [
				'/images/produits/meuilleursOffres/i3.1.png',
				'/images/produits/meuilleursOffres/i3.2.png',
				'/images/produits/meuilleursOffres/i3.3.jpg',
				'/images/produits/meuilleursOffres/i3.4.jpg',
				'/images/produits/meuilleursOffres/i3.5.jpg',
				'/images/produits/meuilleursOffres/i3.6.png',
			],
			description:
				'G.SKILL Trident Z5 Neo RGB Series AMD EXPO 32 Go (2 x 16 Go) RAM PC 288 broches DDR5 6000 (PC5 48000) Mémoire de bureau Modèle F5-6000J3038F16GX2-TZ5NR',
			prix: 194.97,
			ancien_prix: 200.0,
			etoiles: 178,
		},
		{
			src: [
				'/images/produits/meuilleursOffres/i4.1.jpg',
				'/images/produits/meuilleursOffres/i4.2.jpg',
				'/images/produits/meuilleursOffres/i4.3.jpg',
				'/images/produits/meuilleursOffres/i4.4.jpg',
				'/images/produits/meuilleursOffres/i4.5.jpg',
				'/images/produits/meuilleursOffres/i4.6.jpg',
			],
			description: 'ASRock B550M-ITX/AC AM4 AMD B550 SATA 6Gb/s Mini ITX AMD Carte mère',
			prix: 149.99,
			ancien_prix: 170.99,
			etoiles: 72,
		},
		{
			src: [
				'/images/produits/meuilleursOffres/i5.1.jpg',
				'/images/produits/meuilleursOffres/i5.2.jpg',
				'/images/produits/meuilleursOffres/i5.3.jpg',
				// '/images/produits/meuilleursOffres/i5.1.jpg',
				// '/images/produits/meuilleursOffres/i5.2.jpg',
				// '/images/produits/meuilleursOffres/i5.3.jpg',
			],
			description:
				'Ordinateur portable LG Gram 17Z95P-K.AR55A8 Intel Core i5 11e génération 1155G7 (2,50 GHz) 8 Go de mémoire SSD PCIe 512 Go Intel Iris Xe Graphics 17,0 Windows 11 Home 64 bits - Plateforme Intel Evo',
			prix: 1284.0,
			ancien_prix: 1350.99,
			etoiles: 72,
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	let intervalId;

	const startSlideShow = (index) => {
		setCurrentIndex(0);
		intervalId = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex === images[index].src.length - 1 ? 0 : prevIndex + 1));
		}, 1000);
	};
	const stopSlideShow = () => {
		clearInterval(intervalId);
	};

	const [hoveredIndex, setHoveredIndex] = useState(-1);

	useEffect(() => {
		if (hoveredIndex >= 0) {
			startSlideShow(hoveredIndex);
		} else {
			stopSlideShow();
		}

		return () => {
			stopSlideShow();
		};
	}, [hoveredIndex]);

	function tronquerTexte(texte, limite) {
		if (texte.length <= limite) {
			return texte;
		}
		return texte.substring(0, limite) + '...';
	}

	const stylePrix = (prix) => {
		return prix.toString();
	};
	// Utilisation :
	//   const texteComplet = 'Texte à tronquer';
	//   const texteTronque = tronquerTexte(texteComplet, 10);
	// const [showTooltip, setShowTooltip] = useState(false);
	// const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
	// const handleMouseEnter = (event) => {
	// 	setShowTooltip(true);
	// 	setTooltipPosition({ x: event.clientX, y: event.clientY });
	// };
	// console.log(tooltipPosition);

	// const handleMouseLeave = () => {
	// 	setShowTooltip(false);
	// };

	return (
		<div className={styles.m_contenant}>
			<div className={styles.m_titre}>
				<h3>LES MEILLEURES OFFRES DU JOUR</h3>
				<div className={styles.compteRebpour}>
					<h4>SE TERMINANT EN</h4>
					<div className={styles.heure}>
						<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
					</div>
				</div>
			</div>

			<div className={styles.box_container}>
				{images.map((item, index) => (
					<div className={styles.box} key={index}>
						<div className={styles.description}>
							<div className={styles.etoiles}>
								<span>★★★★★ </span>
								<span>({item.etoiles})</span>
							</div>
							<div className={styles.descrip}>
								<Link href='#'>{tronquerTexte(item.description, 55)}</Link>
							</div>
							<div className={styles.offre}>
								<span>Économisez {Math.floor(Math.round(100 - (item.prix * 100) / item.ancien_prix))} %</span>
								<span>10 $ De Rabais Avec Code</span>
							</div>
							<div className={styles.prix}>
								{/* {stylePrix(item.prix)} */}
								<h4>
									$ {stylePrix(item.prix).split('.')[0]} <span>.{stylePrix(item.prix).split('.')[1]}</span>
								</h4>
								<div className={styles.lineThrough}>{item.ancien_prix}</div>
								<div>34,99 $ de livraison</div>
							</div>
						</div>
						<div className={styles.premierImg}>
							<span>
								<Link
									key={index}
									href='#'
									onMouseEnter={() => {
										setHoveredIndex(index);
									}}
									onMouseLeave={() => {
										setHoveredIndex(-1);
									}}>
									<Image
										width={1280}
										height={960}
										src={hoveredIndex === index ? item.src[currentIndex] : item.src[0]}
										alt='image produit'
										// onMouseEnter={handleMouseEnter}
										// onMouseLeave={handleMouseLeave}
										// className={styles.tooltipTrigger}
									/>
								</Link>
							</span>
							{/* {showTooltip && (
								<div
									className={styles.tooltip}
									style={{ position: 'absolute', top: tooltipPosition.x, left: tooltipPosition.y, zIndex: '999' }}>
									{item.description}
								</div>
							)} */}
						</div>
					</div>
				))}
			</div>

			<div className={styles.box2Container}>
				{images.slice(0, 4).map((item, index) => (
					<div className={styles.box} key={index}>
						<div className={styles.description}>
							<div className={styles.etoiles}>
								<span>★★★★★ </span>
								<span>({item.etoiles})</span>
							</div>
							<div className={styles.descrip}>
								<Link href='#'>{tronquerTexte(item.description, 55)}</Link>
							</div>
							<div className={styles.offre}>
								<span>Économisez {Math.floor(Math.round(100 - (item.prix * 100) / item.ancien_prix))} %</span>
								<span>10 $ De Rabais Avec Code</span>
							</div>
							<div className={styles.prix}>
								<h4>
									$ {stylePrix(item.prix).split('.')[0]} <span>.{stylePrix(item.prix).split('.')[1]}</span>
								</h4>
								<div className={styles.lineThrough}>{item.ancien_prix}</div>
								<div>34,99 $ de livraison</div>
							</div>
						</div>
						<div className={styles.premierImg}>
							<Link
								key={index}
								href='#'
								onMouseEnter={() => {
									setHoveredIndex(index);
								}}
								onMouseLeave={() => {
									setHoveredIndex(-1);
								}}>
								<Image width={1280} height={960} src={hoveredIndex === index ? item.src[currentIndex] : item.src[0]} alt='image produit' />
							</Link>
						</div>
					</div>
				))}
				<div className={styles.btn_voir_plus}>
					<Link href='#'>
						<h4>VOIR TOUTES LES OFFRES</h4>
					</Link>
				</div>
			</div>
			<ChoixPersonnel />
			<NosMagasins />
			<ModeMaintenant />
			<Categories />
			<AimeAussi />
			<ProduitsPopulaires />
			<IncriptionOffre />
			<Footer />
		</div>
	);
};

export default MeilleursOffre;
