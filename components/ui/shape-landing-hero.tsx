"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/context/theme-context";

function ElegantShape({
	className,
	delay = 0,
	width = 400,
	height = 100,
	rotate = 0,
	gradient,
}: {
	className?: string;
	delay?: number;
	width?: number;
	height?: number;
	rotate?: number;
	gradient?: string;
}) {
	const { theme } = useTheme();
	const effectiveGradient =
		gradient || (theme === "dark" ? "from-primary/[0.15]" : "from-primary/40"); // plus visible en mode clair

	return (
		<motion.div
			initial={{
				opacity: 0,
				y: -150,
				rotate: rotate - 15,
			}}
			animate={{
				opacity: 1,
				y: 0,
				rotate: rotate,
			}}
			transition={{
				duration: 2.4,
				delay,
				ease: [0.23, 0.86, 0.39, 0.96],
				opacity: { duration: 1.2 },
			}}
			className={cn("absolute", className)}
		>
			<motion.div
				animate={{
					y: [0, 15, 0],
					rotate: [rotate, rotate + 5, rotate],
					scale: [1, 1.05, 1],
				}}
				transition={{
					duration: 12,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
				style={{
					width,
					height,
				}}
				className="relative"
			>
				<div
					className={cn(
						"absolute inset-0 rounded-full",
						"bg-gradient-to-r to-transparent",
						effectiveGradient,
						"backdrop-blur-[2px] border-2 border-white/[0.15]",
						"shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
						"after:absolute after:inset-0 after:rounded-full",
						"after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
					)}
				/>
			</motion.div>
		</motion.div>
	);
}

function HeroGeometric({
	badge = "Design Collective",
	title1 = "Elevate Your Digital Vision",
	title2 = "Crafting Exceptional Websites",
	description = "Crafting exceptional digital experiences through innovative design and cutting-edge technology.",
}: {
	badge?: string;
	title1?: string;
	title2?: string;
	description?: string;
}) {
	const { theme } = useTheme();
	const fadeUpVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				delay: 0.5 + i * 0.2,
				ease: [0.25, 0.4, 0.25, 1],
			},
		}),
	};

	return (
		<div
			className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background"
			id="home"
		>
			<div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-secondary/[0.05] blur-3xl z-[-1]" />

			<div className="absolute inset-0 overflow-hidden">
				<ElegantShape
					delay={0.3}
					width={600}
					height={140}
					rotate={12}
					gradient={theme === "dark" ? "from-primary/[0.15]" : "from-primary/80"}
					className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
				/>

				<ElegantShape
					delay={0.5}
					width={500}
					height={120}
					rotate={-15}
					gradient={theme === "dark" ? "from-secondary/[0.15]" : "from-secondary/70"}
					className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
				/>

				<ElegantShape
					delay={0.4}
					width={300}
					height={80}
					rotate={-8}
					gradient={theme === "dark" ? "from-accent/[0.15]" : "from-accent/60"}
					className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
				/>

				<ElegantShape
					delay={0.6}
					width={200}
					height={60}
					rotate={20}
					gradient={theme === "dark" ? "from-primary/[0.15]" : "from-primary/70"}
					className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
				/>

				<ElegantShape
					delay={0.7}
					width={150}
					height={40}
					rotate={-25}
					gradient={theme === "dark" ? "from-secondary/[0.15]" : "from-secondary/60"}
					className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
				/>
			</div>

			<div className="relative z-10">
				<div className="max-w-3xl mx-auto text-center">
					<motion.div
						custom={0}
						variants={fadeUpVariants}
						initial="hidden"
						animate="visible"
						className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/5 border border-border mb-8 md:mb-12"
					>
						<Circle className="h-2 w-2 fill-secondary/80" />
						<span className="text-sm text-muted-foreground tracking-wide">
							{badge}
						</span>
					</motion.div>

					<motion.div
						custom={1}
						variants={fadeUpVariants}
						initial="hidden"
						animate="visible"
					>
						<h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
							<span
								className={cn(
									"bg-clip-text text-transparent",
									theme === "dark"
										? "bg-gradient-to-b from-foreground to-foreground/80"
										: "bg-gradient-to-b from-black to-zinc-700"
								)}
							>
								{title1}
							</span>
							<br />
							<span
								className={cn(
									"bg-clip-text text-transparent",
									theme === "dark"
										? "bg-gradient-to-r from-primary via-foreground/90 to-secondary"
										: "bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400"
								)}
							>
								{title2}
							</span>
							{/* <TextShimmer
								duration={1.2}
								className="text-xl font-medium [--base-color:theme(colors.indigo.300)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.white)] dark:[--base-gradient-color:theme(colors.rose.300)]"
							>
								Hi, how are you?
							</TextShimmer> */}
						</h1>
					</motion.div>

					<motion.div
						custom={2}
						variants={fadeUpVariants}
						initial="hidden"
						animate="visible"
					>
						<p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
							{description}
						</p>
					</motion.div>
				</div>
			</div>

			<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80 " />
		</div>
	);
}

export { HeroGeometric };
