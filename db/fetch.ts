import { collection, getDocs } from "firebase/firestore";
import { db } from "./main";

/**
 * Fetches all projects from the Firestore database
 * @returns {Promise<ProjectType[]>} projectsList
 */
export async function fetchProjects() {
  const projectsCollection = collection(db, "projects");
  const projectsSnapshot = await getDocs(projectsCollection);
  const projectsList = projectsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return projectsList;
}
