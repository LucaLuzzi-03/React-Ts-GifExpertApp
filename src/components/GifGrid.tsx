import React, { useEffect, useState } from 'react'
import { getGifs, gifApi } from '../servicios/getGifs';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../customHooks/useFetchGifs';


interface Props {
    category: string
}

export const GifGrid = ({category}: Props) => {

  const { images, isLoading } = useFetchGifs( category );
  
  return (
    <>
        <h3>{ category }</h3>

        {
          isLoading 
            ? (<h2>Loading...</h2>)
            : (<div className='card-grid'>
                {
                  images.map( ( image ) => (
                    <GifItem key={ image.id } { ...image } />
                  ) )
                }
              </div>)
        }
    </>
  )
}
