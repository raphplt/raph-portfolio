import { Chip } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const ListTechnos = () => {
	return (
		<div className="flex flex-row gap-x-2">
			<Chip
				color="primary"
				variant="bordered"
				startContent={<Icon icon="ri:nextjs-fill" />}
			>
				NextJS
			</Chip>
			<Chip
				color="secondary"
				variant="bordered"
				startContent={<Icon icon="logos:react" />}
			>
				ReactNative
			</Chip>
			<Chip
				color="primary"
				startContent={<Icon icon="logos:nestjs" />}
				variant="bordered"
			>
				NestJS
			</Chip>
			<Chip
				color="secondary"
				startContent={<Icon icon="logos:symfony" />}
				variant="bordered"
			>
				Symfony
			</Chip>
			<Chip
				color="primary"
				startContent={<Icon icon="logos:mysql" />}
				variant="bordered"
			>
				MySQL
			</Chip>
			<Chip
				color="secondary"
				startContent={<Icon icon="logos:postgresql" />}
				variant="bordered"
			>
				PostgreSQL
			</Chip>
		</div>
	);
};

export default ListTechnos;
