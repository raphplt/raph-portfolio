import React, { useEffect, useState } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import Image from "next/image";

const generateCacheKey = (url: string) => `MeliosImageUrl_${btoa(url)}`;

const ProjectImage = ({ url }: { url: string }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const cacheKey = generateCacheKey(url);
    const cachedUrl = localStorage.getItem(cacheKey);

    if (cachedUrl) {
      setImageUrl(cachedUrl);
    } else {
      const storage = getStorage();
      const imageRef = ref(storage, url);

      getDownloadURL(imageRef)
        .then((url) => {
          setImageUrl(url);
          localStorage.setItem(cacheKey, url);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération de l'URL :", error);
        });
    }
  }, [url]);

  return (
    <div>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Project image"
          width={1000}
          height={500}
          className="rounded-xl border w-96"
        />
      ) : (
        "Chargement..."
      )}
    </div>
  );
};

export default ProjectImage;
