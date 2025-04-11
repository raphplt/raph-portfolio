import React, { JSX, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Modal, ModalBody, ModalHeader, Button, Tooltip } from "@heroui/react";

interface TimelineItem {
	id: number;
	title: string;
	date: string;
	icon: JSX.Element;
	details: string;
}

interface TimelineProps {
	timelineData: TimelineItem[];
}

const Timeline = ({ timelineData }: TimelineProps) => {
	const [selectedEvent, setSelectedEvent] = useState<TimelineItem | null>(null);
	const timelineRef = useRef<HTMLDivElement>(null);
	const [isMobile, setIsMobile] = useState(false);

	const handleOpen = (eventData: TimelineItem) => {
		setSelectedEvent(eventData);
	};

	const handleClose = () => {
		setSelectedEvent(null);
	};

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		const handleScroll = () => {
			if (timelineRef.current && !isMobile) {
				const scrollTop = window.scrollY;
				timelineRef.current.scrollLeft = scrollTop;
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
		};
	}, [isMobile]);

	return (
		<>
			{/* Mobile Timeline (Vertical) */}
			{isMobile && (
				<div className="w-full max-w-md mb-12">
					<div className="relative border-l-2 border-slate-200 pl-6 py-4 ml-6">
						{timelineData.map((item) => (
							<motion.div
								key={item.id}
								className="mb-10 relative"
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								viewport={{ once: true, amount: 0.2 }}
								onClick={() => handleOpen(item)}
							>
								<div className="absolute -left-12 flex items-center justify-center bg-white rounded-full p-3 shadow-lg">
									{item.icon}
								</div>
								<div className="ml-10">
									<h3 className="text-lg font-semibold text-accent-400">{item.title}</h3>
									<p className="text-sm text-default-600 opacity-90 mb-1">{item.date}</p>
									<p className="text-default-100 text-sm">{item.details}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			)}

			{/* Desktop Timeline (Horizontal) */}
			{!isMobile && (
				<div
					ref={timelineRef}
					className="relative w-full overflow-x-auto overflow-y-hidden py-20 scrollbar-hide"
				>
					<div className="absolute top-1/2 left-0 h-1 w-[200%] bg-default-500 -translate-y-1/2" />

					<div className="relative flex items-center space-x-8 w-max pl-80">
						{timelineData.map((item) => (
							<Tooltip
								content={
									<div className="p-2">
										<p className="text-lg font-semibold text-primary">{item.title}</p>
										<p className="text-sm text-default-500 opacity-80">{item.date}</p>
										<p className="text-default-500">{item.details}</p>
									</div>
								}
								key={item.id}
							>
								<motion.div
									className="relative min-w-[300px] 2xl:min-w-[500px] snap-center flex flex-col items-center cursor-pointer"
									initial={{ opacity: 0, x: 100 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5 }}
									viewport={{ once: true, amount: 0.6 }}
									onClick={() => handleOpen(item)}
								>
									<div className="flex flex-col items-center">
										<div className="relative z-10 mb-4 flex items-center justify-center bg-white rounded-full p-3 shadow-lg">
											{item.icon}
										</div>
										<div className="text-center">
											<h3 className="text-lg font-semibold text-accent-400">
												{item.title}
											</h3>
											<p className="text-sm text-default-500 opacity-80">{item.date}</p>
										</div>
									</div>
								</motion.div>
							</Tooltip>
						))}
					</div>
				</div>
			)}

			<Modal isOpen={!!selectedEvent} onClose={handleClose} className="p-4">
				<ModalHeader className="flex justify-between items-center">
					<p className="text-xl font-bold">{selectedEvent?.title}</p>
					<Button variant="ghost" onPress={handleClose}>
						Fermer
					</Button>
				</ModalHeader>
				<ModalBody>
					<p className="text-foreground">{selectedEvent?.details}</p>
				</ModalBody>
			</Modal>
		</>
	);
};

export default Timeline;
