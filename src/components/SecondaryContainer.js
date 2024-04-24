import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies);
  return (
    <div className=' bg-black'>
      <div className='-mt-52 relative pl-5 z-20'>
      <MovieList title="Now Playing" movies={movies.NowPlayingMovies} />
      <MovieList title="Trending" movies={movies.TrendingMovies} />
      <MovieList title="Top Rated" movies={movies.TopRatedMovies} />
      <MovieList title="Popular" movies={movies.PopularMovies} />
      <MovieList title="Upcoming" movies={movies.UpComingMovies} />
      </div>
    </div>
  )
}
export default SecondaryContainer;