import React, { useState } from 'react';
// import Modal from 'react-modal';

import TopBar from '../TopBar/TopBar';
import Rings from '../Rings/Rings';

import PicSM from '/img/pic_sm.webp';
import PicMD from '/img/pic_md.webp';
import PicLG from '/img/pic_lg.webp';

import './hero.scss';
import '../Modal/Modal.scss';

const Hero = () => {
	const [dialogOpen, setDialogOpen] = useState(false);

	const openDialog = () => {
		setDialogOpen((prevOpen) => !dialogOpen);
	};

	return (
		<>
			<header className="container">
				<TopBar
					left={<div className="name">steveportas</div>}
					right={
						<nav className="social">
							<ul>
								<li className="clippy">
									<button
										onClick={openDialog}
										aria-label="View resume live">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="bi bi-eye"
											viewBox="0 0 16 16">
											<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
											<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
										</svg>
									</button>
									<a
										href="/Steven_Portas_Resume.pdf"
										title="Download Resume"
										download>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24">
											<path d="m12 16 4-5h-3V4h-2v7H8z"></path>
											<path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
										</svg>
									</a>
									<span title="Download or view my resume">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24">
											<path d="M19.903 8.586a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.952.952 0 0 0-.051-.259c-.01-.032-.019-.063-.033-.093zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z"></path>
											<path d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z"></path>
										</svg>
									</span>
								</li>
								<li>
									<a
										href="https://github.com/satrop"
										target="_blank"
										aria-label="Link to Steve Portas' GitHub Account">
										<svg viewBox="0 0 25 24">
											<path
												fillRule="evenodd"
												d="M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z"
											/>
										</svg>
									</a>
								</li>
								<li>
									<a
										href="https://www.frontendmentor.io/profile/satrop"
										target="_blank"
										aria-label="Link to Steve Portas' Frontend Mentor Account">
										<svg viewBox="0 0 26 23">
											<path d="M13.084.23a.751.751 0 0 0-.736.75v14.267a.75.75 0 1 0 1.5 0V.98a.75.75 0 0 0-.763-.75ZM24.44 4.504a.752.752 0 0 0-.284.064l-6.44 2.875a.752.752 0 0 0 0 1.37l6.44 2.884a.75.75 0 0 0 .612-1.369L19.861 8.13l4.907-2.191a.753.753 0 0 0 .38-.99.752.752 0 0 0-.708-.444ZM1.371 9.663a.752.752 0 0 0-.74.938C2.41 17.447 8.603 22.23 15.685 22.23a.75.75 0 1 0 0-1.501A14.053 14.053 0 0 1 2.083 10.225a.75.75 0 0 0-.712-.561v-.001Z" />
										</svg>
									</a>
								</li>
								<li>
									<a
										href="https://www.linkedin.com/in/steven-portas/"
										target="_blank"
										aria-label="Link to Steve Portas' LinkedIn Account">
										<svg viewBox="0 0 25 24">
											<path
												fillRule="evenodd"
												d="M5.551 3.304c-1.14 0-2.067.926-2.067 2.064 0 1.14.928 2.066 2.067 2.066a2.066 2.066 0 0 0 0-4.13ZM3.767 8.998v11.453h3.562L7.33 8.998H3.767Zm5.798 0V20.45l3.554.002.002-5.668c0-1.454.253-2.941 2.132-2.941 1.851 0 1.851 1.755 1.851 3.036v5.571l3.559-.001v-6.28c0-2.834-.517-5.457-4.27-5.457-1.763 0-2.916.997-3.368 1.85h-.05V8.997h-3.41ZM22.435 24H1.982c-.976 0-1.77-.777-1.77-1.732V1.731C.212.776 1.006 0 1.982 0h20.453c.98 0 1.777.776 1.777 1.73v20.538c0 .955-.797 1.732-1.777 1.732Z"
											/>
										</svg>
									</a>
								</li>
								<li>
									<a
										href="https://codepen.io/satrop"
										target="_blank"
										aria-label="Link to Steve Portas' Pens">
										<svg
											viewBox="0 0 256 256"
											preserveAspectRatio="xMinYMin meet">
											<path d="M255.807 87.087c-.059-.31-.11-.62-.193-.924-.052-.183-.114-.355-.172-.535a11.007 11.007 0 0 0-.283-.8c-.076-.182-.162-.358-.245-.534a9.74 9.74 0 0 0-.376-.73c-.096-.176-.207-.342-.313-.51a11.038 11.038 0 0 0-.842-1.142 11.166 11.166 0 0 0-.544-.596c-.145-.145-.29-.29-.442-.431a9.07 9.07 0 0 0-.624-.52c-.165-.128-.327-.26-.5-.377-.061-.044-.117-.096-.182-.138L134.099 1.85a10.989 10.989 0 0 0-12.201 0l-117 77.998c-.065.041-.116.093-.182.138-.172.12-.334.248-.5.376a15.52 15.52 0 0 0-.624.517 8.604 8.604 0 0 0-.438.43c-.193.194-.372.39-.548.597-.13.155-.255.31-.376.483-.165.217-.317.438-.465.669-.107.169-.214.334-.314.51a9.593 9.593 0 0 0-.372.724c-.083.176-.172.355-.245.534-.107.262-.2.531-.286.8-.058.18-.12.355-.169.517-.08.303-.138.61-.193.924-.03.159-.069.314-.09.476-.062.475-.096.951-.096 1.437v78.016c0 .482.034.965.103 1.437.025.173.07.31.104.476.055.31.103.62.207.931.048.172.103.345.172.534.086.276.172.552.276.804.072.172.172.344.241.517.114.241.242.482.38.734.096.172.206.345.31.503.148.242.31.449.482.655.121.173.242.31.38.476.175.207.344.414.551.597.141.137.276.31.448.413.2.173.414.345.62.524.166.138.346.242.483.376.066.034.104.103.173.134l116.968 78.04a10.815 10.815 0 0 0 6.102 1.851 11.06 11.06 0 0 0 6.102-1.85l117-78c.065-.04.12-.089.182-.134.172-.12.334-.248.5-.375.214-.17.424-.345.624-.524.151-.135.296-.283.441-.428a9.876 9.876 0 0 0 .92-1.072c.166-.217.318-.441.466-.669.107-.165.214-.334.314-.503.138-.242.258-.486.375-.734.083-.176.17-.352.245-.531.107-.266.197-.535.283-.804.058-.179.12-.355.172-.534.08-.303.135-.614.193-.924.028-.159.07-.314.086-.476.063-.475.097-.951.097-1.437V89c0-.486-.038-.962-.097-1.438-.027-.169-.079-.306-.113-.475h.017zm-127.81 66.935l-38.905-26.021 38.905-26.025 38.907 26.025-38.907 26.021zm-10.998-71.155l-47.692 31.9L30.81 89.013 117 31.555v51.312zm-67.477 45.13l-27.517 18.406v-36.811l27.517 18.405zm19.785 13.245L117 173.138v51.312l-86.19-57.465 38.498-25.75v.007zm69.69 31.89l47.692-31.896 38.501 25.749-86.193 57.458v-51.312zm67.477-45.128l27.521-18.409v36.815l-27.52-18.413v.007zm-19.785-13.238L138.997 82.87V31.555l86.193 57.459-38.5 25.752z" />
										</svg>
									</a>
								</li>
							</ul>
						</nav>
					}
				/>
				<Rings />
				<div className="grid">
					<div className="col__1">
						<picture>
							<source
								srcSet={PicLG}
								media="(min-width:  90rem)"
							/>
							<source
								srcSet={PicMD}
								media="(min-width:  48rem)"
							/>
							<img
								className="border-radius"
								src={PicSM}
								alt="Steve Portas"
							/>
						</picture>
						<img
							src="./img/pattern-circle.svg"
							alt=""
							role="presentation"
							aria-hidden="true"
							className="circle"
						/>
					</div>
					<div className="col__2">
						<h1>
							Nice to
							<br /> meet you! I'm <span>Steve Portas</span>.
						</h1>
						<p>
							Based in the US, I'm a front-end developer
							passionate about building accessible web apps that
							users love.
						</p>
					</div>
				</div>
			</header>

			<article className={`modal ${dialogOpen ? 'open' : ''}`}>
				<aside className="left-col">
					<div className="content">
						<h1>Steve Portas</h1>
						<div className="sub-header">front-end Developer</div>
						<section>
							<h2>Details</h2>
							<ul>
								<li>(916) 996-8539</li>
								<li>
									<a href="mailto:stevenportas@me.com?subject=Email from my site - ">
										stevenportas@me.com
									</a>
								</li>
								<li>
									<a
										href="https://github.com/satrop"
										target="_blank">
										GitHub
									</a>
								</li>
							</ul>
						</section>
						<section>
							<h2>Skills</h2>
							<ul className="skills">
								<li>
									SCSS
									<span className="percent--100"></span>
								</li>
								<li>
									HTML5
									<span className="percent--100"></span>
								</li>
								<li>
									jQuery
									<span className="percent--75"></span>
								</li>
								<li>
									JavaScript
									<span className="percent--75"></span>
								</li>
								<li>
									React
									<span className="percent--75"></span>
								</li>
								<li>
									Web Design
									<span className="percent--75"></span>
								</li>
								<li>
									Accessibility
									<span className="percent--100"></span>
								</li>
								<li>
									Communication Skills
									<span className="percent--100"></span>
								</li>
							</ul>
							<a
								className="download"
								href="/Steven_Portas_Resume.pdf"
								title="Download Resume"
								download>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24">
									<path d="m12 16 4-5h-3V4h-2v7H8z"></path>
									<path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
								</svg>
							</a>
						</section>
					</div>
				</aside>
				<div className="right-col">
					<section>
						<h2>Profile</h2>
						<p>
							Experienced Front-End Developer adept in bringing
							forth expertise in design, building, testing and
							maintenance of modern sites. Proficient in various
							languages, SCSS, JavaScript, jQuery, React and
							embedded systems. Experienced with the latest
							cutting edge development tools and procedures. Able
							to effectively self-manage during independent
							projects, as well as collaborate as part of a
							productive team.
						</p>
					</section>
					<section>
						<h2>Employment History</h2>
						<div className="group">
							<h3>
								Web Development Engineer, Ingeniux, Walla Walla
							</h3>
							<div className="date-line">
								February 2016 - January 2023
							</div>
							<ul>
								<li>
									Take our in-house designer or third-party
									vendor designs from PSDs, Sketch files,
									InVision, Figma, or even flat PNGs and work
									them into modern, responsive, and ADA-ready
									sites.
								</li>
								<li>
									Work closely with Back-End developers and
									designers to achieve the best possible
									outcome for each client.
								</li>
								<li>
									Work with PMs to make sure all work is done
									on time.
								</li>
							</ul>
						</div>
						<div className="group">
							<h3>
								Web Designer & Front-End Developer, Coffey
								Communications Inc., Walla Walla
							</h3>
							<div className="date-line">
								February 2013 - February 2016
							</div>
							<ul>
								<li>
									Design and develop Coffey's purely
									medical-based client sites.
								</li>
								<li>
									Moved the company away from developing sites
									in Dreamweaver to Sublime.
								</li>
							</ul>
						</div>
						<div className="group">
							<h3>
								Front-End Developer, First Call Group Ltd.,
								Weston-super-Mare, England
							</h3>
							<div className="date-line">
								January 2012 - August 2012
							</div>
							<ul>
								<li>
									Re-designed and rebuilt the company's two
									existing sites.
								</li>
								<li>
									Designed and build six more sites in the 6
									months working there.
								</li>
							</ul>
						</div>
						<div className="group">
							<h3>
								Chief Web Designer/Graphic Designer, Webglu,
								Weston-super-Mare, England
							</h3>
							<div className="date-line">
								May 2008 - December 2009
							</div>
							<ul>
								<li>
									Built flash elements into new and existing
									sites.
								</li>
								<li>
									Managed the design and development of nearly
									20 websites.
								</li>
								<li>
									Introduced advanced Flash features to the
									network of sites
								</li>
								<li>
									Communicated with clients to make sure they
									were 100% happy with their designs.
								</li>
							</ul>
						</div>
					</section>
					<section>
						<h2>Education</h2>
						<div className="education-group">
							<h3>HND, Swindon College of Art & Design</h3>
							<div className="date-line">
								January 1998 - January 2001
							</div>
						</div>
						<div className="education-group">
							<h3>GNVQ, Bridgwater College of Art & Design</h3>
							<div className="date-line">
								January 1995 - January 1998
							</div>
						</div>
					</section>
					<section>
						<h2>References</h2>
						<div className="reference-group">
							<h3>Justin Meyer</h3>
							<p>
								<a href="mailto:justinmeyer_13@hotmail.com">
									justinmeyer_13@hotmail.com
								</a>{' '}
								| (509) 876-6096
							</p>
						</div>
						<div className="reference-group">
							<h3>Joe Nevsehmal</h3>
							<p>
								<a href="mailto:jnevshemal@gmail.com">
									jnevshemal@gmail.com
								</a>{' '}
								| (307) 761-0141
							</p>
						</div>
						<div className="reference-group">
							<h3>Andrew Harvey</h3>
							<p>
								<a href="mailto:andrewmharvey27@gmail.com">
									andrewmharvey27@gmail.com
								</a>{' '}
								| (509) 520-6165
							</p>
						</div>
					</section>
				</div>
			</article>
			<div
				className={`fade ${dialogOpen ? 'open' : ''}`}
				onClick={openDialog}></div>
		</>
	);
};

export default Hero;
