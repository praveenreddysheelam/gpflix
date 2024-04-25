import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-44 pr-4'>
        <img alt='NOT FOUND' src={IMG_CDN+posterPath} />

    </div>
  )
}

export default MovieCard