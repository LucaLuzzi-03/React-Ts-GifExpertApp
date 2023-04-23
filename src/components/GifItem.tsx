import React from 'react'
import { gifApi } from '../servicios/getGifs'

export const GifItem = ({ title, url }: gifApi) => {
  return (
    <div className='card'>
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}
