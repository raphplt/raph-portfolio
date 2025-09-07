import { MainHeroGeometric } from "@/components/ui/demo";
import { AboutMe } from "@/components/ui/glowing-effect-demo";
import { NavbarMain } from "@/components/ui/navbar";
import ProjectsGrid from "@/components/ui/projects";
import { TestimonialsSectionDemo } from "@/components/ui/testimonials-demo";
import Timeline from "@/components/ui/timeline";
import { MainFooter } from "@/components/ui/footer-section";
import { ContactForm } from "@/components/ui/contact-form";
import { CVSection } from "@/components/ui/cv-section";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function Home() {
	return (
		<div>
			<NavbarMain />
			<MainHeroGeometric />
			<AboutMe />
			<Timeline />
			<CVSection />
			<ProjectsGrid />
			<TestimonialsSectionDemo />
			<ContactForm />
			<MainFooter />
			<ScrollToTop />
		</div>
	);
}
