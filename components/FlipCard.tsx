import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

interface FlipCardProps {
	title: string;
	icon: string;
	frontText: string;
	backText: string;
	iconColor?: string;
}

const FlipCard = ({
	title,
	icon,
	frontText,
	backText,
	iconColor = "text-accent-400",
}: FlipCardProps) => {
	return (
		<div className="flip-card h-[350px] w-full perspective-1000">
			<div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d hover:rotate-y-180">
				{/* Front */}
				<div className="flip-card-front absolute w-full h-full backface-hidden bg-accent-100 rounded-xl shadow-lg p-6 flex flex-col justify-center">
					<h3 className="text-xl font-bold text-accent-500 mb-3 text-center">
						{title}
					</h3>
					<Icon icon={icon} className={`text-5xl ${iconColor} mb-4 self-center`} />
					<p className="text-center text-default-700">{frontText}</p>
				</div>
				{/* Back */}
				<div className="flip-card-back absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg p-6 rotate-y-180 overflow-auto">
					<p className="text-default-800 leading-relaxed">{backText}</p>
				</div>
			</div>
		</div>
	);
};

export default FlipCard;
