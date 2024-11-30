"use client";
import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Model = ({ url }: { url: string }) => {
	const gltf = useLoader(GLTFLoader, url);
	const modelRef = useRef<any>(null);

	useEffect(() => {
		if (modelRef.current) {
			modelRef.current.scale.set(2, 2, 2);
		}
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (modelRef.current) {
				const scrollY = window.scrollY || document.documentElement.scrollTop;

				const scaleFactor = Math.max(0.8, 2 - scrollY / 500);
				modelRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useFrame(() => {
		if (modelRef.current) {
			modelRef.current.rotation.y += 0.005;
		}
	});

	return <primitive object={gltf.scene} ref={modelRef} />;
};

const ThreeDModel = () => {
	return (
		<div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
			<Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
				{/* Lumières */}
				<ambientLight intensity={0.5} />
				<directionalLight position={[10, 10, 5]} intensity={1} />
				{/* Modèle 3D */}
				<Model url="planet.glb" />
			</Canvas>
		</div>
	);
};

export default ThreeDModel;
