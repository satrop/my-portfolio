import cardsData from './StandardCard.json';
import { FiExternalLink } from 'react-icons/fi';
import { VscGithubAlt } from 'react-icons/vsc';

import ToolTip from '../tooltip/ToolTip';
import './StandardCard.scss';

const StandardCard = () => {
  return (
    <div className="standard-cards-wrapper">
      {Object.keys(cardsData.standard).map((sectionKey, index) => {
        const section = cardsData.standard[sectionKey];
        return (
          <div key={index} className="standard-cards-section">
            <div className="standard-cards-title">
              <h2>{section.title}</h2>
            </div>
            {section.projects.map((project, i) => (
              <div key={i} className="standard-card">
                <div className="standard-card__title">{project.title}</div>
                <ul className="standard-card__skills">
                  {project.skills.map((skill, j) => (
                    <li key={j}>{skill}</li>
                  ))}
                </ul>
                <ul className="standard-card__links">
                  <li>
                    <ToolTip content="Visit Site">
                      <a target="_blank" href={project.links.linkOne}>
                        <FiExternalLink />
                      </a>
                    </ToolTip>
                  </li>
                  {project.links.linkTwo && (
                    <li>
                      <ToolTip content="View Code">
                        <a target="_blank" href={project.links.linkTwo}>
                          <VscGithubAlt />
                        </a>
                      </ToolTip>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default StandardCard;
