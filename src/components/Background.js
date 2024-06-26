import React from 'react'
import { useSelector } from 'react-redux';
import useTrailerVideo from '../hooks/useTrailerVideo';

const Background = ({movieId}) => {
  const trailerVideo=useSelector((store)=>store.movies?.trailerVideo);
  useTrailerVideo(movieId);
  return (
    <div className='w-screen'>

      <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+ trailerVideo?.key +"?&autoplay=1&mute=1"}
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
      referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  );
};

export default Background