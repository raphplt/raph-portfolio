"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";

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

function ElegantDiamond({
	className,
	delay = 0,
	size = 200,
	rotate = 0,
	gradient = "from-white/[0.08]",
}: {
	className?: string;
	delay?: number;
	size?: number;
	rotate?: number;
	gradient?: string;
}) {
	return (
		<motion.div
			initial={{
				opacity: 0,
				scale: 0.8,
				rotate: rotate - 15,
			}}
			animate={{
				opacity: 1,
				scale: 1,
				rotate: rotate,
			}}
			transition={{
				duration: 2,
				delay,
				ease: [0.23, 0.86, 0.39, 0.96],
			}}
			className={cn("absolute", className)}
		>
			<motion.div
				animate={{
					rotate: [rotate, rotate + 360],
					scale: [1, 1.1, 1],
				}}
				transition={{
					duration: 20,
					repeat: Number.POSITIVE_INFINITY,
					ease: "linear",
				}}
				style={{
					width: size,
					height: size,
				}}
				className="relative"
			>
				<div
					className={cn(
						"absolute inset-0 rotate-45",
						"bg-gradient-to-r to-transparent",
						gradient,
						"backdrop-blur-[2px] border-2 border-white/[0.15]",
						"shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
						"after:absolute after:inset-0",
						"after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
					)}
				/>
			</motion.div>
		</motion.div>
	);
}

export function ContactForm() {
	const [formData, setFormData] = useState({ name: "", email: "", message: "" });
	const [isSubmitting, setIsSubmitting] = useState(false);

	

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		// validation front
		if (!formData.name || !formData.email || !formData.message) {
			toast.error("Tous les champs sont requis");
			return;
		}
		const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRx.test(formData.email)) {
			toast.error("Email invalide");
			return;
		}

		setIsSubmitting(true);
		try {
			const res = await fetch("https://formspree.io/f/mrbpavdg", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});
			if (res.ok) {
				toast.success("Message envoyé 🎉");
				setFormData({ name: "", email: "", message: "" });
			} else {
				toast.error("Échec de l'envoi.");
			}
		} catch {
			toast.error("Erreur réseau.");
		} finally {
			setIsSubmitting(false);
		}
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

			<div className="absolute inset-0 overflow-hidden hidden sm:block">
				<ElegantShape
					delay={0.3}
					width={600}
					height={140}
					rotate={12}
					gradient="from-primary/[0.15]"
					className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
				/>

				<ElegantDiamond
					delay={0.4}
					size={300}
					rotate={45}
					gradient="from-accent/[0.15]"
					className="right-[10%] md:right-[15%] top-[30%] md:top-[35%]"
				/>

				<ElegantShape
					delay={0.5}
					width={500}
					height={120}
					rotate={-15}
					gradient="from-secondary/[0.15]"
					className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
				/>

				<ElegantDiamond
					delay={0.6}
					size={200}
					rotate={-30}
					gradient="from-primary/[0.15]"
					className="left-[15%] md:left-[20%] bottom-[20%] md:bottom-[25%]"
				/>

				<ElegantShape
					delay={0.4}
					width={300}
					height={80}
					rotate={-8}
					gradient="from-accent/[0.15]"
					className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
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
						className="pb-10"
					>
						<span className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground/90 to-secondary">
							Discutons de votre prochain projet
						</span>
					</motion.div>

					<motion.div
						custom={2}
						variants={fadeUpVariants}
						initial="hidden"
						animate="visible"
					>
						<form
							onSubmit={handleSubmit}
							className="space-y-4 sm:space-y-6 bg-background/50 p-4 sm:p-8 rounded-2xl backdrop-blur-sm border border-border z-10"
						>
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-muted-foreground mb-1 sm:mb-2"
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
									className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-background/50 border border-border text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
									placeholder="Votre nom"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-muted-foreground mb-1 sm:mb-2"
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
									className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-background/50 border border-border text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
									placeholder="votre@email.com"
								/>
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-muted-foreground mb-1 sm:mb-2"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									required
									rows={4}
									className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-background/50 border border-border text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-sm sm:text-base"
									placeholder="Votre message..."
								/>
							</div>
							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								type="submit"
								disabled={isSubmitting}
								className={cn(
									"w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg bg-gradient-to-r from-primary via-foreground/90 to-secondary text-background font-medium transition-all duration-300 text-sm sm:text-base",
									isSubmitting && "opacity-50 cursor-not-allowed"
								)}
							>
								{isSubmitting ? "Envoi..." : "Envoyer"}
							</motion.button>
						</form>
					</motion.div>
				</div>
			</div>

			<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80" />
		</section>
	);
}
