import React from "react";

type Props = {
	title?: string;
};

const Title = ({ title }: Props) => {
	return (
		<h1 className="relative text-4xl md:text-5xl font-extrabold text-center mb-20 text-default-800 tracking-tight after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-20 after:bg-primary after:rounded-full animate-fadeIn">
			{title}
		</h1>
	);
};

export default Title;
