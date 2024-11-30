import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Header = () => {
	return (
		<header className="sticky top-0 mt-5 w-[95%] mx-auto h-8  left-0 right-0 flex items-center justify-between">
			<div className="text-2xl font-extrabold">RP</div>
			<div className="flex gap-20 items-center">
				<div className="font-semibold text-lg">Projets</div>
				<div className="font-semibold text-lg">Compétences</div>
				<div className="font-semibold text-lg">Contact</div>
			</div>
			<div>
				<Icon icon="mdi:send" className="text-2xl" />
			</div>
		</header>
	);
};

export default Header;
