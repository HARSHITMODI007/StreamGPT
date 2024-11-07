import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const Secondarycontainer = () => {
  const movies = useSelector(store => store.movies)
  return (
    movies && (
    <div className='bg-black' >
      <div className='-mt-40 relative'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.PopularMovies}/>
      <MovieList title={"Trending"} movies={movies.TrendingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.TopRatedMovies}/>
      <MovieList title={"Upcoming"} movies={movies.UpcomingMovies}/>
      </div>
    </div>
  ))
}

export default Secondarycontainer
