import React, { useState } from 'react';
import { VscGithubAlt } from 'react-icons/vsc';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { RxFileText } from 'react-icons/rx';
import { ImCodepen } from 'react-icons/im';
import { SiFrontendmentor } from 'react-icons/si';
import { motion } from 'framer-motion';

import './hero.scss';
import '../modal/Modal.scss';
import Resume from '../resume/Resume';
import dataHero from './hero.json';
import ToolTip from '../tooltip/ToolTip';

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

	const line1 = dataHero.name;
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
              {dataHero.greeting}
					</motion.div>
					<motion.h1
						aria-label="{dataHero.title}"
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
						{dataHero.text}
					</motion.p>

					<nav className="social">
						<motion.ul
							className="social"
							variants={icons}
							initial="start"
							animate="end">

							<motion.li
								style={{ display: 'inline-block' }}
								variants={icon}>
								<a href="#" onClick={openDialog}>
									<ToolTip
										content="Résumé"
										label={'View Steves résumé'}>
										<RxFileText />
									</ToolTip>
								</a>
							</motion.li>

							<motion.li
								style={{ display: 'inline-block' }}
								variants={icon}>
								<a href="https://github.com/satrop" target="_blank" rel="noopener noreferrer">
									<ToolTip
										content="GitHub"
										label={
											"Link to Steve Portas' GitHub Account"
										}>
										<VscGithubAlt />
									</ToolTip>
								</a>
							</motion.li>

							<motion.li
								style={{ display: 'inline-block' }}
								variants={icon}>
								<a href="https://www.frontendmentor.io/profile/satrop" target="_blank" rel="noopener noreferrer">
									<ToolTip
										content="Frontend Mentor"
										label={
											"Link to Steve Portas' Frontend Mentor Account"
										}>
										<SiFrontendmentor />
									</ToolTip>
								</a>
							</motion.li>

							<motion.li
								style={{ display: 'inline-block' }}
								variants={icon}>
								<a href="https://www.linkedin.com/in/steven-portas/" target="_blank" rel="noopener noreferrer">
									<ToolTip
										content="LinkedIn"
										label={
											"Link to Steve Portas' LinkedIn Account"
										}>
										<AiOutlineLinkedin />
									</ToolTip>
								</a>
							</motion.li>

							<motion.li
								style={{ display: 'inline-block' }}
								variants={icon}>
								<a href="https://codepen.io/satrop" target="_blank" rel="noopener noreferrer">
									<ToolTip
										content="CodePen"
										label={"Link to Steve Portas' Pens"}>
										<ImCodepen />
									</ToolTip>
								</a>
							</motion.li>

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
