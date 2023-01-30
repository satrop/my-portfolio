import Hero from './Components/Hero/Hero';
import Xp from './Components/Xp/Xp';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';

import './scss/main.scss';

function App() {
	return (
		<main>
			<Hero />
			<Xp />
			<Projects />
			<Footer />
		</main>
	);
}

export default App;
