import React from 'react';
import Menu from './Menu';
import styles from '../styles/Head.module.css';

const Head = () => {
	return (
		<div className={styles.Head}>
			<Menu className={styles.menu} />
			<div className={styles.headSladeContaoner}>
				<div className={styles.headSlade}>kante</div>
			</div>
		</div>
	);
};

export default Head;
