import PicLG from '/img/pic_lg.webp';

import './about.scss';

const About = ({ id }) => {
	return (
		<section className="section-content" id={id}>
			<div className="section-wrapper">
				<div className="h2 eyebrow">A Little Bit About Me</div>
				<p>
					My mum's an artist, my dad an engineer. My brain loves
					working in both of those spaces at the same time. Yep, I
					like left brain and right brain work, aka front-end
					development with an eye for artistry. I spent years working
					in graphic design, studying fine art (yes, even tapestry!)
					and found my forever home when I found front-end
					development.
				</p>
				<p>
					I grew up in a tiny town called Bridgwater (it's missing an
					"e", the Vikings stole it, like really!) in England.
				</p>
				<p>
					Right when I thought I would launch into the world of
					digital design, I found myself managing 13 people in the
					most high-end and busiest pubs in London. I was stinkin'
					good at it. And yes, I was head chef (in charge of cooking
					all the steaks) while managing that crew under the hottest
					heat in the business.
				</p>
				<p>
					I moved to the United States and felt right at home.
					California was a bit too sunny, and the Pacific Northwest is
					just-right. I met my wife Jess and we have giggled together
					now for 15 years. Our kiddos, pups and kitty add to the fun.
				</p>
				<p>
					I've gotten to do a lot of interesting work, and I'm ready
					for a role that fits all my skills and passions a bit
					better. It's time!
				</p>
			</div>
			<div className="outer-wrapper">
				<div className="inner-wrapper">
					<img src={PicLG} alt="Steve Portas" />
				</div>
			</div>
		</section>
	);
};

export default About;
