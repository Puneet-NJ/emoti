import React from "react";
import FooterLink from "./FooterLink";

const Footer = () => {
	return (
		<footer class="bg-white rounded-lg shadow mx-1 dark:bg-gray-800">
			<div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
				<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
					© Copyright 2017{" "}
					<a href="https://flowbite.com/" class="hover:underline">
						Emoticup
					</a>{" "}
					| All rights reserved.
				</span>
				<ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
					<li>
						<FooterLink link={"https://emoticup.com/"} label={"About"} />
					</li>
					<li>
						<FooterLink
							link={"https://emoticup.com/contact-us/"}
							label={"Contact"}
						/>
					</li>
				</ul>
			</div>
		</footer>

		// <div className="bg-gray-500 text-white py-2  text-center">
		// 	© Copyright 2017 emoticup. | All rights reserved.
		// </div>
	);
};

export default Footer;
