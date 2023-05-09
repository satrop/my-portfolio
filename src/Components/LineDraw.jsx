import { motion } from 'framer-motion';

const LineDraw = () => {
	const draw = {
		hidden: { pathLength: 0, opacity: 0 },
		visible: (i) => {
			const delay = 1;
			return {
				pathLength: 1,
				opacity: 1,
				transition: {
					pathLength: {
						delay,
						type: 'spring',
						duration: 1.5,
						bounce: 0,
					},
					opacity: { delay, duration: 0.01 },
				},
			};
		},
	};

	return (
		<motion.svg
			width="60"
			height="6"
			viewBox="0 0 60 6"
			initial="hidden"
			whileInView="visible">
			<motion.line
				x1="0"
				y1="0"
				x2="60"
				y2="0"
				stroke="#4ce19e"
				strokeWidth="6"
				variants={draw}
				custom={2.5}
			/>
		</motion.svg>
	);
};

export default LineDraw;
