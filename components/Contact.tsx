import React, { useEffect, useState } from "react";
import {
	Button,
	Form,
	FormContext,
	Input,
	Select,
	SelectItem,
	Textarea,
} from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { Mail } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Define validation schema with Zod
const formSchema = z.object({
	name: z
		.string()
		.min(2, { message: "Le nom doit comporter au moins 2 caractères" }),
	requestType: z
		.string()
		.min(1, { message: "Veuillez sélectionner un type de demande" }),
	email: z.string().email({ message: "Adresse email invalide" }),
	message: z
		.string()
		.min(10, { message: "Le message doit comporter au moins 10 caractères" }),
});

// Type for our form values
type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
	const requestsTypes = [
		"Demande de devis",
		"Projet à réaliser",
		"Question technique",
		"Autre",
	];

	// Animation state
	const [currentIcon, setCurrentIcon] = useState(0);
	const icons = ["mdi:coffee", "mdi:help-circle", "mdi:file-document"];
	const iconLabels = ["Un café", "Une question", "Un projet"];

	// Switch icons every 2 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIcon((prev) => (prev + 1) % icons.length);
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	const {
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			requestType: "",
			email: "",
			message: "",
		},
	});

	const onSubmit = async (data: FormValues) => {
		toast.loading("Envoi en cours...", { id: "submitToast" });
		const formData = new FormData();

		// Append form data
		Object.entries(data).forEach(([key, value]) => {
			formData.append(key, value);
		});

		try {
			const response = await fetch("https://formspree.io/f/mrbpavdg", {
				method: "POST",
				body: formData,
				headers: { Accept: "application/json" },
			});
			if (response.ok) {
				toast.success("Votre message a bien été envoyé !", { id: "submitToast" });
				reset();
			} else {
				toast.error("Une erreur est survenue, veuillez réessayer.", {
					id: "submitToast",
				});
			}
		} catch (error) {
			toast.error("Une erreur est survenue, veuillez réessayer.", {
				id: "submitToast",
			});
			console.error("Error:", error);
		}
	};

	// Variants pour les animations
	const containerVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, when: "beforeChildren", staggerChildren: 0.2 },
		},
	};

	const childVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	const iconVariants = {
		initial: { opacity: 0, y: 10, scale: 0.8 },
		animate: { opacity: 1, y: 0, scale: 1 },
		exit: { opacity: 0, y: -10, scale: 0.8 },
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-neutral-soft p-4">
			<Toaster position="top-center" />

			<motion.div
				id="contact"
				className="w-full max-w-2xl p-8 rounded-3xl backdrop-blur-md bg-white/30 border border-white/20 shadow-2xl"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				<motion.div
					className="flex flex-col items-center justify-center mb-8"
					variants={childVariants}
				>
					<div className="relative h-20 flex items-center justify-center mb-4">
						<AnimatePresence mode="wait">
							<motion.div
								key={currentIcon}
								className="absolute"
								variants={iconVariants}
								initial="initial"
								animate="animate"
								exit="exit"
								transition={{ duration: 0.5 }}
							>
								<Icon icon={icons[currentIcon]} className="text-umber text-5xl" />
							</motion.div>
						</AnimatePresence>
					</div>
					<motion.h2
						className="text-3xl md:text-4xl font-extrabold text-center text-umber"
						variants={childVariants}
					>
						<span className="relative">
							<AnimatePresence mode="wait">
								<motion.span
									key={currentIcon}
									className="absolute left-0 right-0 text-center"
									variants={iconVariants}
									initial="initial"
									animate="animate"
									exit="exit"
									transition={{ duration: 0.5 }}
								>
									{iconLabels[currentIcon]}
								</motion.span>
							</AnimatePresence>
							<span className="opacity-0">Un placeholder</span>
						</span>
						{" ? Contactez-moi !"}
					</motion.h2>
				</motion.div>

				<FormContext value={{}}>
					<Form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
						<motion.div
							className="flex flex-col md:flex-row gap-4 w-full"
							variants={childVariants}
						>
							<Controller
								name="name"
								control={control}
								render={({ field }) => (
									<Input
										{...field}
										label="Nom"
										className="flex-1"
										errorMessage={errors.name?.message}
										isInvalid={!!errors.name}
									/>
								)}
							/>
							<Controller
								name="requestType"
								control={control}
								render={({ field }) => (
									<Select
										{...field}
										label="Type de demande"
										className="flex-1"
										errorMessage={errors.requestType?.message}
										isInvalid={!!errors.requestType}
									>
										{requestsTypes.map((type) => (
											<SelectItem key={type} value={type}>
												{type}
											</SelectItem>
										))}
									</Select>
								)}
							/>
						</motion.div>
						<motion.div variants={childVariants} className="w-full">
							<Controller
								name="email"
								control={control}
								render={({ field }) => (
									<Input
										{...field}
										label="Email"
										type="email"
										startContent={<Mail className="text-umber" />}
										errorMessage={errors.email?.message}
										isInvalid={!!errors.email}
									/>
								)}
							/>
						</motion.div>
						<motion.div variants={childVariants} className="w-full">
							<Controller
								name="message"
								control={control}
								render={({ field }) => (
									<Textarea
										{...field}
										label="Message"
										rows={5}
										errorMessage={errors.message?.message}
										isInvalid={!!errors.message}
									/>
								)}
							/>
						</motion.div>
						<motion.div
							variants={childVariants}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="w-full"
						>
							<Button
								type="submit"
								color="primary"
								className=" flex w-full items-center justify-center text-white font-bold py-3 shadow-md"
								endContent={<Icon icon="mdi:send" className="text-white ml-2" />}
							>
								Envoyer
							</Button>
						</motion.div>
					</Form>
				</FormContext>
			</motion.div>
		</div>
	);
};

export default Contact;
