import { MainHeroGeometric } from "@/components/ui/demo";
import { AboutMe } from "@/components/ui/glowing-effect-demo";
import { NavBarDemo } from "@/components/ui/navbar-demo";
import ProjectsGrid from "@/components/ui/projects";
import { TestimonialsSectionDemo } from "@/components/ui/testimonials-demo";
import Timeline from "@/components/ui/timeline";
import { MainFooter } from "@/components/ui/footer-section";
import { ContactForm } from "@/components/ui/contact-form";

export default function Home() {
	return (
		<div>
			<NavBarDemo />
			<MainHeroGeometric />
			<AboutMe />
			<Timeline />
			<ProjectsGrid />
			<TestimonialsSectionDemo />
			<ContactForm />
			<MainFooter />
		</div>
	);
}
