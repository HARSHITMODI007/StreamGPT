import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/UseNowPlayingMovies'
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import useTrendingMovies from '../Hooks/useTrendingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTrendingMovies();
 
  return (
    <div>
      <Header/>
      {
        showGptSearch? (
        <GptSearch/>
      ):(
        <>
        <Maincontainer/>
        <Secondarycontainer/>
        </>
      )
      }
    </div>
  )
}

export default Browse
