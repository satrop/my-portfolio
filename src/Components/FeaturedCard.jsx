import cardsData from '../assets/dataNew';
import { FiExternalLink } from 'react-icons/fi';
import { VscGithubAlt } from 'react-icons/vsc';

import './FeaturedCard.scss';

const FeaturedCard = () => {
	return (
		<>
			{cardsData.featured.map((card, i) => {
				let cardLink = card.links.linkOne;
				return (
					<div key={i} className="featured-card">
						<div className="featured-card__image">
							<picture>
								<source
									media="(max-width: 767px)"
									srcSet={card.smallImg}
								/>
								<img src={card.largeImg} alt={card.title} />
							</picture>
						</div>
						<div className="featured-card__info">
							<div className="featured-card__title">
								{card.title}
							</div>
							<div className="skills">
								{card.skills.map((skill, i) => {
									return <span key={i}>{skill}</span>;
								})}
							</div>
							<ul className="featured-card__links">
								<li>
									<a
										target="_blank"
										href={card.links.linkOne}
										aria-label={card.title}>
										<FiExternalLink />
									</a>
								</li>
								{card.links.linkTwo && (
									<li>
										<a
											target="_blank"
											href={card.links.linkTwo}
											aria-label={card.title}>
											<VscGithubAlt />
										</a>
									</li>
								)}
							</ul>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default FeaturedCard;
