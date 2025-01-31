import cardsData from '../../assets/dataNew';
import { FiExternalLink } from 'react-icons/fi';
import { VscGithubAlt } from 'react-icons/vsc';

const StandardCard = () => {
	return (
		<>
			{cardsData.standard.map((card, i) => {
				let cardLink = card.links.linkOne;
				return (
					<div key={i} className="standard-card">
						<div className="standard-card__info">
							<div className="standard-card__title">
								{card.title}
							</div>
							<div className="skills">
								{card.skills.map((skill, i) => {
									return <span key={i}>{skill}</span>;
								})}
							</div>
							<ul className="standard-card__links">
								<li>
									<a
										target="_blank"
										href={card.links.linkOne}>
										<FiExternalLink />
									</a>
								</li>
								{card.links.linkTwo && (
									<li>
										<a
											target="_blank"
											href={card.links.linkTwo}>
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

export default StandardCard;
