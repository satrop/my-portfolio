import { motion } from 'framer-motion';

const TextAnimation = ({ text }) => {
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

	return (
		<motion.div
			aria-label={text}
			className="h2"
			variants={sentence}
			initial="start"
			whileInView="end">
			{text.split('').map((char, index) => {
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
		</motion.div>
	);
};

export default TextAnimation;
