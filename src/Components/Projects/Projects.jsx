import React from 'react';
import TopBar from '../TopBar/TopBar';
import Cards from '../Card/Card';

import './projects.scss';

const Projects = () => {
	return (
		<section className="container">
			<div className="project">
				<TopBar
					left={<div className="h1">Projects</div>}
				/>
				<div className="projects-wrapper">
					<Cards />
				</div>
			</div>
		</section>
	);
};

export default Projects;
