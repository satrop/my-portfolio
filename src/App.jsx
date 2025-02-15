import Navigation from './Components/navigation/Navigation';
import Hero from './Components/hero/Hero';
import About from './Components/about/About';
import Skills from './Components/skills/Skills';
import Projects from './Components/projects/Projects';

import './scss/main.scss';

export default function App() {
	return (
		<main>
			<Navigation />
			<Hero id="top" />
			<About id="about" />
			<Skills id="skills" />
			<Projects id="projects" />
		</main>
	);
}
