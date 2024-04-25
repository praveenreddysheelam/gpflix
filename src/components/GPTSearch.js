import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GPTSearch = () => {
  return (
    <>
    <div>
    <div className="absolute  -z-10">
        <img className=" object-cover" src={BG_URL} alt="logo" />
      </div>
    </div>
    <div className=''>
        <GPTSearchBar/>
        <GPTMovieSuggestions />
    </div>
    </>
  )
}

export default GPTSearch