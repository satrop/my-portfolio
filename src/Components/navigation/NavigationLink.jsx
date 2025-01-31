import { forwardRef } from 'react';

const NavigationLink = forwardRef(({ href, text }, ref) => (
	<a ref={ref} href={href} className="nav-link">
		<span className="sr-only">{text}</span>
	</a>
));

export default NavigationLink;
