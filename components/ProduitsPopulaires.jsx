import Link from 'next/link';
import React from 'react';
import styles from '../styles/ProduitsPopulaires.module.css';
import CategoriesTab from './tableaux/CategoriesTab';
const ProduitsPopulaires = () => {
	const nom = CategoriesTab[0].contenu[0].elements;
	return (
		<div className={styles.container}>
			<h4>PRODUITS POPULAIRES</h4>
			<div className={styles.box_container}>
				{nom.map((item, index) => (
					<Link href='#' className={styles.box} key={index}>
						<span>{item.nom}</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default ProduitsPopulaires;
