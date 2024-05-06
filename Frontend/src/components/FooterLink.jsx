import React from "react";

const FooterLink = ({ link, label }) => {
	const handleLinkClick = (event) => {
		event.preventDefault(); // Stop the default navigation

		// Open the link in a new tab with desired features (optional)
		window.open(event.target.href, "_blank", "noopener,noreferrer");
	};

	return (
		<a
			href={link}
			class="hover:underline me-4 md:me-6"
			target="_blank"
			onClick={handleLinkClick}
		>
			{label}
		</a>
	);
};

export default FooterLink;
