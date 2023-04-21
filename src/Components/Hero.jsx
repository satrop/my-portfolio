import React, { useState } from 'react';
import { VscGithubAlt } from 'react-icons/vsc';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { RxFileText } from 'react-icons/rx';
import { ImCodepen } from 'react-icons/im';
import { SiFrontendmentor } from 'react-icons/si';
import ToolTip from './ToolTip';

import './hero.scss';
import './Modal.scss';

const Hero = ({ id }) => {
	const [dialogOpen, setDialogOpen] = useState(false);

	const openDialog = () => {
		setDialogOpen((prevOpen) => !dialogOpen);
	};

	return (
		<>
			<section id={id}>
				<div className="welcome">
					<div>Nice to meet you!</div>
					<h1>I'm Steve Portas</h1>
					<p>
						I'm a frontend engineer specializing and on occasion,
						designing outstanding digital experiences. I'm focused
						on building accessible ready sites for humans.
					</p>
					<nav className="social">
						<ul>
							<ToolTip
								isButton={true}
								content="Résumé"
								onClick={openDialog}
								label={'View Steves résumé'}>
								<RxFileText />
							</ToolTip>
							<ToolTip
								content="GitHub"
								label={"Link to Steve Portas' GitHub Account"}
								link={'https://github.com/satrop'}>
								<VscGithubAlt />
							</ToolTip>
							<ToolTip
								content="Frontend Mentor"
								label={
									"Link to Steve Portas' Frontend Mentor Account"
								}
								link={
									'https://www.frontendmentor.io/profile/satrop'
								}>
								<SiFrontendmentor />
							</ToolTip>
							<ToolTip
								content="LinkedIn"
								label={"Link to Steve Portas' LinkedIn Account"}
								link={
									'https://www.linkedin.com/in/steven-portas/'
								}>
								<AiOutlineLinkedin />
							</ToolTip>
							<ToolTip
								content="CodePen"
								label={"Link to Steve Portas' Pens"}
								link={'https://codepen.io/satrop'}>
								<ImCodepen />
							</ToolTip>
						</ul>
					</nav>
				</div>
				<article className={`modal ${dialogOpen ? 'open' : ''}`}>
					<div className="right-col">
						<section>
							<h2 className="eyebrow">Profile</h2>
							<p>
								Experienced Front-End Developer adept in
								bringing forth expertise in design, building,
								testing and maintenance of modern sites.
								Proficient in various languages, SCSS,
								JavaScript, jQuery, React and embedded systems.
								Experienced with the latest cutting edge
								development tools and procedures. Able to
								effectively self-manage during independent
								projects, as well as collaborate as part of a
								productive team.
							</p>
						</section>
						<section>
							<h2 className="eyebrow">Employment History</h2>
							<div className="group">
								<h3>Web Development Engineer</h3>
								<h4>Ingeniux, Walla Walla</h4>
								<div className="date-line">2016 - 2023</div>
								<ul>
									<li>
										Take our in-house designer or
										third-party vendor designs from PSDs,
										Sketch files, InVision, Figma, or even
										flat PNGs and work them into modern,
										responsive, and ADA-ready sites.
									</li>
									<li>
										Work closely with Back-End developers
										and designers to achieve the best
										possible outcome for each client.
									</li>
									<li>
										Work with PMs to make sure all work is
										done on time.
									</li>
								</ul>
							</div>
							<div className="group">
								<h3>Web Designer & Front-End Developer</h3>
								<h4>Coffey Communications Inc., Walla Walla</h4>
								<div className="date-line">2013 - 2016</div>
								<ul>
									<li>
										Design and develop Coffey's purely
										medical-based client sites.
									</li>
									<li>
										Moved the company away from developing
										sites in Dreamweaver to Sublime.
									</li>
								</ul>
							</div>
							<div className="group">
								<h3>Front-End Developer</h3>
								<h4>
									First Call Group Ltd., Weston-super-Mare,
									England
								</h4>
								<div className="date-line">2012 - 2012</div>
								<ul>
									<li>
										Re-designed and rebuilt the company's
										two existing sites.
									</li>
									<li>
										Designed and build six more sites in the
										6 months working there.
									</li>
								</ul>
							</div>
							<div className="group">
								<h3>Chief Web Designer/Graphic Designer</h3>
								<h4>Webglu, Weston-super-Mare, England</h4>
								<div className="date-line">2008 - 2009</div>
								<ul>
									<li>
										Built flash elements into new and
										existing sites.
									</li>
									<li>
										Managed the design and development of
										nearly 20 websites.
									</li>
									<li>
										Introduced advanced Flash features to
										the network of sites
									</li>
									<li>
										Communicated with clients to make sure
										they were 100% happy with their designs.
									</li>
								</ul>
							</div>
						</section>
						<section>
							<h2 className="eyebrow">Education</h2>
							<div className="education-group">
								<h3>HND, Swindon College of Art & Design</h3>
								<div className="date-line">1998 - 2001</div>
							</div>
							<div className="education-group">
								<h3>
									GNVQ, Bridgwater College of Art & Design
								</h3>
								<div className="date-line">1995 - 1998</div>
							</div>
						</section>
					</div>
				</article>
				<div
					className={`fade ${dialogOpen ? 'open' : ''}`}
					onClick={openDialog}></div>
			</section>
		</>
	);
};

export default Hero;
