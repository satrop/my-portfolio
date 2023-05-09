import React, { useState } from 'react';
import { VscGithubAlt } from 'react-icons/vsc';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { RxFileText } from 'react-icons/rx';
import { ImCodepen } from 'react-icons/im';
import { SiFrontendmentor } from 'react-icons/si';

import { motion } from 'framer-motion';

import ToolTip from './ToolTip';

import './hero.scss';
import './Modal.scss';
import Resume from './Resume';

const Hero = ({ id }) => {
	const [dialogOpen, setDialogOpen] = useState(false);

	const openDialog = () => {
		setDialogOpen((prevOpen) => !dialogOpen);
	};

	const welcome = {
		start: {
			opacity: 0,
			x: -100,
		},
		end: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1,
			},
		},
	};

	const line1 = "I'm\xA0Steve\xA0Portas";
	const sentence = {
		end: {
			transition: { delayChildren: 0.5, staggerChildren: 0.08 },
		},
	};

	const letter = {
		start: {
			opacity: 0,
			x: 10,
		},
		end: {
			opacity: 1,
			x: 0,
			transition: {
				ease: 'easeInOut',
				duration: 0.5,
			},
		},
	};

	const p = {
		start: {
			opacity: 0,
			scale: 0.95,
		},
		end: {
			opacity: 1,
			scale: 1,
			transition: {
				delay: 1,
				type: 'spring',
				bounce: 0.35,
			},
		},
	};

	const icons = {
		end: {
			transition: { delayChildren: 1.5, staggerChildren: 0.08 },
		},
	};

	const icon = {
		start: {
			opacity: 0,
			x: 10,
			scale: 1.5,
		},
		end: {
			opacity: 1,
			x: 0,
			scale: 1,
			transition: {
				ease: 'easeInOut',
				duration: 0.5,
			},
		},
	};

	return (
		<>
			<section id={id}>
				<div className="welcome">
					<motion.div
						variants={welcome}
						initial="start"
						animate="end">
						Nice to meet you!
					</motion.div>
					<motion.h1
						aria-label="I'm Steve Portas"
						variants={sentence}
						initial="start"
						animate="end">
						{line1.split('').map((char, index) => {
							return (
								<motion.div
									style={{ display: 'inline-block' }}
									variants={letter}
									aria-hidden={true}
									key={char + '-' + index}>
									{char}
								</motion.div>
							);
						})}
					</motion.h1>
					<motion.p variants={p} initial="start" animate="end">
						I'm a frontend engineer specializing and on occasion,
						designing outstanding digital experiences. I'm focused
						on building accessible ready sites for humans.
					</motion.p>
					<nav className="social">
						<motion.ul
							className="social"
							variants={icons}
							initial="start"
							animate="end">
							<motion.div
								style={{ display: 'inline-block' }}
								variants={icon}>
								<ToolTip
									isButton={true}
									content="Résumé"
									onClick={openDialog}
									label={'View Steves résumé'}>
									<RxFileText />
								</ToolTip>
							</motion.div>
							<motion.div
								style={{ display: 'inline-block' }}
								variants={icon}>
								<ToolTip
									content="GitHub"
									label={
										"Link to Steve Portas' GitHub Account"
									}
									link={'https://github.com/satrop'}>
									<VscGithubAlt />
								</ToolTip>
							</motion.div>
							<motion.div
								style={{ display: 'inline-block' }}
								variants={icon}>
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
							</motion.div>
							<motion.div
								style={{ display: 'inline-block' }}
								variants={icon}>
								<ToolTip
									content="LinkedIn"
									label={
										"Link to Steve Portas' LinkedIn Account"
									}
									link={
										'https://www.linkedin.com/in/steven-portas/'
									}>
									<AiOutlineLinkedin />
								</ToolTip>
							</motion.div>
							<motion.div
								style={{ display: 'inline-block' }}
								variants={icon}>
								<ToolTip
									content="CodePen"
									label={"Link to Steve Portas' Pens"}
									link={'https://codepen.io/satrop'}>
									<ImCodepen />
								</ToolTip>
							</motion.div>
						</motion.ul>
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
