import React, { useEffect } from 'react'
import { API_OPTIONS } from '../Utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../Utils/movieSlice';
import useMovieTrailer from '../Hooks/useMovieTrailer';

const Videobackgorund = (props) => {
   //destructuring props array
   const{movie_id} =props;
   //to see the trailer from the centralstore
   useMovieTrailer(movie_id);
   const trailerVideo = useSelector(store=>store.movies?.trailerVideo)
    
  return (
    <div className='w-full'>
      
      <iframe 
      className='w-screen aspect-video'
      src={"https://www.youtube.com/embed/" +trailerVideo?.key+"?&autoplay=1&mute=1"}
      title="YouTube video player" 
      
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowfullscreen></iframe>
    </div>
  )
}

export default Videobackgorund
//aspect-video sets the dimensions as 16:9