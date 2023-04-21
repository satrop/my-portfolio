import FeaturedCard from './FeaturedCard';
import Collapse from './Collapse';

import './projects.scss';

const Projects = ({ id }) => {
	return (
		<section id={id}>
			<div className="section-wrapper">
				<div className="h2 eyebrow">A Few Sites I've Built</div>
				<div className="project">
					<div className="projects-wrapper">
						<FeaturedCard />
						<Collapse />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
