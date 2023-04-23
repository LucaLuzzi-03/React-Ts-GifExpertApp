import { Gif } from "../interfaces/Gifs";

export interface gifApi {
    id: string;
    title: string;
    url: string;
}

export const getGifs = async( category: string ): Promise<gifApi[]> => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=zXO5ZlHouXmHm8Sb7goH6raqDlCLFrn6&q=${ category }&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const dataDefinida: Gif[] = data; 

    const gifs = dataDefinida.map( (img: Gif) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));

    return gifs;
}