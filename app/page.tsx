import ProgressBar from "@/components/Common/Animations/ProgressBar";
import Header from "@/components/Common/Header";
import Contact from "@/components/Layout/Contact";
import Projects from "@/components/Layout/Projects";

export default function Home() {
	return (
		<main className="min-h-screen">
			<Header />
			<div className="h-screen">
				<h1 className="text-7xl font-bold w-11/12 mx-auto bottom-20 left-10 absolute">
					Développer différemment
				</h1>
			</div>
			<Projects />
			<Contact />
			<ProgressBar />
		</main>
	);
}
