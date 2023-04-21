import React, { useState } from 'react';
import './tooltip.scss';

const ToolTip = ({ children, content, link, label, onClick, isButton, isToolTip }) => {
	const [isHovered, setHovered] = useState(false);
	const toggleClass = () => setHovered(!isHovered);

	if (isButton) {
		return (
			<li>
				<button
					onMouseEnter={toggleClass}
					onMouseLeave={toggleClass}
					onClick={onClick}
					aria-label={label}>
					{children}
					<div className={`tool-tip ${isHovered ? 'hovered' : ''}`}>
						{content}
					</div>
				</button>
			</li>
		);
	}

	if (isToolTip) {
		return (
			<span
				onMouseEnter={toggleClass}
				onMouseLeave={toggleClass}>
				{children}
				<div className={`tool-tip ${isHovered ? 'hovered' : ''}`}>
					{content}
				</div>
			</span>
		);
	}

	return (
		<li onMouseEnter={toggleClass} onMouseLeave={toggleClass}>
			<a href={link} onClick={onClick} aria-label={label} target="_blank">
				{children}
			</a>
			<div className={`tool-tip ${isHovered ? 'hovered' : ''}`}>
				{content}
			</div>
		</li>
	);
};

export default ToolTip;
