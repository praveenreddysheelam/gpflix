import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'

export const Browse = () => {
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTrendingMovies();
  return (
    <div >
        <Header/>
        {showGptSearch ? (<GPTSearch /> ) : (<>
        <MainContainer />
        <SecondaryContainer />
        </>) }
    </div>
  )
}
