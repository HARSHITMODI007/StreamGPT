import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../Utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";

const useTopRatedMovies =() => {
const dispatch = useDispatch();
const getTopRatedMovies = async () => {
  const data = await fetch("https://api.themoviedb.org/3/movie/top_rated",API_OPTIONS );
  const json = await data.json();
  console.log("TopRated",json);
  dispatch(addTopRatedMovies(json.results))

}
useEffect(() => {
  getTopRatedMovies();
 
},[]);
};

export default useTopRatedMovies;