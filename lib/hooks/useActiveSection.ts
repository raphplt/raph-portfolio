import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
	const [activeSection, setActiveSection] = useState<string>("");

	useEffect(() => {
		const observers = new Map();

		const observerCallback: IntersectionObserverCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			});
		};

		const observerOptions: IntersectionObserverInit = {
			root: null,
			rootMargin: "-50% 0px -50% 0px",
			threshold: 0,
		};

		sectionIds.forEach((id) => {
			const element = document.getElementById(id);
			if (element) {
				const observer = new IntersectionObserver(
					observerCallback,
					observerOptions
				);
				observer.observe(element);
				observers.set(id, observer);
			}
		});

		return () => {
			observers.forEach((observer) => observer.disconnect());
		};
	}, [sectionIds]);

	return activeSection;
}
