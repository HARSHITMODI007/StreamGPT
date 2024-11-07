import React from 'react'
import { useSelector } from 'react-redux'
import Videotitle from './VIdeotitle';
import Videobackgorund from './Videobackgorund';

const Maincontainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies) 
    if (movies===null) return;
    const mainMovie = movies[4];
    console.log(mainMovie)

    const {original_title,overview,id} = mainMovie;
  return (
    <div>
    <Videotitle title = {original_title} overview ={overview}/>
    <Videobackgorund movie_id={id}/>
    </div>
  )
}

export default Maincontainer;
