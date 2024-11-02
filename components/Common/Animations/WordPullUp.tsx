"use client";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import * as React from "react";

export function WordsPullUp({
	text,
	className = "",
}: {
	text: string;
	className?: string;
}) {
	const splittedText = text.split(" ");

	const pullupVariant = {
		initial: { y: 20, opacity: 0 },
		animate: (i: number) => ({
			y: 0,
			opacity: 1,
			transition: {
				delay: i * 0.1,
				duration: 0.5, // Ensure this duration matches the interval
			},
		}),
	};
	const ref = React.useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<div className="">
			{splittedText.map((current, i) => (
				<motion.div
					key={i}
					ref={ref}
					variants={pullupVariant}
					initial="initial"
					animate={isInView ? "animate" : ""}
					custom={i}
					className={cn(
						"text-xl text-center sm:text-4xl  tracking-tighter md:text-8xl md:leading-[4rem]",
						"pr-2",
						className
					)}
				>
					{current == "" ? <span>&nbsp;</span> : current}
				</motion.div>
			))}
		</div>
	);
}