"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Input, Button, Textarea } from "@nextui-org/react";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormData {
	email: string;
	title: string;
	description: string;
}

const schema = z.object({
	email: z.string().email("Invalid email address"),
	title: z.string().min(1, "Title is required"),
	description: z.string().min(1, "Description is required"),
});

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<FormData> = (data) => {
		console.log(data);
	};

	return (
		<section
			className="h-screen w-full flex flex-row justify-center items-center"
			id="contact"
		>
			<div className="flex-1"></div>
			<div className="flex-1 mx-auto">
				<h2 className="text-2xl py-5 font-semibold text-center">Me contacter</h2>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col gap-4 w-10/12 mx-auto"
				>
					<Input
						label="Email"
						{...register("email")}
						errorMessage={String(errors.email?.message)}
					/>
					<Input
						label="Title"
						{...register("title")}
						errorMessage={String(errors.title?.message)}
					/>
					<Textarea
						label="Description"
						{...register("description")}
						errorMessage={String(errors.description?.message)}
					/>
					<Button type="submit" color="secondary">
						Envoyer
					</Button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
