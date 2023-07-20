import { useState } from 'react';
import Accueil from '../components/Accueil';
// import connectToDatabase from '../db';
// import Donnees from '../components/Donnees';

export default function Home({ donnees }) {
	return (
		<>
			<Accueil />
			{/* <Donnees donnees={donnees} /> */}
		</>
	);
}

// export async function getServerSideProps() {
// 	const db = await connectToDatabase();

// 	const collection = db.collection('projets');
// 	const donnees = await collection.find({}).toArray();

// 	return {
// 		props: {
// 			donnees: JSON.parse(JSON.stringify(donnees)),
// 		},
// 	};
// }
