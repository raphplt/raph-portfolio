import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import DiscoverProfil from "./Hero/DiscoverProfil";
import RightColum from "./Hero/RightColum";
import LeftColumn from "./Hero/LeftColumn";

const HeroSection = () => {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});

	const discoverScale = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
	const discoverOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

	return (
		<motion.section
			id="home"
			ref={containerRef}
			className="flex flex-col items-center min-h-screen bg-gradient-primary-soft relative overflow-hidden py-16 md:py-0"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			{/* Main content container */}
			<div className="mx-auto grid grid-cols-1 md:grid-cols-2 h-full gap-8 2xl:gap-40 px-6 md:px-8 items-center xl:pt-36 pt-10">
				<LeftColumn />
				<RightColum scrollYProgress={scrollYProgress} />
			</div>

			<DiscoverProfil scale={discoverScale} opacity={discoverOpacity} />
		</motion.section>
	);
};

export default HeroSection;
