import Link from 'next/link';
import CategoriesTab from '../components/tableaux/CategoriesTab';
import styles from '../styles/Menu.module.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Menu() {
	const [texteSurvole, setTexteSurvole] = useState('Composants et stockage');

	const CategorieAffichee = CategoriesTab.find((categorie) => categorie.type === texteSurvole);

	const handleHover = (event) => {
		const texte = event.currentTarget.querySelector('span').textContent;
		setTexteSurvole(texte);
	};
	const [bigMenuVisible, setBigMenuVisible] = useState(false);
	const handleMouseOver = () => {
		setBigMenuVisible(true);
	};
	const handleMouseLeave = () => {
		setBigMenuVisible(false);
	};

	const [texteSurvole2, setTexteSurvole2] = useState();

	// const [categoriSurvole, setCategoriSurvole] = useState(false);
	// const categoriSurvol = () => {
	// 	setCategoriSurvole(!categoriSurvole);
	// };

	const autresElements = CategoriesTab.flatMap((categorie) => categorie.contenu.flatMap((element) => element.elements.flatMap((item) => item)));

	const popupVisible = (event) => {
		const texte = event.currentTarget.querySelector('span').textContent;
		setTexteSurvole2(texte);
	};
	const nomRecherche = texteSurvole2; // Nom à rechercher
	// Filtrer les éléments par nom
	const elementsFiltres = autresElements.filter((element) => element.nom === nomRecherche);

	// const [hoveredItemPositionBigMenu, setHoveredItemPositionBigMenu] = useState(null);
	// const handleMouseOverPopupBigMenu = (event) => {
	// 	const element = event.currentTarget;
	// 	const liRect = element.getBoundingClientRect();
	// 	const popupLeft = liRect.left;

	// 	let popupPositionLeft = popupLeft;
	// 	setHoveredItemPositionBigMenu({
	// 		top: liRect.top - 90,
	// 		left: popupPositionLeft + 235,
	// 	});

	// 	setIsPopupVisible(true);
	// };

	const [hoveredItemPosition, setHoveredItemPosition] = useState(null);
	const [isPopupVisible, setIsPopupVisible] = useState(false);
	// const maxLeftPosition = 800 - 224;
	const handleMouseOverPopupSousMenu = (event) => {
		const liElement = event.currentTarget;
		const liRect = liElement.getBoundingClientRect();
		const popupLeft = liRect.left;

		let popupPositionLeft = popupLeft;
		// if (popupPositionLeft > maxLeftPosition) {
		// 	popupPositionLeft = liRect.left - 460;
		// }

		setHoveredItemPosition({
			top: liRect.top - 80,
			left: popupPositionLeft - 28,
		});

		setIsPopupVisible(true);
	};
	const handleMouseLeaveItem = () => {
		setIsPopupVisible(false);
	};
	const [currentImage, setCurrentImage] = useState(0);

	// tableau des images du header
	const images = [
		'/images/design/imgHeader/i1.png',
		'/images/design/imgHeader/i2.png',
		'/images/design/imgHeader/i3.jpg',
		// Ajoutez les chemins vers vos autres images ici
	];
	// tableau des images du header
	const CategoriesInteressants = [
		'/images/produits/categoriesInteressant/i1.png',
		'/images/produits/categoriesInteressant/i2.png',
		'/images/produits/categoriesInteressant/i3.png',
		// Ajoutez les chemins vers vos autres images ici
	];
	// tableau des images du header
	const ProduitsInteressants = [
		'/images/produits/produitsInteressants/i1.png',
		'/images/produits/produitsInteressants/i2.png',
		'/images/produits/produitsInteressants/i3.png',
		// Ajoutez les chemins vers vos autres images ici
	];
	function handlePrevClick() {
		setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
	}

	function handleNextClick() {
		setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
	}

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
		}, 10000);

		return () => {
			clearInterval(timer);
		};
	}, []);
	const filterCategories = autresElements.filter((element) => element.nom === 'SSD')[0].autresElements.slice(0, 2);
	const filterProduits = autresElements.filter((element) => element.nom === 'SSD')[0].autresElements.slice(0, 2);

	return (
		<div>
			<nav className={styles.nav}>
				<ul className={styles.ul} onMouseLeave={handleMouseLeave}>
					<li className={`${styles.li}`} onMouseOver={handleHover}>
						<Link href='#' onMouseOver={handleMouseOver}>
							<div>
								<svg width='44' height='20' viewBox='0 0 24 24'>
									<path d='M7 16.5l-5 -3l5 -3l5 3v5.5l-5 3z' />
									<path d='M2 13.5v5.5l5 3' />
									<path d='M7 16.545l5 -3.03' />
									<path d='M17 16.5l-5 -3l5 -3l5 3v5.5l-5 3z' />
									<path d='M12 19l5 3' />
									<path d='M17 16.5l5 -3' />
									<path d='M12 13.5v-5.5l-5 -3l5 -3l5 3v5.5' />
									<path d='M7 5.03v5.455' />
									<path d='M12 8l5 -3' />
								</svg>
								<span>Composants et stockage</span>
							</div>
							<svg width='8' height='8' viewBox='0 0 24 24'>
								<path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
							</svg>
						</Link>
					</li>
					<li className={styles.li} onMouseOver={handleHover}>
						<Link href='#' onMouseOver={handleMouseOver}>
							<div>
								<svg width='15' height='15' viewBox='0 0 24 24'>
									<path d='M22 17v-11.8c0-.663-.537-1.2-1.2-1.2h-17.6c-.663 0-1.2.537-1.2 1.2v11.8h20zm-18-11h16v9h-16v-9zm20 12v.8c0 .663-.537 1.2-1.2 1.2h-21.6c-.663 0-1.2-.537-1.2-1.2v-.8h10c0 .276.224.5.5.5h3c.276 0 .5-.224.5-.5h10z' />
								</svg>
								<span>Systèmes informatiques</span>
							</div>
							<svg width='8' height='8' viewBox='0 0 24 24'>
								<path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
							</svg>
						</Link>
					</li>
					<li className={styles.li} onMouseOver={handleHover}>
						<Link href='#' onMouseOver={handleMouseOver}>
							<div>
								<svg width='15' height='15' viewBox='0 0 24 24'>
									<path d='M16 18h-8v-1h8v1zm-2 1h-6v1h6v-1zm10-14v13h-4v6h-16v-6h-4v-13h4v-5h16v5h4zm-18 0h12v-3h-12v3zm12 10h-12v7h12v-7zm4-8h-20v9h2v-3h16v3h2v-9zm-1.5 1c-.276 0-.5.224-.5.5s.224.5.5.5.5-.224.5-.5-.224-.5-.5-.5z' />
								</svg>
								<span>Périphériques d'ordinateur</span>
							</div>
							<svg width='8' height='8' viewBox='0 0 24 24'>
								<path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
							</svg>
						</Link>
					</li>
					<li className={styles.li} onMouseOver={handleHover}>
						<Link href='#' onMouseOver={handleMouseOver}>
							<div>
								<svg width='15' height='15' viewBox='0 0 24 24'>
									<path d='M0 3v15h17v-15h-17zm15 13h-13v-11h13v11zm-4.5 3l1.599 2h-7.198l1.599-2h4zm8.5 2h5v-13h-5v13zm3.1-3.5c0 .332-.269.6-.6.6s-.6-.269-.6-.6.269-.6.6-.6.6.268.6.6zm-.1-7.5v5h-1v-5h1z' />
								</svg>
								<span>Appareils électroménagers</span>
							</div>
							<svg width='8' height='8' viewBox='0 0 24 24'>
								<path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
							</svg>
						</Link>
					</li>
					<li className={styles.li} onMouseOver={handleHover}>
						<Link href='#' onMouseOver={handleMouseOver}>
							<div>
								<svg width='15' height='15' viewBox='0 0 24 24'>
									<path d='M0 3v15h17v-15h-17zm15 13h-13v-11h13v11zm-4.5 3l1.599 2h-7.198l1.599-2h4zm8.5 2h5v-13h-5v13zm3.1-3.5c0 .332-.269.6-.6.6s-.6-.269-.6-.6.269-.6.6-.6.6.268.6.6zm-.1-7.5v5h-1v-5h1z' />
								</svg>
								<span>Télévisuel et cinéma à domicile</span>
							</div>
							<svg width='8' height='8' viewBox='0 0 24 24'>
								<path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
							</svg>
						</Link>
					</li>
					<li className={styles.li} onMouseOver={handleHover}>
						<Link href='#' onMouseOver={handleMouseOver}>
							<div>
								<svg width='15' height='15' viewBox='0 0 24 24'>
									<path d='M0 3v15h17v-15h-17zm15 13h-13v-11h13v11zm-4.5 3l1.599 2h-7.198l1.599-2h4zm8.5 2h5v-13h-5v13zm3.1-3.5c0 .332-.269.6-.6.6s-.6-.269-.6-.6.269-.6.6-.6.6.268.6.6zm-.1-7.5v5h-1v-5h1z' />
								</svg>
								<span>Électronique</span>
							</div>
							<svg width='8' height='8' viewBox='0 0 24 24'>
								<path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
							</svg>
						</Link>
					</li>
					<li className={styles.li} onMouseOver={handleHover}>
						<Link href='#' onMouseOver={handleMouseOver}>
							<div>
								<svg width='15' height='15' viewBox='0 0 24 24'>
									<path d='M19.46 7.594c2.21 5.602 2.54 8.12 2.54 9.123 0 .797-.299.866-.525.664-2.932-2.607-3.57-3.38-5.858-3.38h-7.233c-2.282 0-2.895.746-5.858 3.381-.228.201-.526.13-.526-.665 0-1.003.33-3.522 2.541-9.123.639-1.616 1.763-1.88 2.771-1.361 3.068 1.581 6.498 1.482 9.377 0 1.002-.518 2.129-.263 2.771 1.361zm-1.836-3.594c-.656 0-1.298.17-1.852.456-2.397 1.235-5.146 1.236-7.544 0-.554-.286-1.196-.456-1.852-.456-1.403 0-2.873.777-3.695 2.86-1.736 4.396-2.681 7.794-2.681 9.857 0 1.586.56 2.59 1.749 3.178.143.071.297.105.449.105.243 0 .483-.087.672-.255l3.109-2.745c.558-.494 1.044-1.004 2.404-1.004h7.232c1.36 0 1.847.51 2.404 1.004l3.109 2.745c.191.168.432.255.674.255.153 0 .307-.034.449-.105 1.189-.588 1.749-1.592 1.749-3.179 0-2.062-.945-5.461-2.68-9.856-.822-2.083-2.293-2.86-3.696-2.86zm-2.874 5.75c.414 0 .75.335.75.75s-.336.75-.75.75-.75-.335-.75-.75.336-.75.75-.75zm1.75 3.25c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75zm0-3.531c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75zm1.734 1.781c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75zm-10.734-2.25c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5zm0-1c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5-1.119-2.5-2.5-2.5zm4.5 0c-.553 0-1 .448-1 1s.447 1 1 1 1-.448 1-1-.447-1-1-1z' />
								</svg>
								<span>Jeux et réalité virtuelle</span>
							</div>
							<svg width='8' height='8' viewBox='0 0 24 24'>
								<path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
							</svg>
						</Link>
					</li>
					<li className={styles.li} onMouseOver={handleHover}>
						<Link href='#' onMouseOver={handleMouseOver}>
							<div>
								<svg width='15' height='15' viewBox='0 0 24 24'>
									<path d='M16 6h-8v-6h8v6zm-10 12h-6v6h6v-6zm18 0h-6v6h6v-6zm-11-7v-3h-2v3h-9v5h2v-3h7v3h2v-3h7v3h2v-5h-9zm2 7h-6v6h6v-6z' />
								</svg>
								<span>La mise en réseau</span>
							</div>
							<svg width='8' height='8' viewBox='0 0 24 24'>
								<path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
							</svg>
						</Link>
					</li>
					<li className={styles.li} onMouseOver={handleHover}>
						<Link href='#' onMouseOver={handleMouseOver}>
							<div>
								<svg width='15' height='15'>
									<path d='M12 2h2v2h2v3.702l7 2.618v12.68h1v1h-24v-1h1v-11h6v-8h2v-2h2v-2h1v2zm3 3h-7v18h1v-2h5v2h1v-18zm-2 17h-3v1h3v-1zm8 1h1v-11.987l-6-2.243v14.23h1v-2h4v2zm-14-10h-5v10h1v-2h3v2h1v-10zm-2 9h-1v1h1v-1zm15 0h-2v1h2v-1zm-16-5v2h-1v-2h1zm2 0v2h-1v-2h1zm5-10v12h-1v-12h1zm10 11v1h-4v-1h4zm-8-11v12h-1v-12h1zm8 9v1h-4v-1h4zm-17-2v2h-1v-2h1zm2 0v2h-1v-2h1zm15 0v1h-4v-1h4zm0-2v1h-4v-1h4zm-8-9h-3v1h3v-1z' />
								</svg>
								<span>Maison intelligente et sécurité</span>
							</div>
							<svg width='8' height='8' viewBox='0 0 24 24'>
								<path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
							</svg>
						</Link>
					</li>
					<li className={styles.li} onMouseOver={handleHover}>
						<Link href='#' onMouseOver={handleMouseOver}>
							<div>
								<svg width='15' height='15'>
									<path d='M12 2h2v2h2v3.702l7 2.618v12.68h1v1h-24v-1h1v-11h6v-8h2v-2h2v-2h1v2zm3 3h-7v18h1v-2h5v2h1v-18zm-2 17h-3v1h3v-1zm8 1h1v-11.987l-6-2.243v14.23h1v-2h4v2zm-14-10h-5v10h1v-2h3v2h1v-10zm-2 9h-1v1h1v-1zm15 0h-2v1h2v-1zm-16-5v2h-1v-2h1zm2 0v2h-1v-2h1zm5-10v12h-1v-12h1zm10 11v1h-4v-1h4zm-8-11v12h-1v-12h1zm8 9v1h-4v-1h4zm-17-2v2h-1v-2h1zm2 0v2h-1v-2h1zm15 0v1h-4v-1h4zm0-2v1h-4v-1h4zm-8-9h-3v1h3v-1z' />
								</svg>
								<span>Solutions de bureau</span>
							</div>
							<svg width='8' height='8' viewBox='0 0 24 24'>
								<path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
							</svg>
						</Link>
					</li>
					<li className={styles.li} onMouseOver={handleHover}>
						<Link href='#' onMouseOver={handleMouseOver}>
							<div>
								<svg width='15' height='15' viewBox='0 0 24 24'>
									<path d='m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-1.5 5.505v9.995h-15v-9.995zm0-1.5h-15v-3.505h15zm-2.25-2.5c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75zm-3 0c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75z' />
								</svg>
								<span>Logiciels et services</span>
							</div>
							<svg width='8' height='8' viewBox='0 0 24 24'>
								<path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
							</svg>
						</Link>
					</li>
					<li className={styles.li} onMouseOver={handleHover}>
						<Link href='#' onMouseOver={handleMouseOver}>
							<div>
								<svg width='20' height='20' viewBox='0 0 24 24'>
									<path d='M11 11v-3h1.247c.882 0 1.235.297 1.828.909.452.465 1.925 2.091 1.925 2.091h-5zm-1-3h-2.243c-.688 0-1.051.222-1.377.581-.316.348-.895.948-1.506 1.671 1.719.644 4.055.748 5.126.748v-3zm14 5.161c0-2.823-2.03-3.41-2.794-3.631-1.142-.331-1.654-.475-3.031-.794-.55-.545-2.052-2.036-2.389-2.376l-.089-.091c-.666-.679-1.421-1.269-3.172-1.269h-7.64c-.547 0-.791.456-.254.944-.534.462-1.944 1.706-2.34 2.108-1.384 1.402-2.291 2.48-2.291 4.603 0 2.461 1.361 4.258 3.179 4.332.41 1.169 1.512 2.013 2.821 2.013 1.304 0 2.403-.838 2.816-2h6.367c.413 1.162 1.512 2 2.816 2 1.308 0 2.409-.843 2.82-2.01 1.934-.056 3.181-1.505 3.181-3.829zm-18 4.039c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm12 0c-.662 0-1.2-.538-1.2-1.2s.538-1.2 1.2-1.2 1.2.538 1.2 1.2-.538 1.2-1.2 1.2zm2.832-2.15c-.399-1.188-1.509-2.05-2.832-2.05-1.327 0-2.44.868-2.836 2.062h-6.328c-.396-1.194-1.509-2.062-2.836-2.062-1.319 0-2.426.857-2.829 2.04-.586-.114-1.171-1.037-1.171-2.385 0-1.335.47-1.938 1.714-3.199.725-.735 1.31-1.209 2.263-2.026.34-.291.774-.432 1.222-.43h5.173c1.22 0 1.577.385 2.116.892.419.393 2.682 2.665 2.682 2.665s2.303.554 3.48.895c.84.243 1.35.479 1.35 1.71 0 1.196-.396 1.826-1.168 1.888z' />
								</svg>
								<span>Automobile et Outils</span>
							</div>
							<svg width='8' height='8' viewBox='0 0 24 24'>
								<path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
							</svg>
						</Link>
					</li>
					<li className={styles.li} onMouseOver={handleHover}>
						<Link href='#' onMouseOver={handleMouseOver}>
							<div>
								<svg width='20' height='20' viewBox='0 0 24 24'>
									<path stroke='none' d='M0 0h24v24H0z' fill='none' />
									<path d='M4 11a2 2 0 0 1 2 2v1h12v-1a2 2 0 1 1 4 0v5a1 1 0 0 1 -1 1h-18a1 1 0 0 1 -1 -1v-5a2 2 0 0 1 2 -2z' />
									<path d='M4 11v-3a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v3' />
									<path d='M12 5v9' />
								</svg>
								<span>Maison et extérieur</span>
							</div>
							<svg width='8' height='8' viewBox='0 0 24 24'>
								<path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
							</svg>
						</Link>
					</li>
					<li className={styles.li} onMouseOver={handleHover}>
						<Link href='#' onMouseOver={handleMouseOver}>
							<div>
								<svg width='15' height='15' viewBox='0 0 24 24'>
									<path d='M14.183 6.5l3.489 3.487-.707.707-1.038-1.037-1.037 1.037 1.037 1.037-.707.707-1.037-1.037-1.037 1.037 1.037 1.037-.707.707-1.038-1.037-1.037 1.037 1.037 1.036-.707.707-1.037-1.036-1.038 1.037 1.037 1.035-.707.707-3.49-3.486.708-.707 1.037 1.037 1.038-1.037-1.038-1.037.708-.707 1.038 1.037 1.036-1.037-1.037-1.037.707-.707 1.038 1.037 1.037-1.037-1.037-1.036.707-.707 1.038 1.036 1.037-1.036-1.037-1.037.707-.707zm7.642 2.465c-1.708-2.706-4.126-5.139-6.72-6.763 1.977-.354 4.538-.329 5.868 1 .771.769 1.323 2.847.852 5.763m-10.052 12.115c-3.704-1.778-7.218-5.278-8.782-8.744 1.636-4.152 4.943-7.628 9.333-9.344 3.474 1.56 6.986 5.08 8.764 8.788-1.587 4.387-4.903 7.699-9.315 9.3m-8.578-.113c-1.079-1.079-1.457-3.322-1.002-5.869 1.623 2.592 4.058 5.009 6.763 6.718-2.384.384-4.76.15-5.761-.849m19.193-19.179c-1.152-1.153-3.018-1.788-5.251-1.788-4.063 0-8.611 2.021-11.867 5.274-3.518 3.516-5.27 8.082-5.27 11.849 0 2.219.618 4.097 1.78 5.258 1.044 1.044 2.865 1.619 5.128 1.619 3.327 0 8.224-1.341 11.991-5.106 3.327-3.324 5.1-7.936 5.1-11.97 0-2.226-.564-4.091-1.611-5.136' />
								</svg>
								<span>Santé & Sport</span>
							</div>
							<svg width='8' height='8' viewBox='0 0 24 24'>
								<path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
							</svg>
						</Link>
					</li>
					<li className={styles.li} onMouseOver={handleHover}>
						<Link href='#' onMouseOver={handleMouseOver}>
							<div>
								<svg width='15' height='15' viewBox='0 0 24 24'>
									<path d='M10 10h4v4h-4z' />
									<path d='M10 10l-3.5 -3.5' />
									<path d='M9.96 6a3.5 3.5 0 1 0 -3.96 3.96' />
									<path d='M14 10l3.5 -3.5' />
									<path d='M18 9.96a3.5 3.5 0 1 0 -3.96 -3.96' />
									<path d='M14 14l3.5 3.5' />
									<path d='M14.04 18a3.5 3.5 0 1 0 3.96 -3.96' />
									<path d='M10 14l-3.5 3.5' />
									<path d='M6 14.04a3.5 3.5 0 1 0 3.96 3.96' />
								</svg>
								<span>Jouets, drones et fabricant</span>
							</div>
							<svg width='8' height='8' viewBox='0 0 24 24'>
								<path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
							</svg>
						</Link>
					</li>
				</ul>
				<div className={`${styles.bigMenu} ${bigMenuVisible ? styles.bigMenuActive : ''}`} onMouseOver={handleMouseOver}>
					<div className={styles.slade} onMouseLeave={handleMouseLeave}>
						{CategorieAffichee &&
							CategorieAffichee.contenu &&
							CategorieAffichee.contenu.map((Composant, index) => (
								<div className={styles.box} key={index}>
									<h3>{Composant.categorie}</h3>
									<ul className={styles.ul}>
										{Composant.elements.map((item, index) => (
											<li className={styles.li} key={index} onMouseOver={handleMouseOverPopupSousMenu} onMouseLeave={handleMouseLeaveItem}>
												<Link href={`/${item.nom.replace(/ /g, '-')}/Categorie/${index}`} onMouseOver={popupVisible}>
													<div>
														<span>{item.nom}</span>
													</div>
													{item.autresElements && (
														<svg width='8' height='8' viewBox='0 0 24 24'>
															<path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
														</svg>
													)}
												</Link>
											</li>
										))}
									</ul>
								</div>
							))}
						<div className={styles.popupSousCat} style={hoveredItemPosition}>
							<div className={styles.fleche}></div>
							{elementsFiltres.map((item, index) => (
								<ul key={index}>
									{item.autresElements?.map((article, index) => (
										<li key={index}>
											<Link href={`/${article.replace(/ /g, '-')}/SousCategorie/${index}`}>{article}</Link>
										</li>
									))}
								</ul>
							))}
						</div>
					</div>
				</div>
				<div className={styles.headSladeContainer}>
					<div
						className={styles.headSlade}
						style={{ backgroundImage: `url(${images[currentImage]})`, transition: 'background-image 0.5s ease' }}>
						<div className={styles.direction}>
							{/* <svg width='46' height='46' fill='none' stroke='currentColor' viewBox='0 0 24 24' >
								<path d='M15 19.5 7.5 12 15 4.5'></path>
							</svg>
							<svg width='46' height='46' fill='none' stroke='currentColor' viewBox='0 0 24 24' >
								<path d='m9 4.5 7.5 7.5L9 19.5'></path>
							</svg> */}
							<svg viewBox='0 0 1024 1024' fill='#000000' onClick={handlePrevClick}>
								<g id='SVGRepo_bgCarrier'></g>
								<g id='SVGRepo_tracerCarrier'></g>
								<g id='SVGRepo_iconCarrier'>
									<path
										d='M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z'
										fill=''></path>
								</g>
							</svg>
							<svg viewBox='0 0 1024 1024' fill='#000000' onClick={handleNextClick}>
								<g id='SVGRepo_bgCarrier'></g>
								<g id='SVGRepo_tracerCarrier'></g>
								<g id='SVGRepo_iconCarrier'>
									<path
										d='M642.174 504.594c7.99 7.241 7.897 17.58-0.334 24.782L332.62 799.945c-8.867 7.759-9.766 21.236-2.007 30.103 7.758 8.867 21.236 9.766 30.103 2.007l309.221-270.569c27.429-24 27.792-64.127 0.89-88.507L360.992 192.192c-8.73-7.912-22.221-7.248-30.133 1.482-7.912 8.73-7.248 22.222 1.482 30.134l309.833 280.786z'
										fill=''></path>
								</g>
							</svg>
						</div>
						<div className={styles.boxHeadContent}>
							<div className={styles.boxHead}>
								<h2>Inscrivez-vous pour la meilleure expérience</h2>
								<button>
									<Link href='#'>Se connecter</Link>
								</button>
								<p>
									Nouveau à Newegg ?
									<Link href='#'>
										<span>
											S'INSCRIRE
											<span>
												<svg width='46' height='46' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
													<path d='m9 4.5 7.5 7.5L9 19.5'></path>
												</svg>
											</span>
										</span>
									</Link>
								</p>
							</div>
							<div className={styles.boxHead}>
								<h2>CATÉGORIES QUI VOUS INTÉRESSENT</h2>
								<div className={styles.categoriInteressantContainer}>
									{filterProduits.map((item, index) => (
										<span key={index}>
											<Link href={`/${item.replace(/ /g, '-')}/SousCategorie/${index}`} className={styles.premierImg}>
												<Image src={CategoriesInteressants[index]} width={1280} height={960} alt='image produit' />
											</Link>
										</span>
									))}
								</div>
							</div>
							<div className={styles.boxHead}>
								<div>
									<h2>PRODUITS QUI VOUS INTERESSERONT</h2>
									<Link href='#'>
										<span className={styles.voirPlus}>
											Voir plus
											<span>
												<svg width='46' height='46' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
													<path d='m9 4.5 7.5 7.5L9 19.5'></path>
												</svg>
											</span>
										</span>
									</Link>
								</div>
								<div className={styles.categoriInteressantContainer}>
									{filterProduits.map((item, index) => (
										<span key={index}>
											<Link href={`/${item.replace(/ /g, '-')}/Produits/${index}`} className={styles.premierImg}>
												<Image src={ProduitsInteressants[index]} width={1280} height={960} alt='image produit' />
											</Link>
											<Link href={`/${item.replace(/ /g, '-')}/Produits/${index}`} className={styles.secondImg}>
												<Image src={ProduitsInteressants[index]} width={1280} height={960} alt='image produit' />
												<div>
													<p>
														Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsa error architecto dolor
														necessitatibus.
													</p>
													<h4>$ 572 .11</h4>
												</div>
											</Link>
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
