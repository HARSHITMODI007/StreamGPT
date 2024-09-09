import React, { useEffect } from 'react'
import { addTrailerVideo } from '../Utils/movieSlice';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../Utils/constants';

const useMovieTrailer = (movie_id) => {
    //dispatch an action to add trailer in redux store
  const dispatch =useDispatch();
  //to see the trailer from the centralstore
  const trailerVideo = useSelector(store=>store.movies?.trailerVideo)
 
  
  //lets make the api call & fetch the trailer
  const GetMovieVideos = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/'+
        movie_id+
        '/videos',API_OPTIONS)
    const json = await data.json()
    //will return many videos associated with movies but we only want the trailer to be showcased so
    console.log("Movie Videos",json)
    //filter method on array results to filter out the trailer object
    const filterdata = json.results.filter(video=>video.type==="Trailer")
    //can have multiple trailors
    const trailer = filterdata.length?filterdata[1]:json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));


  }
  //calling the api inside useEffect hook
  useEffect(()=>{
   GetMovieVideos()
  },[])
  

}

export default useMovieTrailer
