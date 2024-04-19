import React from 'react'
import { useSelector } from 'react-redux'
import Title from './Title';
import Background from './Background';
const MainContainer = () => {
    const movies =useSelector((store) => store.movies.NowPlayingMovies);
    
   if(movies===null) return ;
   const mainMovie=movies[0];
   const {original_title,overview}=mainMovie;
  return (
    <div>
        <Title original_title={original_title} overview={overview}/>
        <Background />
    </div>
  )
}

export default MainContainer 
