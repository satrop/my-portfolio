import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import About from './Components/About';
import Tech from './Components/Tech';
import Projects from './Components/Projects';

import './scss/main.scss';

export default function App() {
	return (
		<div className="Wrapper">
			<Navigation />
			<Hero id="top" />
			<About id="about" />
			<Tech id="tech" />
			<Projects id="projects"/>
		</div>
	);
}
