import { DemoHeroGeometric } from "@/components/ui/demo";
import { GlowingEffectDemo } from "@/components/ui/glowing-effect-demo";
import { NavBarDemo } from "@/components/ui/navbar-demo";
import ProjectsGrid from "@/components/ui/projects";
import { TestimonialsSectionDemo } from "@/components/ui/testimonials-demo";
import Timeline from "@/components/ui/timeline";
import { Footerdemo } from "@/components/ui/footer-section";

export default function Home() {
	return (
		<div>
			<NavBarDemo />
			<DemoHeroGeometric />
			<GlowingEffectDemo />
			<Timeline />
			<ProjectsGrid />
			<TestimonialsSectionDemo />
			<Footerdemo />
		</div>
	);
}
