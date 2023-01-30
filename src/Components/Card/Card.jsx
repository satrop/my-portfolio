import React from 'react';
import cardsData from '../../assets/data';

const Card = () => {
	return (
		<>
			{cardsData.map((card, index) => {
				return (
					<div
						key={index}
						// tabIndex="0"
						className="card">
						<div className="card__image">
							<picture>
								<source
									media="(max-width: 767px)"
									srcSet={card.smallImg}
								/>
								<img
									src={card.largeImg}
									alt=""
								/>
							</picture>
						</div>
						<div className="card__title">{card.title}</div>
						<ul className="card__skills">
							{card.skills.map((skill, index) => {
								return <li key={index}>{skill}</li>;
							})}
						</ul>
						<ul className="card__links">
							<li>
								<a
									href={card.links.linkOne}
									className="underline-hover">
									View project
								</a>
							</li>
							<li>
								<a
									href={card.links.linkTwo}
									className="underline-hover">
									View code
								</a>
							</li>
						</ul>
					</div>
				);
			})}
		</>
	);
};

export default Card;
