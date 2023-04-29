import { createRef } from 'react';
import NavLink from './NavigationLink';
import ScrollSpy from 'react-scrollspy-navigation';

import './Navigation.scss';

export default function Navigation() {
	return (
		<nav className="main-navigation">
			<ScrollSpy>
				<NavLink href="#top" text="Top of page" ref={createRef()} />
				<NavLink href="#about" text="All about me" ref={createRef()} />
				<NavLink
					href="#skills"
					text="The skills I have"
					ref={createRef()}
				/>
				<NavLink
					href="#projects"
					text="Projects I've worked on"
					ref={createRef()}
				/>
			</ScrollSpy>
		</nav>
	);
}
