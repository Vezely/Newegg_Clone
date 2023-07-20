import React from 'react';
import styles from '../styles/NosMagasins.module.css';
import Link from 'next/link';
import CategoriesTab from '../components/tableaux/CategoriesTab';
import Image from 'next/image';

const NosMagasins = () => {
	// const CategorieAffichee = CategoriesTab.find((categorie) => categorie.type === texteSurvole);
	const autresElements = CategoriesTab.flatMap((categorie) => categorie.contenu.flatMap((element) => element.elements.flatMap((item) => item)));
	// const elementsFiltres = autresElements.filter((element) => element.nom === nomRecherche);
	const filterProduits = autresElements.filter((element) => element.nom === 'SSD')[0].autresElements.slice(0, 4);
	const ProduitsInteressants = [
		'/images/produits/produitsInteressants/i1.png',
		'/images/produits/produitsInteressants/i2.png',
		'/images/produits/produitsInteressants/i3.png',
		'/images/produits/produitsInteressants/i4.jpg',
		// Ajoutez les chemins vers vos autres images ici
	];
	return (
		<>
			<div className={styles.nosMagasins_container}>
				<div className={styles.infoMagasin}>
					<h3>EXPLOREZ NOS MEILLEURS MAGASINS ET TROUVEZ QUELQUE CHOSE DE NOUVEAU</h3>
					<p>
						Nous avons des milliers de boutiques et des millions de produits vendus par nos vendeurs, marques, créateurs et fabricants. Voyez ce
						qui vous attend.
					</p>
					<Link href='#' className={styles.actualiser}>
						<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
							<path d='M23 12c0 1.042-.154 2.045-.425 3h-2.101c.335-.94.526-1.947.526-3 0-4.962-4.037-9-9-9-1.706 0-3.296.484-4.655 1.314l1.858 2.686h-6.994l2.152-7 1.849 2.673c1.684-1.049 3.659-1.673 5.79-1.673 6.074 0 11 4.925 11 11zm-6.354 7.692c-1.357.826-2.944 1.308-4.646 1.308-4.962 0-9-4.038-9-9 0-1.053.191-2.06.525-3h-2.1c-.271.955-.425 1.958-.425 3 0 6.075 4.925 11 11 11 2.127 0 4.099-.621 5.78-1.667l1.853 2.667 2.152-6.989h-6.994l1.855 2.681z' />
						</svg>
						<h4>ACTUALISER POUR PLUS DE VENDEURS</h4>
					</Link>
				</div>
				<div className={styles.boxHead}>
					<div>
						<span>
							<Link href='#'>
								<Image width={2400} height={2400} src='/logo.png' alt='logo' />
							</Link>
						</span>
						<div>
							<Link href='#'>
								<h4>LaCléClé</h4>
							</Link>
							<div className={styles.etoiles}>
								<span>★★★★★ </span>
								<span>42 (95% Positive)</span>
							</div>
						</div>
					</div>
					<div className={styles.categoriInteressantContainer}>
						{filterProduits.map((item, index) => (
							<span key={index}>
								<Link href={`/${item.replace(/ /g, '-')}/Produits/${index}`} className={styles.premierImg}>
									<Image src={ProduitsInteressants[index]} width={1280} height={960} alt='image produit' />
									<span className={styles.reduction}>$ 572 .11</span>
								</Link>
								<Link href={`/${item.replace(/ /g, '-')}/Produits/${index}`} className={styles.secondImg}>
									<Image src={ProduitsInteressants[index]} width={1280} height={960} alt='image produit' />
									<div>
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsa error architecto dolor necessitatibus.</p>
										<h4>$ 572 .11</h4>
									</div>
								</Link>
							</span>
						))}
					</div>
					<div className={styles.raffraichir}>
						<Link href='#'>RAFRAÎCHIR LES ARTICLES</Link>
						<Link href='#'>VOIR LA BOUTIQUE DU VENDEUR</Link>
					</div>
				</div>
				<div className={styles.boxHead}>
					<div>
						<span>
							<Link href='#'>
								<Image width={2400} height={2400} src='/logo.png' alt='logo' />
							</Link>
						</span>
						<div>
							<Link href='#'>
								<h4>LaCléClé</h4>
							</Link>
							<div className={styles.etoiles}>
								<span>★★★★★ </span>
								<span>42 (95% Positive)</span>
							</div>
						</div>
					</div>
					<div className={styles.categoriInteressantContainer}>
						{filterProduits.map((item, index) => (
							<span key={index}>
								<Link href={`/${item.replace(/ /g, '-')}/Produits/${index}`} className={styles.premierImg}>
									<Image src={ProduitsInteressants[index]} width={1280} height={960} alt='image produit' />
									<span className={styles.reduction}>$ 572 .11</span>
								</Link>
								<Link href={`/${item.replace(/ /g, '-')}/Produits/${index}`} className={styles.secondImg}>
									<Image src={ProduitsInteressants[index]} width={1280} height={960} alt='image produit' />
									<div>
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsa error architecto dolor necessitatibus.</p>
										<h4>$ 572 .11</h4>
									</div>
								</Link>
							</span>
						))}
					</div>
					<div className={styles.raffraichir}>
						<Link href='#'>RAFRAÎCHIR LES ARTICLES</Link>
						<Link href='#'>VOIR LA BOUTIQUE DU VENDEUR</Link>
					</div>
				</div>
				<div className={styles.boxHead}>
					<div>
						<span>
							<Link href='#'>
								<Image width={2400} height={2400} src='/logo.png' alt='logo' />
							</Link>
						</span>
						<div>
							<Link href='#'>
								<h4>LaCléClé</h4>
							</Link>
							<div className={styles.etoiles}>
								<span>★★★★★ </span>
								<span>42 (95% Positive)</span>
							</div>
						</div>
					</div>
					<div className={styles.categoriInteressantContainer}>
						{filterProduits.map((item, index) => (
							<span key={index}>
								<Link href={`/${item.replace(/ /g, '-')}/Produits/${index}`} className={styles.premierImg}>
									<Image src={ProduitsInteressants[index]} width={1280} height={960} alt='image produit' />
									<span className={styles.reduction}>$ 572 .11</span>
								</Link>
								<Link href={`/${item.replace(/ /g, '-')}/Produits/${index}`} className={styles.secondImg}>
									<Image src={ProduitsInteressants[index]} width={1280} height={960} alt='image produit' />

									<div>
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsa error architecto dolor necessitatibus.</p>
										<h4>$ 572 .11</h4>
									</div>
								</Link>
							</span>
						))}
					</div>
					<div className={styles.raffraichir}>
						<Link href='#'>RAFRAÎCHIR LES ARTICLES</Link>
						<Link href='#'>VOIR LA BOUTIQUE DU VENDEUR</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default NosMagasins;
