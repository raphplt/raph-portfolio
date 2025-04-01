import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import DiscoverProfil from "./Hero/DiscoverProfil";
import RightColum from "./Hero/RightColum";
import LeftColumn from "./Hero/LeftColumn";

const HeroSection = () => {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsMobile(window.innerWidth < 768);

		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<motion.section
			id="home"
			ref={containerRef}
			className="flex flex-col items-center min-h-screen bg-gradient-primary-flow relative overflow-hidden py-16 md:py-0"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			{/* Main content container */}
			<div className="mx-auto grid grid-cols-1 md:grid-cols-2 h-full gap-8 2xl:gap-40 px-6 md:px-8 items-center xl:pt-36 pt-10">
				{!isMobile && <LeftColumn />}
				<RightColum scrollYProgress={scrollYProgress} />
			</div>

			<DiscoverProfil />
		</motion.section>
	);
};

export default HeroSection;
