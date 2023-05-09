import { motion } from 'framer-motion';
import LineDraw from './LineDraw';
import TextAnimation from './TextAnimation';

import './Skills.scss';

const Skills = ({ id }) => {
	const container = {
		start: { opacity: 0 },
		end: {
			opacity: 1,
			transition: {
				staggerChildren: 0.25,
				delayChildren: 1,
			},
		},
	};

	const section = {
		start: {
			opacity: 0,
		},
		end: {
			opacity: 1,
		},
	};

	const header = {
		start: {
			opacity: 0,
			y: -20,
		},
		end: {
			opacity: 1,
			y: 0,
		},
	};

	const ul = {
		start: { opacity: 0 },
		end: {
			opacity: 1,
			transition: {
				staggerChildren: 0.25,
				delayChildren: 1,
			},
		},
	};

	const ul1 = {
		start: { opacity: 0 },
		end: {
			opacity: 1,
			transition: {
				staggerChildren: 0.25,
				delayChildren: 1.5,
			},
		},
	};
	const ul2 = {
		start: { opacity: 0 },
		end: {
			opacity: 1,
			transition: {
				staggerChildren: 0.25,
				delayChildren: 1.9,
			},
		},
	};
	const ul3 = {
		start: { opacity: 0 },
		end: {
			opacity: 1,
			transition: {
				staggerChildren: 0.25,
				delayChildren: 2.8,
			},
		},
	};

	const li = {
		start: {
			opacity: 0,
			scale: 0.3,
			filter: 'blur(20px)',
		},
		end: {
			opacity: 1,
			scale: 1,
			filter: 'blur(0px',
		},
	};

	return (
		<section id={id}>
			<div className="section-wrapper">
				<LineDraw />
				<TextAnimation text={'Skills'} />
				<motion.div
					className="skills grid"
					variants={container}
					initial="start"
					whileInView="end">
					<motion.div variants={section} className="skills-section">
						<motion.h3 variants={header}>
							Programming Languages
						</motion.h3>
						<motion.ul variants={ul}>
							<motion.li variants={li}>TypeScript</motion.li>
							<motion.li variants={li}>HTML</motion.li>
							<motion.li variants={li}>CSS/SCSS</motion.li>
							<motion.li variants={li}>PHP</motion.li>
						</motion.ul>
					</motion.div>
					<motion.div variants={section} className="skills-section">
						<motion.h3 variants={header}>
							Libraries & Frameworks
						</motion.h3>
						<motion.ul variants={ul1}>
							<motion.li variants={li}>jQuery</motion.li>
							<motion.li variants={li}>React</motion.li>
							<motion.li variants={li}>Astro</motion.li>
						</motion.ul>
					</motion.div>
					<motion.div variants={section} className="skills-section">
						<motion.h3 variants={header}>
							Tools & Platforms
						</motion.h3>
						<motion.ul variants={ul2}>
							<motion.li variants={li}>Git</motion.li>
							<motion.li variants={li}>Gulp</motion.li>
							<motion.li variants={li}>Webpack</motion.li>
							<motion.li variants={li}>Netlify</motion.li>
							<motion.li variants={li}>Wordpress</motion.li>
						</motion.ul>
					</motion.div>
					<motion.div variants={section} className="skills-section">
						<motion.h3 variants={header}>Design</motion.h3>
						<motion.ul variants={ul3}>
							<motion.li variants={li}>Sketch</motion.li>
							<motion.li variants={li}>InVision</motion.li>
							<motion.li variants={li}>InDesign</motion.li>
							<motion.li variants={li}>Photoshop</motion.li>
							<motion.li variants={li}>Figma</motion.li>
						</motion.ul>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Skills;
