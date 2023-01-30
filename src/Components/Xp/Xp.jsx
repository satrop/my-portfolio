import React from 'react';
import Rings from '../Rings/Rings';

import './xp.scss';

const Xp = () => {
	return (
		<section className="container">
			<div className="xp grid">
				<div className="card">
					<h2>HTML</h2>
					<p>13 Years Experience</p>
				</div>
				<div className="card">
					<h2>CSS</h2>
					<p>13 Years Experience</p>
				</div>
				<div className="card">
					<h2>JavaScript</h2>
					<p>7 Years Experience</p>
				</div>
				<div className="card">
					<h2>Accessibility</h2>
					<p>7 Years Experience</p>
				</div>
				<div className="card">
					<h2>React</h2>
					<p>1 Year of Experience</p>
				</div>
				<div className="card">
					<h2>SCSS</h2>
					<p>7 Years Experience</p>
				</div>
				<Rings />
			</div>
		</section>
	);
};

export default Xp;
