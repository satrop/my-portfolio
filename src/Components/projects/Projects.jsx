import FeaturedCard from '../featured-card/FeaturedCard';
import Collapse from '../Collapse';
import { motion } from 'framer-motion';
import LineDraw from '../LineDraw';
import TextAnimation from '../TextAnimation';

import './projects.scss';

const Projects = ({ id }) => {
	const projects = {
		start: {
			opacity: 0,
			y: 100,
		},
		end: {
			opacity: 1,
			y: 0,
			transition: {
				ease: 'easeInOut',
				duration: 1,
			},
		},
	};
	return (
		<section id={id}>
			<div className="section-wrapper">
				<LineDraw />
				<TextAnimation text={"A\xA0Few\xA0Sites\xA0I've\xA0Built"} />
				<motion.div
					className="project"
					variants={projects}
					initial="start"
					whileInView="end">
					<div className="projects-wrapper">
						<FeaturedCard />
						<Collapse />
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Projects;
