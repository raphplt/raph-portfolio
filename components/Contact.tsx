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
import React from "react";

const Contact = () => {
	const requestsTypes = [
		"Demande de devis",
		"Projet à réaliser",
		"Question technique",
		"Autre",
	];

	return (
		<div className="py-20" id="contact">
			<h2 className="text-2xl lg:text-4xl 2xl:text-4xl font-bold text-center mb-10 text-default-800">
				Un projet, une question, un café ?
			</h2>

			<FormContext value={{}}>
				<Form
					onSubmit={(e) => e.preventDefault()}
					className="w-10/12 xl:w-1/3 mx-auto py-4 flex flex-col gap-4"
				>
					<div className="flex flex-row gap-2 items-center w-full">
						<Input label="Nom" name="name" />
						<Select label="Type de demande" name="requestType">
							{requestsTypes.map((type) => (
								<SelectItem key={type} value={type}>
									{type}
								</SelectItem>
							))}
						</Select>
					</div>
					<Input label="Email" name="email" />
					<Textarea label="Message" name="message" />

					<Button
						type="submit"
						color="primary"
						className="text-white"
						endContent={<Icon icon="mdi:send" className="text-white" />}
					>
						Envoyer
					</Button>
				</Form>
			</FormContext>
		</div>
	);
};

export default Contact;
