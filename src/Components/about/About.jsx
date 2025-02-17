import { motion } from 'framer-motion';
import LineDraw from '../LineDraw';
import TextAnimation from '../TextAnimation';
import aboutData from './about.json';

const PicLG = `${import.meta.env.BASE_URL}img/pic_lg.webp`;

const fixedData = Array.isArray(aboutData) ? aboutData.map(item => ({
  ...item,
  largeImg: `${import.meta.env.BASE_URL}${item.largeImg}`,
  smallImg: `${import.meta.env.BASE_URL}${item.smallImg}`,
})) : [];

import './about.scss';

const About = ({ id }) => {
	const aboutText = {
		offscreen: {
			x: -100,
			opacity: 0,
		},
		onscreen: {
			x: 0,
			opacity: 1,
			transition: {
				ease: 'easeInOut',
				duration: 1,
			},
		},
	};

	const image = {
		offscreen: {
			x: 100,
			opacity: 0,
		},
		onscreen: {
			x: 0,
			opacity: 1,
			transition: {
				ease: 'easeInOut',
				duration: 1,
			},
		},
	};

	return (
		<section className="section-content" id={id}>
			<div className="section-wrapper">
				<LineDraw />
        <TextAnimation text={aboutData.title} />
        <motion.div variants={aboutText} initial="offscreen" whileInView="onscreen">
          {aboutData.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>
			</div>

			<motion.div
				className="outer-wrapper"
				variants={image}
				initial="offscreen"
				whileInView="onscreen">
				<div className="inner-wrapper">
					<img src={PicLG} alt="Steve Portas" />
				</div>
			</motion.div>
		</section>
	);
};

export default About;
