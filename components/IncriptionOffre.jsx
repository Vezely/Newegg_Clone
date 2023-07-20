import Link from 'next/link';
import React from 'react';
import styles from '../styles/IncriptionOffre.module.css';

const IncriptionOffre = () => {
	const cleanText = () => {
		document.getElementById('email').value = '';
	};
	return (
		<div className={styles.container}>
			<div className={styles.box}>
				<div className={styles.box_small}>
					<h3>Les offres juste pour vous</h3>
					<div>Inscrivez-vous pour recevoir des offres exclusives dans votre boîte de réception.</div>
					<form noValidate>
						<label htmlFor='email'>
							<input type='email' name='email' id='email' placeholder='Entrez votre adresse email' />
							<svg viewBox='0 -0.5 1025 1025' fill='#000000' className={styles.svg1}>
								<g id='SVGRepo_iconCarrier'>
									<path
										d='M509.3 606.2c-27.9 0-55.6-9-78.7-26.9L36.4 245.7c-18-15.2-20.2-42.2-5-60.1 15.2-18 42.2-20.2 60.1-5L484.3 513c14.4 11.1 36.5 11.1 52.4-1.2l396.2-331.4c18.1-15.1 45-12.8 60.1 5.4 15.1 18.1 12.7 45-5.4 60.1L590.1 578.3c-24.1 18.7-52.6 27.9-80.8 27.9z'
										fill='#5F6379'></path>
									<path
										d='M894.8 938.6H129.4c-71.3 0-129.4-58-129.4-129.4v-552c0-71.3 58-129.4 129.4-129.4h765.4c71.3 0 129.4 58 129.4 129.4v552.1c0 71.3-58.1 129.3-129.4 129.3zM129.4 213.2c-24.3 0-44 19.8-44 44v552.1c0 24.3 19.8 44 44 44h765.4c24.3 0 44-19.8 44-44V257.2c0-24.3-19.8-44-44-44H129.4z'
										fill='#606377'></path>
								</g>
							</svg>
							<svg
								width='190px'
								height='190px'
								viewBox='-102.4 -102.4 1228.80 1228.80'
								fill='#000000'
								className={styles.svg2}
								onClick={cleanText}>
								<g id='SVGRepo_iconCarrier'>
									<path
										d='M512 1024C229.7 1024 0 794.3 0 512S229.7 0 512 0s512 229.7 512 512-229.7 512-512 512z m0-938.7C276.7 85.3 85.3 276.7 85.3 512S276.7 938.7 512 938.7 938.7 747.3 938.7 512 747.3 85.3 512 85.3z'
										fill='#606377'></path>
									<path
										d='M632.7 675.3c-10.9 0-21.8-4.2-30.2-12.5L361.1 421.5c-16.7-16.7-16.7-43.7 0-60.3 16.7-16.7 43.7-16.7 60.3 0l241.4 241.4c16.7 16.7 16.7 43.7 0 60.3-8.3 8.3-19.2 12.4-30.1 12.4z'
										fill='#5F6379'></path>
									<path
										d='M391.3 675.3c-10.9 0-21.8-4.2-30.2-12.5-16.7-16.7-16.7-43.7 0-60.3l241.4-241.4c16.7-16.7 43.7-16.7 60.3 0 16.7 16.7 16.7 43.7 0 60.3L421.5 662.8c-8.4 8.4-19.3 12.5-30.2 12.5z'
										fill='#5F6379'></path>
								</g>
							</svg>
						</label>
						<input type='submit' value='Inscrivez-vous' />
					</form>
					<Link href='#'>
						<span>Voir les dernières offres d'e-mail</span>
						<svg width='10' height='10' viewBox='0 0 24 24'>
							<path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
						</svg>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default IncriptionOffre;
