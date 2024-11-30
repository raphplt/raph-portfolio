import { getStorage, ref, getDownloadURL } from "firebase/storage";

const storage = getStorage();
const imageRef = ref(storage, "melios.jpg");

getDownloadURL(imageRef)
  .then((url) => {
    console.log("URL de l'image :", url);
    // Utilise cette URL pour afficher l'image dans ton application
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération de l'URL :", error);
  });
