import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import styles from '../styles/Categories.module.css';

const Categories = () => {
	const containerRef = useRef(null);
	const [isEndOfScroll, setIsEndOfScroll] = useState(false);
	const [isStartOfScroll, setIsStartOfScroll] = useState(false);

	const scrollLeft = () => {
		if (containerRef.current) {
			containerRef.current.scrollLeft -= 200;
			if (containerRef.current.scrollLeft === 0) {
				setIsStartOfScroll(true);
			} else {
				setIsStartOfScroll(false);
			}
			setIsEndOfScroll(false);
		}
	};

	const scrollRight = () => {
		if (containerRef.current) {
			containerRef.current.scrollLeft += 200;
			if (containerRef.current.scrollLeft >= containerRef.current.scrollWidth - containerRef.current.clientWidth) {
				setIsEndOfScroll(true);
			} else {
				setIsEndOfScroll(false);
			}
			setIsStartOfScroll(false);
		}
	};

	const images = [
		{
			nom: 'Logiciels',
			src: '/images/produits/categories/1.png',
		},
		{
			nom: 'Casques VR',
			src: '/images/produits/categories/2.png',
		},
		{
			nom: 'Drones',
			src: '/images/produits/categories/3.png',
		},
		{
			nom: 'Appareils ménagers',
			src: '/images/produits/categories/4.png',
		},
		{
			nom: 'Téléviseurs',
			src: '/images/produits/categories/5.png',
		},
		{
			nom: "Mobilier d'origine et d'office",
			src: '/images/produits/categories/6.png',
		},
		{
			nom: 'Clavier de jeu et souris',
			src: '/images/produits/categories/7.png',
		},
		{
			nom: 'Imprimantes',
			src: '/images/produits/categories/8.png',
		},
		{
			nom: 'PC réfroidissement',
			src: '/images/produits/categories/9.png',
		},
		{
			nom: 'Électroniques',
			src: '/images/produits/categories/10.png',
		},
	];
	return (
		<div className={styles.container}>
			<div className={styles.titre}>
				<h3>CATÉGORIES</h3>
			</div>
			<div className={styles.Categories_Box}>
				<div className={styles.direction}>
					<svg id='svg-left' onClick={scrollLeft} style={isStartOfScroll ? { opacity: '0.3' } : null}>
						<g id='SVGRepo_iconCarrier'>
							<g>
								<path d='M16,32c8.822,0,16-7.178,16-16S24.822,0,16,0S0,7.178,0,16S7.178,32,16,32z M16,1c8.271,0,15,6.729,15,15 s-6.729,15-15,15S1,24.271,1,16S7.729,1,16,1z'></path>
								<path d='M18.069,21.2c0.098,0.098,0.226,0.146,0.354,0.146s0.256-0.049,0.354-0.146 c0.195-0.195,0.195-0.512,0-0.707L14.284,16l4.492-4.493c0.195-0.195,0.195-0.512,0-0.707s-0.512-0.195-0.707,0l-4.846,4.846 c-0.195,0.195-0.195,0.512,0,0.707L18.069,21.2z'></path>
							</g>
						</g>
					</svg>
					<svg id='svg-right' onClick={scrollRight} style={isEndOfScroll ? { opacity: '0.3' } : null}>
						<g id='SVGRepo_iconCarrier'>
							<g>
								<path d='M16,32c8.822,0,16-7.178,16-16S24.822,0,16,0S0,7.178,0,16S7.178,32,16,32z M16,1c8.271,0,15,6.729,15,15 s-6.729,15-15,15S1,24.271,1,16S7.729,1,16,1z'></path>
								<path d='M13.224,21.2c0.098,0.098,0.226,0.146,0.354,0.146s0.256-0.049,0.354-0.146l4.846-4.846 c0.195-0.195,0.195-0.512,0-0.707L13.931,10.8c-0.195-0.195-0.512-0.195-0.707,0s-0.195,0.512,0,0.707L17.716,16l-4.492,4.493 C13.028,20.688,13.028,21.004,13.224,21.2z'></path>
							</g>
						</g>
					</svg>
				</div>
				<div ref={containerRef} className={styles.box_container}>
					{images.map((item, index) => (
						<div className={styles.box_container2} key={index}>
							<div className={styles.box}>
								<Link href='#'>
									<div>
										<Image src={item.src} width={160} height={160} alt='image' />
									</div>
									<div>{item.nom}</div>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Categories;
