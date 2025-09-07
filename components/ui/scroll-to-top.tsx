"use client";

import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0 }}
					onClick={scrollToTop}
					className={cn(
						"fixed bottom-8 right-8 z-40 p-3 rounded-full",
						"bg-primary text-primary-foreground shadow-lg",
						"hover:bg-primary/90 transition-colors",
						"focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
					)}
					aria-label="Retour en haut de la page"
				>
					<ArrowUp className="h-5 w-5" />
				</motion.button>
			)}
		</AnimatePresence>
	);
}
