import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";

const usePopularMovies =() => {
const dispatch = useDispatch();
const getPopularMovies = async () => {
  const data = await fetch("https://api.themoviedb.org/3/movie/popular",API_OPTIONS );
  const json = await data.json();
  console.log("20 movies",json);
  dispatch(addPopularMovies(json.results))

}
useEffect(() => {
  getPopularMovies();
 
},[]);
};

export default usePopularMovies;