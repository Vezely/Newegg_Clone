import MeilleursOffre from './meilleursOffre';
import Menu from './Menu';

export default function Accueil() {
	console.log();
	return (
		<main>
			<div>
				<Menu />
				<MeilleursOffre />
			</div>
		</main>
	);
}
