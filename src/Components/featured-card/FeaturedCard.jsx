import cardsData from '../../assets/dataNew';
import { FiExternalLink } from 'react-icons/fi';
import { VscGithubAlt } from 'react-icons/vsc';
import ToolTip from '../tooltip/ToolTip';

import './FeaturedCard.scss';

// Fix paths to image URLs dynamically
const fixedCardsData = cardsData.featured.map(card => ({
  ...card,
  largeImg: `${import.meta.env.BASE_URL}${card.largeImg}`,
  smallImg: `${import.meta.env.BASE_URL}${card.smallImg}`,
}));


const FeaturedCard = () => {
  return (
    <>
      {fixedCardsData.map((card, i) => {
        let cardLink = card.links.linkOne;
        return (
          <div key={i} className="featured-card">
            <div className="featured-card__image">
              <a href={card.links.linkOne} target="_blank" aria-label={card.title}>
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet={card.smallImg}
                  />
                  <img src={card.largeImg} alt={card.title} />
                </picture>
              </a>
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
                  <ToolTip content="Visit Site">
                    <a
                      target="_blank"
                      href={card.links.linkOne}
                      aria-label={card.title}>
                      <FiExternalLink />
                    </a>
                  </ToolTip>
                </li>
                {card.links.linkTwo && (
                  <li>
                    <ToolTip content="View Code">
                      <a
                        target="_blank"
                        href={card.links.linkTwo}
                        aria-label={card.title}>
                        <VscGithubAlt />
                      </a>
                    </ToolTip>
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
