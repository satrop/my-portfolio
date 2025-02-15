import {
	BsFillEnvelopeFill,
	BsGithub,
	BsFillTelephoneFill,
	BsCloudArrowDownFill,
} from 'react-icons/bs';

import data from './resume.json'

import './Resume.scss';

const Resume = () => {
	return (
		<div className="flow">
			<header>
				<h1>
					<a
						href="./Steve-Portas-Resume.pdf.zip"
						download
						aria-label="Download a PDF of my Résumé">
						<BsCloudArrowDownFill />
					</a>
          {data.hero.name}
				</h1>
				<h2>{data.hero.title}</h2>
				<ul className="connect">
					<li>
						<BsFillEnvelopeFill />
						<a href={`mailto:${data.hero.email}?subject=Email from my site: `}>
							{data.hero.email}
						</a>
					</li>
					<li>
						<BsGithub />
						<a href={`//${data.hero.github}`} target="_blank">
							{data.hero.github}
						</a>
					</li>
					<li>
						<BsFillTelephoneFill />
						<a href={`tel:${data.hero.phone}`} target="_blank">
							{data.hero.phone}
						</a>
					</li>
				</ul>
			</header>
			{/* Profile */}
			<section className="profile">
				<h3>{data.profile.title}</h3>
				<p>{data.profile.summary}</p>
			</section>
			{/* Skills */}
			<section className="underline underline--wide">
				<h3>{data.skills.title}</h3>
				<div className="skills-wrapper">
					{Object.values(data.skills).slice(1).map((skill, index) => (
						<div key={index} className="skill">
							<h4>{skill.title}</h4>
							<p>{skill.list}</p>
						</div>
					))}
				</div>
			</section>
			{/* Employment */}
			<section className="employment-section underline underline--wide">
				<h3>{data.employment.title}</h3>
				<div className="flow">
					{data.employment.jobs.map((job, index) => (
						<section key={index} className="underline">
							<h4>{job.title}</h4>
							<h5>{job.company}</h5>
							<div className="date">{job.dates}</div>
							<ul>
								{job.description.map((desc, idx) => (
									<li key={idx}>{desc}</li>
								))}
							</ul>
						</section>
					))}
				</div>
			</section>
			{/* Education */}
			<section className="underline underline--wide">
				<h3>Education</h3>
				<div className="flow flow--low">
					<section>
						<h4>Higher National Diploma (HND)</h4>
						<h5>Swindon College of Art & Design</h5>
						<h6>1998 - 2021</h6>
					</section>
				</div>
			</section>
		</div>
	);
};

export default Resume;
