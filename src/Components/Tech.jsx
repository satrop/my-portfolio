import './tech.scss';

const Tech = ({ id }) => {
	return (
		<section id={id}>
			<div className="section-wrapper">
				<div className="h2 eyebrow">Tech I've Been Using</div>
				<ul className="xp grid">
					<li>
						<h3>JavaScript (ES6+)</h3>
					</li>
					<li>
						<h3>React</h3>
					</li>
					<li>
						<h3>jQuery</h3>
					</li>
					<li>
						<h3>Astro</h3>
					</li>
					<li>
						<h3>TypeScript</h3>
					</li>
					<li>
						<h3>SCSS</h3>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Tech;
