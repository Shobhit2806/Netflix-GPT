import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div>
        <img className="w-48 pr-4 max-w-fit" alt="Movie Card" src={IMG_CDN_URL+posterPath}/>
    </div>
  )
}

export default MovieCard