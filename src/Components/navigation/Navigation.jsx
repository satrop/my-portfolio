import { createRef } from 'react';
import NavLink from './NavigationLink';
import ScrollSpy from 'react-scrollspy-navigation';
import ToolTip from '../tooltip/ToolTip';

import { motion } from 'framer-motion';

import './navigation.scss';

export default function Navigation() {
	const nav = {
		start: {
			opacity: 0,
			y: 500,
		},
		end: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 2,
				duration: 1,
				ease: 'easeInOut',
			},
		},
	};

	return (
		<motion.nav
			className="main-navigation"
			variants={nav}
			initial="start"
			animate="end">
			<ScrollSpy>
				<ToolTip content="Go to top of page">
					<NavLink href="#top" text="Top of page" ref={createRef()} />
				</ToolTip>
				<ToolTip content="Learn all about me">
					<NavLink href="#about" text="All about me" ref={createRef()} />
				</ToolTip>
				<ToolTip content="See my skills">
					<NavLink href="#skills" text="The skills I have" ref={createRef()} />
				</ToolTip>
				<ToolTip content="View my projects">
					<NavLink href="#projects" text="Projects I've worked on" ref={createRef()} />
				</ToolTip>
			</ScrollSpy>
		</motion.nav>
	);
}
