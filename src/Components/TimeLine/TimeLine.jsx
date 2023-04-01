import React from 'react';
import TopBar from '../TopBar/TopBar';

import './time.line.scss';

const Projects = () => {
	return (
		<section className="container">
			<div className="project">
				<TopBar left={<div className="h2 eyebrow">Timeline</div>} />
				<div className="projects-wrapper">
					<div className="time-line">
						<div className="time-card">
							<div className="year">1998</div>
							<div className="text-block">
								<p>
									Lorem ipsum dolor, sit amet consectetur
									adipisicing elit. Ratione commodi
									consequatur debitis natus rerum illum, fugit
									quam nobis quod odio nemo nihil animi
									aliquid aut vero ex totam neque iure tempora
									sequi. Veritatis?
								</p>
							</div>
						</div>
						<div className="time-card">
							<div className="year">1998</div>
							<div className="text-block">
								<p>
									Lorem ipsum dolor, sit amet consectetur
									adipisicing elit. Ratione commodi
									consequatur debitis natus rerum illum, fugit
									quam nobis quod odio nemo nihil animi
									aliquid aut vero ex totam neque iure tempora
									sequi. Veritatis?
								</p>
							</div>
						</div>
						<div className="time-card">
							<div className="year">1998</div>
							<div className="text-block">
								<p>
									Lorem ipsum dolor, sit amet consectetur
									adipisicing elit. Ratione commodi
									consequatur debitis natus rerum illum, fugit
									quam nobis quod odio nemo nihil animi
									aliquid aut vero ex totam neque iure tempora
									sequi. Veritatis?
								</p>
							</div>
						</div>
						<div className="time-card">
							<div className="year">1998</div>
							<div className="text-block">
								<p>
									Lorem ipsum dolor, sit amet consectetur
									adipisicing elit. Ratione commodi
									consequatur debitis natus rerum illum, fugit
									quam nobis quod odio nemo nihil animi
									aliquid aut vero ex totam neque iure tempora
									sequi. Veritatis?
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
