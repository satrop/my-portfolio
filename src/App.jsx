import Hero from './Components/Hero/Hero';
import Xp from './Components/Xp/Xp';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import TimeLine from './Components/TimeLine/TimeLine';

import './scss/main.scss';

function App() {
	return (
		<main>
			<Hero />
			<TimeLine />
			<Projects />
			<Xp />
			<Footer />
		</main>
	);
}

export default App;
