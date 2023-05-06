import './Skills.scss';

const Skills = ({ id }) => {
	return (
		<section id={id}>
			<div className="section-wrapper">
				<div className="h2 eyebrow">Skills</div>
				<div className="skills grid">
					<div className="skills-section">
						<h3>Programming Languages</h3>
						<ul>
							<li>JavaScript (ES6)</li>
							<li>TypeScript</li>
							<li>HTML</li>
							<li>CSS/SCSS</li>
							<li>PHP</li>
						</ul>
					</div>
					<div className="skills-section">
						<h3>Libraries & Frameworks</h3>
						<ul>
							<li>jQuery</li>
							<li>React</li>
							<li>Astro</li>
						</ul>
					</div>
					<div className="skills-section">
						<h3>Tools & Platforms</h3>
						<ul>
							<li>Git</li>
							<li>Gulp</li>
							<li>Webpack</li>
							<li>Netlify</li>
							<li>Wordpress</li>
						</ul>
					</div>
					<div className="skills-section">
						<h3>Design</h3>
						<ul>
							<li>Sketch</li>
							<li>InVision</li>
							<li>InDesign</li>
							<li>Photoshop</li>
							<li>Figma</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
