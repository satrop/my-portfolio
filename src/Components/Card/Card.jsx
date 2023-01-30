import React from 'react';
import './Card.scss';
import cardsData from '../../assets/data';

const Card = () => {
	return (
		<>
			{cardsData.map((card, index) => {
				let codeLink = card.links.linkTwo;
				return (
					<div key={index} className="card">
						<div className="card__image">
							<picture>
								<source
									media="(max-width: 767px)"
									srcSet={card.smallImg}
								/>
								<img src={card.largeImg} alt="" />
							</picture>
						</div>
						<div className="card__title">{card.title}</div>
						<div className="skills">
							{card.skills.map((skill, index) => {
								return <span key={index}>{skill}</span>;
							})}
						</div>
						<ul className="card__links">
							<li>
								<a
									href={card.links.linkOne}
									className="underline-hover">
									View project
								</a>
							</li>
							{codeLink && (
								<li>
									<a
										href={card.links.linkTwo}
										className="underline-hover">
										View code
									</a>
								</li>
							)}
						</ul>
					</div>
				);
			})}
		</>
	);
};

export default Card;
