import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Configuration Firebase
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

console.log("Initializing Firebase app...");
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log("Firebase app initialized.");

// Les données des projets
const projects = [
  {
    id: "1",
    title: "Melios",
    description:
      "Melios est une application gamifiée de développement personnel...",
    image: "https://example.com/melios-image.jpg",
    technologies: ["React Native", "Firebase", "Node.js", "TailwindCSS"],
    url: "https://github.com/raphplt/melios",
  },
  {
    id: "2",
    title: "Novavoach",
    description:
      "Novavoach est un site web conçu pour connecter les coachs sportifs...",
    image: "https://example.com/novavoach-image.jpg",
    technologies: ["Next.js", "MongoDB", "GraphQL", "TailwindCSS"],
    url: "https://github.com/raphplt/novavoach",
  },
  {
    id: "3",
    title: "Raphotos",
    description: "Raphotos est une plateforme pour exposer mes photos...",
    image: "https://example.com/raphotos-image.jpg",
    technologies: ["React", "Firebase", "CSS Modules"],
    url: "https://github.com/raphplt/raphotos",
  },
  {
    id: "4",
    title: "Execo",
    description:
      "Execo est une plateforme web innovante aidant les consommateurs...",
    image: "https://example.com/execo-image.jpg",
    technologies: ["Angular", "Node.js", "PostgreSQL", "Bootstrap"],
    url: "https://github.com/raphplt/execo",
  },
];

console.log("Starting to upload projects...");

// Ajouter les projets dans Firestore
export async function uploadProjects() {
  try {
    const projectsCollection = collection(db, "projects");

    for (const project of projects) {
      console.log(`Adding project "${project.title}"...`);
      await addDoc(projectsCollection, project);
      console.log(`Project "${project.title}" ajouté avec succès.`);
    }
    console.log("All projects uploaded successfully.");
  } catch (error) {
    console.error("Erreur lors de l'ajout des projets : ", error);
  }
}

// Appel de la fonction pour uploader les projets
uploadProjects();
