import React, { useState } from 'react';
import { VscGithubAlt } from 'react-icons/vsc';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { RxFileText } from 'react-icons/rx';
import { ImCodepen } from 'react-icons/im';
import { SiFrontendmentor } from 'react-icons/si';

import ToolTip from './ToolTip';

import './hero.scss';
import './Modal.scss';
import Resume from './Resume';

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
					<Resume />
				</article>
				<div
					className={`fade ${dialogOpen ? 'open' : ''}`}
					onClick={openDialog}></div>
			</section>
		</>
	);
};

export default Hero;
