"use client";
import React, { useState, useEffect } from "react";

const ProgressBar = () => {
	const [scrollDistance, setScrollDistance] = useState(0);

	const calculateScrollDistance = () => {
		const scrollTop = window.scrollY;
		const docHeight = document.body.scrollHeight;
		const winHeight = window.innerHeight;
		const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
		return scrollPercent;
	};

	useEffect(() => {
		const handleScroll = () => {
			setScrollDistance(calculateScrollDistance());
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Set initial scroll distance

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className="fixed bottom-5 w-[95%] right-0 left-0 mx-auto h-6 bg-gradient-to-l 
        from-[#ff0080] to-[#7928ca] rounded-2xl"
			style={{
				width: `${scrollDistance}%`,
			}}
		></div>
	);
};

export default ProgressBar;
