import Image from 'next/image';
import Menu from './Menu';
import Link from 'next/link';
import logo from '../public/images/design/logoVG1.webp';
import styles from '../styles/Header.module.css';
import { useTheme } from './ThemeProvider';
import React, { useEffect, useState, useRef } from 'react';
import CategoriesTab from './tableaux/CategoriesTab';
const Header = () => {
	const [popup, setPopup] = useState(true);

	const positionActive = () => {
		setPopup(!popup);
	};
	const popupRef = useRef();

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (popupRef.current && popupRef.current.contains(event.target)) {
				setPopup(true);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);
	const [theme, setTheme] = useTheme();
	const handleThemeChange = (event) => {
		setTheme(event.target.checked ? 'Sombre' : 'Lumière');
	};
	const [menu, setMenu] = useState(false);
	const toggleMenu = () => {
		const checkbox = document.getElementById('checkboxMenu');
		setMenu(!menu);
	};

	const menuRef = useRef();
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (menuRef.current && menuRef.current.contains(event.target)) {
				setMenu(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);
	const [texteClicker, setTexteClicker] = useState('Composants et stockage');

	const handleClick = (texte) => {
		setTexteClicker(texte);
		// console.log(texte);
	};
	const CategorieAffichee = CategoriesTab.find((categorie) => categorie.type === texteClicker);
	// console.log(CategorieAffichee);

	const [categorieAfficher, setCategorieAfficher] = useState(true);

	const changerCategrie = () => {
		setCategorieAfficher(!categorieAfficher);
	};
	const [texteSCClicker, setTexteScClicker] = useState('Composants de base');

	const handleClickSousCategorie = (texte) => {
		setTexteScClicker(texte);
		// console.log(texte);
	};
	const SousCategorieAffichee = CategorieAffichee.contenu.find((sousCategorie) => sousCategorie.categorie === texteSCClicker);

	const [tabHistorique, setTabHistorique] = useState([]);
	const historiqueRecherche = (texte) => {
		if (!tabHistorique.includes(texte)) {
			setTabHistorique((prevState) => [...prevState, texte]);
		}
	};
	// console.log(tabHistorique);
	const supprimerElement = (elementASupprimer) => {
		setTabHistorique((prevState) => prevState.filter((element) => element !== elementASupprimer));
	};
	const viderTableau = () => {
		setTabHistorique([]);
	};

	const [sousCategorieAfficher, setSousCategorieAfficher] = useState(false);
	const changerSousCategrie = () => {
		setSousCategorieAfficher(!sousCategorieAfficher);
	};

	// Sous categorie 2
	const [texteSC2Clicker, setTexteSc2Clicker] = useState('Mémoire');

	const handleClickSousCategorie2 = (texte) => {
		setTexteSc2Clicker(texte);
		// console.log(texte);
	};
	const SousCategorie2Affichee = SousCategorieAffichee?.elements.find((sousCategorie2) => sousCategorie2.nom === texteSC2Clicker);
	const [sousCategorie2Afficher, setSousCategorie2Afficher] = useState(false);
	const changerSousCategrie2 = () => {
		setSousCategorie2Afficher(!sousCategorie2Afficher);
		// changerSousCategrie();
	};
	// console.log(SousCategorie2Affichee);

	const empecherNavigation = (event) => {
		event.preventDefault();
	};
	return (
		<header className={styles.header}>
			<div className={styles.menuContainer}>
				<svg
					className={`${styles.menu} ${menu ? styles.menuSurvol : ''}`}
					onClick={toggleMenu}
					id='checkboxMenu'
					width='40'
					height='40'
					fill='currentColor'
					viewBox='0 0 24 24'>
					<path d='M3.6 6a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 1 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 6Zm0 6a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 1 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 12Zm0 6a1.2 1.2 0 0 1 1.2-1.2h14.4a1.2 1.2 0 1 1 0 2.4H4.8A1.2 1.2 0 0 1 3.6 18Z'></path>
				</svg>
			</div>
			<div className={`${styles.menu_nav} ${menu ? styles.menuActiv : ''}`}>
				<div className={styles.masker} ref={menuRef}></div>
				{categorieAfficher && (
					<div className={styles.slade1}>
						<div className={styles.fleche_menu}></div>
						<ul className={styles.ul}>
							<li className={styles.li}>
								<Link href='https://porfolio-vezely-kante.vercel.app/'>
									<div>
										<svg width='15' height='15' viewBox='0 0 24 24'>
											<path d='M20.422 11.516c-.178-3.233-3.031-5.778-6.432-5.492-1.087-1.239-2.693-2.024-4.49-2.024-3.172 0-5.754 2.443-5.922 5.516-2.033.359-3.578 2.105-3.578 4.206 0 2.362 1.949 4.278 4.354 4.278h1.326c.771 1.198 2.124 2 3.674 2h10.291c2.406 0 4.355-1.916 4.355-4.278 0-2.101-1.545-3.847-3.578-4.206zm-15.395 4.484h-.673c-1.297 0-2.354-1.022-2.354-2.278 0-2.118 2.104-2.597 3.488-2.512-.05-1.356.137-5.21 4.012-5.21.967 0 1.714.25 2.29.644-1.823.922-3.096 2.746-3.212 4.872-2.022.358-3.697 2.127-3.551 4.484zm14.618 2h-10.291c-1.297 0-2.354-1.022-2.354-2.278 0-2.118 2.104-2.597 3.488-2.512-.05-1.356.137-5.21 4.012-5.21 3.771 0 4.229 3.771 4.012 5.209 1.509-.105 3.488.437 3.488 2.513 0 1.256-1.057 2.278-2.355 2.278z' />
										</svg>
										<span>Les meilleures offres du jour</span>
									</div>
								</Link>
							</li>
							<li className={styles.li}>
								<Link href='#'>
									<div>
										<svg width='15' height='15' viewBox='0 0 24 24'>
											<path d='M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z' />
										</svg>
										<span>Offres par e-mail</span>
									</div>
								</Link>
							</li>
							<li className={styles.li}>
								<Link href='#'>
									<div>
										<svg width='15' height='15' viewBox='0 0 24 24'>
											<path d='M23.131 18.937l-9.662-9.663c-.662-.661-1.002-1.581-.93-2.514.137-1.767-.471-3.58-1.82-4.93-1.225-1.224-2.825-1.83-4.428-1.83-.603 0-1.207.086-1.791.257l3.771 3.771c.408 1.889-2.33 4.66-4.242 4.242l-3.771-3.77c-.172.584-.258 1.188-.258 1.792 0 1.602.607 3.202 1.83 4.426 2.616 2.619 4.932 2.103 7.857 2.262 3.37.184 6.562 2.729 6.279 7.183l2.969 2.969c.581.578 1.339.868 2.098.868 1.797 0 2.967-1.467 2.967-2.989 0-.731-.27-1.474-.869-2.074zm-2.131 3.063c-.553 0-1-.448-1-1s.447-1 1-1 1 .447 1 1-.447 1-1 1zm-11.5-7c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zm-.469 6.484l-1.688-1.637.696-.697.991.94 2.116-2.169.696.696-2.811 2.867z' />
										</svg>
										<span>Construisez votre propre PC personnalisé</span>
									</div>
								</Link>
							</li>
							<li className={styles.li}>
								<Link href='#'>
									<div>
										<svg width='15' height='15' viewBox='0 0 24 24'>
											<path d='M19.46 7.594c2.21 5.602 2.54 8.12 2.54 9.123 0 .797-.299.866-.525.664-2.932-2.607-3.57-3.38-5.858-3.38h-7.233c-2.282 0-2.895.746-5.858 3.381-.228.201-.526.13-.526-.665 0-1.003.33-3.522 2.541-9.123.639-1.616 1.763-1.88 2.771-1.361 3.068 1.581 6.498 1.482 9.377 0 1.002-.518 2.129-.263 2.771 1.361zm-1.836-3.594c-.656 0-1.298.17-1.852.456-2.397 1.235-5.146 1.236-7.544 0-.554-.286-1.196-.456-1.852-.456-1.403 0-2.873.777-3.695 2.86-1.736 4.396-2.681 7.794-2.681 9.857 0 1.586.56 2.59 1.749 3.178.143.071.297.105.449.105.243 0 .483-.087.672-.255l3.109-2.745c.558-.494 1.044-1.004 2.404-1.004h7.232c1.36 0 1.847.51 2.404 1.004l3.109 2.745c.191.168.432.255.674.255.153 0 .307-.034.449-.105 1.189-.588 1.749-1.592 1.749-3.179 0-2.062-.945-5.461-2.68-9.856-.822-2.083-2.293-2.86-3.696-2.86zm-2.874 5.75c.414 0 .75.335.75.75s-.336.75-.75.75-.75-.335-.75-.75.336-.75.75-.75zm1.75 3.25c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75zm0-3.531c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75zm1.734 1.781c-.414 0-.75-.335-.75-.75s.336-.75.75-.75.75.335.75.75-.336.75-.75.75zm-10.734-2.25c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5zm0-1c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5-1.119-2.5-2.5-2.5zm4.5 0c-.553 0-1 .448-1 1s.447 1 1 1 1-.448 1-1-.447-1-1-1z' />
										</svg>
										<span>Recherche de PC de jeu</span>
									</div>
								</Link>
							</li>
							<li className={styles.li}>
								<Link href='#'>
									<div>
										<svg width='15' height='15' viewBox='0 0 24 24'>
											<path d='M13.697 12.001a2.249 2.249 0 0 1 3.357 0'></path>
											<path d='M6.947 12.001a2.25 2.25 0 0 1 3.356 0'></path>
											<path d='M14.484 16.5a4.49 4.49 0 0 1-4.968 0'></path>
											<path d='M20.25 4.527a.739.739 0 0 0-1.022-.694c-1.416.544-4.144 1.415-7.228 1.415-3.084 0-5.812-.871-7.228-1.415a.74.74 0 0 0-1.022.694v5.221c0 6.629 3.694 12 8.25 12s8.25-5.371 8.25-12V4.527Z'></path>
										</svg>
										<span>Idées de cadeau</span>
									</div>
								</Link>
							</li>
							<li className={styles.li}>
								<Link href='#'>
									<div>
										<svg width='15' height='15' viewBox='0 0 24 24'>
											<path d='M13.387 17.375c-.679.385-2.076.385-2.756 0-.097 1.239-1.419 2.625-3.631 2.625v4h10v-4c-2.275 0-3.516-1.386-3.613-2.625zm2.613 5.625h-8v-2h8v2zm8-19.993c-.377 4.162-2.872 8.083-7.039 9.392.334-.551.665-1.157.984-1.816 2.959-1.515 4.097-4.265 4.527-6.279h-2.78c.058-.551.103-.779.103-1.297h4.205zm-16.961 9.392c-4.167-1.309-6.662-5.23-7.039-9.392h4.205c0 .518.045.746.103 1.297h-2.78c.431 2.015 1.568 4.764 4.527 6.279.319.659.65 1.265.984 1.816zm6.375 3.677c.612-2.957 4.965-5.038 5.39-12.958.138-2.574-4.129-3.118-6.795-3.118-2.754 0-6.915.423-6.825 2.8.309 8.18 4.8 10.279 5.421 13.276.639.534 2.168.534 2.809 0zm-6.891-13.373c0-.839 2.628-1.456 5.485-1.456 2.716 0 5.492.667 5.492 1.542 0 .9-2.911 1.307-5.492 1.307-2.458.001-5.485-.372-5.485-1.393zm2.233 2.421c.308 2.767 1.083 5.562 2.491 7.995-1.915-2.211-3.454-4.886-4.075-8.304.506.132 1.035.236 1.584.309z' />
										</svg>
										<span>Meilleures ventes</span>
									</div>
								</Link>
							</li>
							<li className={styles.li}>
								<Link href='#'>
									<div>
										<svg width='15' height='15' viewBox='0 0 24 24'>
											<path d='M21.62 20.196c1.055-.922 1.737-2.262 1.737-3.772 0-1.321-.521-2.515-1.357-3.412v-6.946l-11.001-6.066-11 6v12.131l11 5.869 5.468-2.917c.578.231 1.205.367 1.865.367.903 0 1.739-.258 2.471-.676l2.394 3.226.803-.596-2.38-3.208zm-11.121 2.404l-9.5-5.069v-10.447l9.5 4.946v10.57zm1-.001v-10.567l5.067-2.608.029.015.021-.04 4.384-2.256v5.039c-.774-.488-1.686-.782-2.668-.782-2.773 0-5.024 2.252-5.024 5.024 0 1.686.838 3.171 2.113 4.083l-3.922 2.092zm6.833-2.149c-2.219 0-4.024-1.808-4.024-4.026s1.805-4.025 4.024-4.025c2.22 0 4.025 1.807 4.025 4.025 0 2.218-1.805 4.026-4.025 4.026zm-.364-3.333l-1.306-1.147-.66.751 2.029 1.782 2.966-3.12-.725-.689-2.304 2.423zm-16.371-10.85l4.349-2.372 9.534 4.964-4.479 2.305-9.404-4.897zm9.4-5.127l9.404 5.186-3.832 1.972-9.565-4.98 3.993-2.178z' />
										</svg>
										<span>Déballez ceci !</span>
									</div>
								</Link>
							</li>
							<li className={styles.li}>
								<Link href='#'>
									<div>
										<svg width='25' height='25' viewBox='0 0 24 24'>
											<path d='M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7' />
											<path d='M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3' />
											<path d='M9.7 17l4.6 0' />
										</svg>
										<span>Créateur de Newegg</span>
									</div>
								</Link>
							</li>
							<div className={styles.tiret}></div>
							<div className={styles.sous_categorie}>
								<h3>Événements tendance</h3>
								<li className={styles.li}>
									<Link href='#'>Numérisez votre style de vie</Link>
								</li>
							</div>
							<div className={styles.tiret}></div>
							<div className={styles.sous_categorie}>
								<h3>Plus sur Newegg</h3>
								<li className={styles.li}>
									<Link href='#'>Carte de crédit du magasin Newegg</Link>
								</li>
								<li className={styles.li}>
									<Link href='#'>Carte-cadeau Newegg</Link>
								</li>
								<li className={styles.li}>
									<Link href='#'>Newegg Select</Link>
								</li>
								<li className={styles.li}>
									<Link href='#'>Initié Newegg</Link>
								</li>
								<li className={styles.li}>
									<Link href='#'>Entreprise Newegg</Link>
								</li>
							</div>
						</ul>
					</div>
				)}
				{categorieAfficher && (
					<div className={styles.slade2}>
						<h3>TOUS LES PRODUITS</h3>
						<ul className={styles.ul}>
							{CategoriesTab.map((categorie, index) => (
								<li
									className={styles.li}
									key={index}
									onClick={() => {
										changerCategrie();
										handleClick(categorie.type);
									}}>
									<Link href={`/${categorie.type.replace(/ /g, '-')}/Categorie/${index}`} onClick={empecherNavigation}>
										<div>
											<span>{categorie.type}</span>
										</div>
										<svg width='10' height='10' viewBox='0 0 24 24'>
											<path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
										</svg>
									</Link>
								</li>
							))}
						</ul>
					</div>
				)}
				{!categorieAfficher && (
					<div className={styles.sousCategorie1}>
						<div className={styles.fleche_menu}></div>
						<ul className={styles.ul}>
							<li
								className={styles.retourH}
								onClick={() => {
									changerCategrie();
									changerSousCategrie();
									viderTableau();
								}}>
								<svg width='10' height='10' viewBox='0 0 24 24'>
									<path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
								</svg>
								<div>
									<span>Rétour à la position principale</span>
								</div>
							</li>
							{tabHistorique.length > 0 && (
								<>
									{tabHistorique.map((item, index) => (
										<li
											key={index}
											className={styles.retourH}
											onClick={() => {
												changerCategrie();
												changerSousCategrie();
												supprimerElement(item);
											}}>
											<svg width='10' height='10' viewBox='0 0 24 24'>
												<path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
											</svg>
											<div>
												<span>Rétour aux {item}</span>
											</div>
										</li>
									))}
								</>
							)}
							<li className={`${styles.li} ${styles.categ}`}>
								<Link href={`/${CategorieAffichee.contenu[0].categorie.replace(/ /g, '-')}/Categorie/0`} onClick={empecherNavigation}>
									<div>
										<span>{CategorieAffichee.contenu[0].categorie}</span>
										<span className={styles.voirPlus}>Voir plus</span>
									</div>
								</Link>
							</li>
							{!sousCategorieAfficher && (
								<>
									{CategorieAffichee.contenu.slice(1).map((categorie, index) => (
										<li
											className={styles.li}
											key={index}
											onClick={() => {
												changerSousCategrie();
												handleClickSousCategorie(categorie.categorie);
												historiqueRecherche(texteClicker);
											}}>
											<Link href={`/${categorie.categorie.replace(/ /g, '-')}/Categorie/${index}`} onClick={empecherNavigation}>
												<div>
													<span>{categorie.categorie}</span>
												</div>
												<svg width='10' height='10' viewBox='0 0 24 24'>
													<path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
												</svg>
											</Link>
										</li>
									))}
								</>
							)}
							{sousCategorieAfficher && !SousCategorie2Affichee && (
								<>
									{SousCategorieAffichee?.elements.map((categorie, index) => (
										<li
											className={styles.li}
											key={index}
											onClick={() => {
												historiqueRecherche(texteSCClicker);
												handleClickSousCategorie2(categorie.nom);
												changerSousCategrie2();
											}}>
											<Link href={categorie.autresElements ? '' : `/${categorie.nom.replace(/ /g, '-')}/Categorie/${index}`}>
												<div>
													<span>{categorie.nom}</span>
												</div>
												{categorie.autresElements && (
													<svg width='10' height='10' viewBox='0 0 24 24'>
														<path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
													</svg>
												)}
											</Link>
										</li>
									))}
								</>
							)}
							{sousCategorie2Afficher && SousCategorie2Affichee.autresElements && (
								<>
									{SousCategorie2Affichee?.autresElements?.map((item, index) => (
										<li className={styles.li} key={index}>
											<Link href={`/${item.replace(/ /g, '-')}/Categorie/${index}`} onClick={viderTableau}>
												<div>
													<span>{item}</span>
												</div>
											</Link>
										</li>
									))}
								</>
							)}
						</ul>
					</div>
				)}
			</div>
			<div className={styles.logo}>
				<Image width={155} height={57} src={logo} alt='logo' />
			</div>
			<div className={styles.localisation} onClick={positionActive}>
				<div className={`${styles.position} ${!popup ? styles.positionHover : ''}`}>
					<svg width='24' height='24'>
						<path d='M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602' />
					</svg>
					<div className={styles.Selectionnez}>
						<div>Bonjour</div>
						<div>Sélection d&apos;adresse</div>
					</div>
				</div>
			</div>
			<div className={`${styles.popupPosotion} ${popup ? styles.togglePosition : ''}`}>
				<div className={styles.masker} ref={popupRef}></div>
				<h3>CHOISISSEZ VOTRE EMPLACEMENT</h3>
				<div className={styles.options}>
					<div className={styles.fleche}></div>
					<svg className={styles.close} width='24' height='24' onClick={positionActive}>
						<path d='M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z' />
					</svg>
					<p>Les options de livraison et les délais de livraison peuvent varier selon les endroits.</p>
					<button>CONNECTEZ-VOUS POUR VOIR VOS ADRESSES</button>
				</div>
				<div className={styles.tiretContainer}>
					<div className={styles.tiret}></div>
					<div className={styles.ouChoisir}>ou</div>
				</div>
				<form className={styles.form}>
					<label htmlFor='postal' className={styles.label_form}>
						<input type='text' name='postal' className={styles.postal} required />
						<input type='submit' value='Appliquez' />
					</label>
				</form>
				<div className={styles.tiretContainer}>
					<div className={styles.tiret}></div>
					<div className={styles.ouChoisir}>ou</div>
				</div>
				<select name='' id='' className={styles.select}>
					<option value=''>Argentina</option>
					<option value=''>Australia</option>
					<option value=''>Bahrain</option>
					<option value=''>Canada</option>
					<option value=''>Hong Kong</option>
					<option value=''>Israel</option>
					<option value=''>Japan</option>
					<option value=''>Kuwait</option>
					<option value=''>Mexico</option>
					<option value=''>New Zealand</option>
					<option value=''>Oman</option>
					<option value=''>Philippines</option>
					<option value=''>Qatar</option>
					<option value=''>Saudi Arabia</option>
					<option value=''>Singapore</option>
					<option value=''>South Korea</option>
					<option value=''>Thailand</option>
					<option value=''>United Kingdom</option>
				</select>
				<div className={styles.Fait}>
					<button>Fait</button>
				</div>
			</div>
			<label htmlFor='postal' className={styles.bar_recherche}>
				<input type='search' id='postal' className={styles.postal} required />
				<div>
					{/* localiser */}
					<svg className={styles.svgSearch} viewBox='0 0 24 24'>
						<path d='m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z' />
					</svg>
				</div>
			</label>
			<div className={styles.notification}>
				<svg width='32' height='28' viewBox='0 0 24 24'>
					<path d='M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6' />
					<path d='M9 17v1a3 3 0 0 0 6 0v-1' />
				</svg>
			</div>
			<div className={styles.pays}>
				<svg width='32' height='28' viewBox='0 0 24 24' stroke='#2c3e50' fill='none'>
					<path d='M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0' />
					<path d='M3.6 9h16.8' />
					<path d='M3.6 15h16.8' />
					<path d='M11.5 3a17 17 0 0 0 0 18' />
					<path d='M12.5 3a17 17 0 0 1 0 18' />
				</svg>
			</div>

			<label htmlFor='theme' className={styles.theme}>
				<span className={styles.theme__toggle_wrap}>
					<input id='theme' className={styles.theme__toggle} type='checkbox' checked={theme === 'Sombre'} onChange={handleThemeChange} />

					<span className={styles.theme__icon}>
						<span className={styles.theme__icon_part}></span>
						<span className={styles.theme__icon_part}></span>
						<span className={styles.theme__icon_part}></span>
						<span className={styles.theme__icon_part}></span>
						<span className={styles.theme__icon_part}></span>
						<span className={styles.theme__icon_part}></span>
						<span className={styles.theme__icon_part}></span>
						<span className={styles.theme__icon_part}></span>
						<span className={styles.theme__icon_part}></span>
					</span>
				</span>
				<div className={styles.focus}>
					<span></span>
					<div>Passer en mode {theme === 'Sombre' ? 'Lumière' : 'Sombre'}</div>
				</div>
			</label>
			<div className={styles.user}>
				<svg width='24' height='24' viewBox='0 0 24 24'>
					<path d='M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.082 0-8.465 4.949-3.732 13.678 1.598 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h1.995c0-3.134-.125-3.55 1.838-4.003 2.851-.657 5.543-1.278 6.525-3.456.359-.795.592-2.103-.338-3.815-2.058-3.799-2.578-7.089-1.423-9.026 1.354-2.275 5.426-2.264 6.767-.034 1.15 1.911.639 5.219-1.403 9.076-.91 1.719-.671 3.023-.31 3.814.99 2.167 3.707 2.794 6.584 3.458 1.879.436 1.76.882 1.76 3.986h1.995l.005-1.241c0-2.52-.199-3.975-3.178-4.663z' />
				</svg>
				<div className={styles.Selectionnez}>
					<div>Bienvenu</div>
					<div>Se connecter / Compte </div>
				</div>
			</div>
			<div className={styles.retour}>
				<div className={styles.Selectionnez}>
					<div>Retour</div>
					<div>& Ordres </div>
				</div>
			</div>
			<div className={styles.panier}>
				<svg width='24' height='24'>
					<path d='M13.5 21c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-6 2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m16.5-16h-2.964l-3.642 15h-13.321l-4.073-13.003h19.522l.728-2.997h3.75v1zm-22.581 2.997l3.393 11.003h11.794l2.674-11.003h-17.861z' />
				</svg>
				<div className={styles.Selectionnez}>
					<div>3 Items</div>
					<div>$209.99</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
