import ProgressBar from "@/components/Common/Animations/ProgressBar";
import Header from "@/components/Common/Header";
import ThreeDModel from "@/components/Common/Planet";
import Contact from "@/components/Layout/Contact";
import Projects from "@/components/Layout/Projects";

export default function Home() {
	return (
		<main className="relative min-h-screen">
			<Header />
			<div className="relative h-screen">
				<ThreeDModel />
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 text-center">
					<h1 className="text-7xl font-bold w-11/12 mx-auto">
						Développer différemment
					</h1>
					<h2 className="text-4xl font-semibold text-gray-900 w-11/12 mx-auto mt-4">
						Raphaël Plassart
					</h2>
				</div>
			</div>
			<Projects />
			<Contact />
			<ProgressBar />
		</main>
	);
}
