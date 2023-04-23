import { useEffect, useState } from "react";
import { getGifs, gifApi } from "../servicios/getGifs";


export const useFetchGifs = ( category: string ) => {
    const [images, setImages] = useState<gifApi[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      getImages();
    }, []);
  
    const getImages = async() => {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
    }

    return {
        images,
        isLoading
    }
}