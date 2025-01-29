import { Chip } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const ListTechnos = () => {
	return (
		<div className="flex flex-row gap-x-2">
			<Chip
				color="primary"
				startContent={<Icon icon="ri:nextjs-fill" />}
				className="text-white "
			>
				NextJS
			</Chip>
			<Chip
				color="secondary"
				startContent={<Icon icon="logos:react" />}
				className="text-white "
			>
				ReactNative
			</Chip>
			<Chip
				color="warning"
				startContent={<Icon icon="logos:nestjs" />}
				className="text-white "
			>
				NestJS
			</Chip>
			<Chip
				color="danger"
				startContent={<Icon icon="logos:symfony" />}
				className="text-white "
			>
				Symfony
			</Chip>
			<Chip
				color="primary"
				startContent={<Icon icon="logos:mysql" />}
				className="text-white "
			>
				MySQL
			</Chip>
			<Chip
				color="secondary"
				startContent={<Icon icon="logos:postgresql" />}
				className="text-white "
			>
				PostgreSQL
			</Chip>
		</div>
	);
};

export default ListTechnos;
