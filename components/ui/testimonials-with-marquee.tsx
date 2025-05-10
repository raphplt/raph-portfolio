import { cn } from "@/lib/utils";

interface Testimonial {
	author: {
		name: string;
		handle: string;
		avatar: string;
	};
	text: string;
	href?: string;
}

interface TestimonialsSectionProps {
	title: string;
	description: string;
	testimonials: Testimonial[];
	className?: string;
}

export function TestimonialsSection({
	title,
	description,
	testimonials,
	className,
}: TestimonialsSectionProps) {
	return (
		<section
			className={cn("relative min-h-screen w-full py-20 bg-[#030303]", className)}
		>
			<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
			<div className="relative z-10 mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
				<div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
					<h2 className="max-w-[720px] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
						{title}
					</h2>
					<p className="text-md max-w-[600px] font-medium text-white/40 sm:text-xl">
						{description}
					</p>
				</div>

				<div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
					<div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
						<div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
							{[...Array(4)].map((_, setIndex) =>
								testimonials.map((testimonial, i) => (
									<TestimonialCard key={`${setIndex}-${i}`} {...testimonial} />
								))
							)}
						</div>
					</div>

					<div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-[#030303] sm:block" />
					<div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-[#030303] sm:block" />
				</div>
			</div>
			<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
		</section>
	);
}

function TestimonialCard({ author, text, href }: Testimonial) {
	return (
		<div className="flex flex-col gap-4 p-4 bg-white/[0.03] rounded-lg backdrop-blur-[2px] border border-white/[0.08] w-[350px]">
			<div className="flex items-center gap-4">
				<img
					src={author.avatar}
					alt={author.name}
					className="w-12 h-12 rounded-full"
				/>
				<div>
					<h3 className="font-semibold text-white">{author.name}</h3>
					<p className="text-sm text-white/40">{author.handle}</p>
				</div>
			</div>
			<p className="text-white/60">{text}</p>
			{href && (
				<a
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					className="text-white/40 hover:text-white/60 text-sm"
				>
					View on Twitter →
				</a>
			)}
		</div>
	);
}
