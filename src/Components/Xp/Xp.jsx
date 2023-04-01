import React from 'react';
import Rings from '../Rings/Rings';
import TopBar from '../TopBar/TopBar';

import './xp.scss';

const Xp = () => {
	return (
		<section className="container">
			<TopBar left={<div className="h2 eyebrow">What I Know</div>} />
			<div className="xp grid">
				<div className="card">
					<h3>HTML</h3>
					{/* <p>13 Years Experience</p> */}
				</div>
				<div className="card">
					<h3>CSS/SCSS</h3>
					{/* <p>13 Years Experience</p> */}
				</div>
				<div className="card">
					<h3>JavaScript</h3>
					{/* <p>7 Years Experience</p> */}
				</div>
				<div className="card">
					<h3>Accessibility</h3>
					{/* <p>7 Years Experience</p> */}
				</div>
				<div className="card">
					<h3>React</h3>
					{/* <p>1 Year of Experience</p> */}
				</div>
				<div className="card">
					<h3>jQuery</h3>
					{/* <p>7 Years Experience</p> */}
				</div>
				<div className="card">
					<h3>Astro</h3>
					{/* <p>7 Years Experience</p> */}
				</div>
				<div className="card">
					<h3>TypeScript</h3>
					{/* <p>7 Years Experience</p> */}
				</div>
				<Rings />
			</div>
		</section>
	);
};

export default Xp;
