import { motion } from 'framer-motion';
import LineDraw from '../LineDraw';
import TextAnimation from '../TextAnimation';

import skillsData from './skills.json';
import './skills.scss';

const Skills = ({ id }) => {
  const container = {
    start: { opacity: 0 },
    end: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 1,
      },
    },
  };

  const section = {
    start: {
      opacity: 0,
    },
    end: {
      opacity: 1,
    },
  };

  const header = {
    start: {
      opacity: 0,
      y: -20,
    },
    end: {
      opacity: 1,
      y: 0,
    },
  };

  const ul = {
    start: { opacity: 0 },
    end: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 1,
      },
    },
  };

  const ul1 = {
    start: { opacity: 0 },
    end: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 1.5,
      },
    },
  };

  const ul2 = {
    start: { opacity: 0 },
    end: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 1.9,
      },
    },
  };

  const ul3 = {
    start: { opacity: 0 },
    end: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 2.8,
      },
    },
  };

  const li = {
    start: {
      opacity: 0,
      scale: 0.3,
      filter: 'blur(20px)',
    },
    end: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px',
    },
  };

  return (
    <section id={id}>
      <div className="section-wrapper">
        <LineDraw />
        <TextAnimation text={'Skills'} />
        <motion.div
          className="skills grid"
          variants={container}
          initial="start"
          whileInView="end">

          {skillsData.skill.map((skillSection, index) => (
            <motion.div key={index} variants={section} className="skills-section">
              <motion.h3 variants={header}>{skillSection.skill_header}</motion.h3>
              <motion.ul variants={ul}>
                {skillSection.skills.map((skill, index) => (
                  <motion.li key={index} variants={li}>
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
