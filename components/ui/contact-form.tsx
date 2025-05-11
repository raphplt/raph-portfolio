"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

function ElegantShape({
	className,
	delay = 0,
	width = 400,
	height = 100,
	rotate = 0,
	gradient = "from-white/[0.08]",
}: {
	className?: string;
	delay?: number;
	width?: number;
	height?: number;
	rotate?: number;
	gradient?: string;
}) {
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
						gradient,
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

export function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		// TODO: Implement form submission logic
		console.log("Form submitted:", formData);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

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
		<section
			className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background"
			id="contact"
		>
			<div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-secondary/[0.05] blur-3xl z-[-1]" />

			<div className="absolute inset-0 overflow-hidden">
				<ElegantShape
					delay={0.3}
					width={600}
					height={140}
					rotate={12}
					gradient="from-primary/[0.15]"
					className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
				/>

				<ElegantShape
					delay={0.5}
					width={500}
					height={120}
					rotate={-15}
					gradient="from-secondary/[0.15]"
					className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
				/>

				<ElegantShape
					delay={0.4}
					width={300}
					height={80}
					rotate={-8}
					gradient="from-accent/[0.15]"
					className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
				/>

				<ElegantShape
					delay={0.6}
					width={200}
					height={60}
					rotate={20}
					gradient="from-primary/[0.15]"
					className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
				/>

				<ElegantShape
					delay={0.7}
					width={150}
					height={40}
					rotate={-25}
					gradient="from-secondary/[0.15]"
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
							Contactez-moi
						</span>
					</motion.div>

					<motion.div
						custom={1}
						variants={fadeUpVariants}
						initial="hidden"
						animate="visible"
					>
						<h2 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
							<span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/80">
								Discutons de votre
							</span>
							<br />
							<span
								className={cn(
									"bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground/90 to-secondary"
								)}
							>
								prochain projet
							</span>
						</h2>
					</motion.div>

					<motion.div
						custom={2}
						variants={fadeUpVariants}
						initial="hidden"
						animate="visible"
					>
						<form
							onSubmit={handleSubmit}
							className="space-y-6 bg-background/50 p-8 rounded-2xl backdrop-blur-sm border border-border z-10"
						>
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-muted-foreground mb-2"
								>
									Nom
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
									placeholder="Votre nom"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-muted-foreground mb-2"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
									placeholder="votre@email.com"
								/>
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-muted-foreground mb-2"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									required
									rows={6}
									className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
									placeholder="Votre message..."
								/>
							</div>
							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								type="submit"
								className="w-full py-3 cursor-pointer px-6 rounded-lg bg-gradient-to-r from-primary via-foreground/90 to-secondary text-white font-medium hover:from-primary/90 hover:to-secondary/90 transition-all duration-300"
							>
								Envoyer
							</motion.button>
						</form>
					</motion.div>
				</div>
			</div>

			<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80" />
		</section>
	);
}
