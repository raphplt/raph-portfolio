import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Header = () => {
	return (
		<header className="sticky top-0 mt-5 w-[95%] mx-auto h-8 left-0 right-0 flex items-center justify-between z-50">
			<div className="text-2xl font-extrabold">RP</div>
			<div className="flex gap-20 items-center">
				<a className="font-semibold text-lg" href="#projects">
					Projets
				</a>
				<a className="font-semibold text-lg" href="#competences">
					Compétences
				</a>
				<a className="font-semibold text-lg" href="#contact">
					Contact
				</a>
			</div>
			<div>
				<Icon icon="mdi:send" className="text-2xl" />
			</div>
		</header>
	);
};

export default Header;
