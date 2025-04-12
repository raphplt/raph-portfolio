import React, { JSX } from "react";
import Timeline from "./Timeline";
import FlipCard from "./FlipCard";
import { flipCardsData, timelineData } from "@/utils/data";

export interface TimelineItem {
	id: number;
	title: string;
	date: string;
	icon: JSX.Element;
	details: string;
}

const AboutMe = () => {
	return (
		<section
			className="w-full px-4 flex flex-col items-center justify-center pt-20 xl:pb-40 2xl:pb-96 min-h-screen bg-gradient-secondary-soft"
			id="about"
		>
			<h1 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold text-center mb-20 text-default-800">
				[ À propos de moi ]
			</h1>

			<Timeline timelineData={timelineData} />

			<div className="mt-24 container mx-auto flex flex-col items-center justify-center gap-8 px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
					{flipCardsData.map((card, index) => (
						<FlipCard
							key={index}
							title={card.title}
							icon={card.icon}
							frontText={card.frontText}
							backText={card.backText}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
