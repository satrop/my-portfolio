import {
	BsFillEnvelopeFill,
	BsGithub,
	BsFillTelephoneFill,
	BsCloudArrowDownFill,
} from 'react-icons/bs';

import './Resume.scss';

const Resume = () => {
	return (
		<div className="flow">
			<header>
				<h1>
					<a
						href="./Steve_Portas-Resume.pdf.zip"
						download
						aria-label="Download a PDF of my Résumé">
						<BsCloudArrowDownFill />
					</a>
					Steve Portas
				</h1>
				<h2>Frontend Web Developer</h2>
				<ul className="connect">
					<li>
						<BsFillEnvelopeFill />
						<a href="mailto:satrop.io@icloud.com?subject=Email from my site: ">
							satrop.io@icloud.com
						</a>
					</li>
					<li>
						<BsGithub />
						<a href="//github.com/satrop" target="_blank">
							github.com/satrop
						</a>
					</li>
					<li>
						<BsFillTelephoneFill />
						<a href="tel:9169968539" target="_blank">
							916.996.8539
						</a>
					</li>
				</ul>
			</header>
			{/* Profile */}
			<section className="profile">
				<h3>Profile</h3>
				<p>
					Experienced Front End Developer with expertise in design,
					building, testing and maintenance of modern sites.
					Proficient in various languages, SCSS, JavaScript, jQuery,
					React and embedded systems. Able to effectively self-manage
					during independent projects, as well as collaborate as part
					of a productive team.
				</p>
			</section>
			{/* Skills */}
			<section className="underline underline--wide">
				<h3>Skills</h3>
				<div className="skills-wrapper">
					<div className="skill">
						<h4>Programming Languages</h4>
						<p>JavaScript (ES6), TypeScript, HTML, CSS/SCSS, PHP</p>
					</div>
					<div className="skill">
						<h4>Libraries & Frameworks</h4>
						<p>jQuery, React, Astro</p>
					</div>
					<div className="skill">
						<h4>Tools & Platforms</h4>
						<p>Git, Gulp, Webpack, Netlify, Wordpress</p>
					</div>
					<div className="skill">
						<h4>Design</h4>
						<p>Sketch, InVision, InDesign, Photoshop, Figma</p>
					</div>
				</div>
			</section>
			{/* Employment */}
			<section className="employment-section underline underline--wide">
				<h3>Employment History</h3>
				<div className="flow">
					<section className="underline">
						<h4>Web Development Engineer</h4>
						<h5>Ingeniux, Walla Walla</h5>
						<div className="date">2016 - 2023</div>
						<ul>
							<li>
								Collaborated with cross-functional teams to
								identify potential issues in a site before
								sending it to a client to help increase overall
								client satisfaction.
							</li>
							<li>
								Helped identify the common visual and functional
								patterns used throughout site builds and break
								down these patterns into smaller, reusable
								components to reduce frontend development time.
							</li>
							<li>
								Analyzed legacy site code and architecture to
								identify potential causes of issues and updated
								accordingly using current ADA guidelines and
								HTML best practices to boost client confidence.
							</li>
							<li>
								Identified bottlenecks and pain points in the
								site build process, such as manual tasks or
								inefficient workflows with cross-functional
								teams.
							</li>
							<li>
								Defined and documented coding standards and best
								practices for the team. Used a consistent code
								style throughout projects, including naming
								conventions, formatting, and indentation, which
								helped ease reading for cross-functional teams
								and a reduction in errors.
							</li>
						</ul>
					</section>
					<section className="underline">
						<h4>Web Designer & Front-End Developer</h4>
						<h5>Coffey Communications Inc., Walla Walla</h5>
						<div className="date">2013 - 2016</div>
						<ul>
							<li>
								Used design systems and style guides to
								establish a consistent design language and
								reduce the need for custom design work.
							</li>
							<li>
								Used rapid prototyping tools, like Figma and
								Sketch, to quickly iterate on design ideas and
								get feedback from stakeholders and users.
							</li>
							<li>
								Created multiple design concepts or wireframes
								to present to the client, each with a unique
								approach to the design problem to ensure the
								client was happy with the outcome.
							</li>
							<li>
								Introduced ADA standards to ensure new sites
								have a clear and easy-to-use navigation
								structure, with all menus and links accessible
								using a keyboard.
							</li>
						</ul>
					</section>
					<section className="underline">
						<h4>Front-End Developer</h4>
						<h5>
							First Call Group Ltd., Weston-super-Mare, England
						</h5>
						<div className="date">2012 - 2012</div>
						<ul>
							<li>
								Conducted a thorough audit of companies existing
								site's HTML code to identify outdated or
								non-standard coding practices, to help determine
								which new HTML standards to use for the rebuild,
								resulting in faster and more stable sites.
							</li>
							<li>
								Ensured that the company sites were responsive
								and optimized for all devices and screen sizes,
								including mobile devices to help with UX.
							</li>
							<li>
								Used a modular, component-based approach to
								design and development, allowing for more
								efficient reuse of code and design elements.
							</li>
						</ul>
					</section>
				</div>
			</section>
			{/* Employment */}
			<section className="employment-section underline underline--wide">
				<h3>Additional Experience</h3>
				<div className="flow flow--low">
					<section>
						<h4>Chief Web Designer/Graphic Designer</h4>
						<h5>Webglu, Weston-super-Mare, England</h5>
					</section>
					<section>
						<h4>Web Designer/Graphic Designer</h4>
						<h5>Shoe Surfing.com, San Luis Obispo</h5>
					</section>
				</div>
			</section>
			{/* Education */}
			<section className="underline underline--wide">
				<h3>Education</h3>
				<div className="flow flow--low">
					<section>
						<h4>Higher National Diploma (HND)</h4>
						<h5>Swindon College of Art & Design</h5>
					</section>
					<section>
						<h4>
							General National Vocational Qualification (GNVQ)
						</h4>
						<h5>Bridgwater College of Art & Design</h5>
					</section>
				</div>
			</section>
		</div>
	);
};

export default Resume;
