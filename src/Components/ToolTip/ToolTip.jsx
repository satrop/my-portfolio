import React, { useState } from 'react';
import './tooltip.scss';

const ToolTip = ({ children, content, link, label, onClick }) => {
	const [isHovered, setHovered] = useState(false);
	const toggleClass = () => setHovered(!isHovered);

	return (
		<li onMouseEnter={toggleClass} onMouseLeave={toggleClass}>
			{/* Children - Spot for the icon */}
			<a href={link} onClick={onClick} aria-label={label} target="_blank">
				{children}
			</a>
			<div className={`tool-tip ${isHovered ? 'hovered' : ''}`}>
				{/* Content - Spot for the tooltip text */}
				{content}
			</div>
		</li>
	);
};

export default ToolTip;
