import React, { useState } from 'react';
import './tooltip.scss';

const ToolTip = ({ children, content, ...props }) => {
	const [isHovered, setHovered] = useState(false);
	const toggleClass = () => setHovered(!isHovered);

	return (
		<span
			onMouseEnter={toggleClass}
			onMouseLeave={toggleClass}
			{...props}>
			{children}
			<div className={`tool-tip ${isHovered ? 'hovered' : ''}`}>
				{content}
			</div>
		</span>
	);
};

export default ToolTip;
