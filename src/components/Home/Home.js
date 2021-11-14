import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MovieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import { addMovie } from "../../features/movies/movieSlice";
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?apikey=${APIKey}&s=${movieText}&type=movie`
      ).catch((error) => {
        console.log("error: ", error);
      }).then((response) => {
        
      console.log("API Response: ", response);
      dispatch(addMovie(response.data));
      });
    };
    fetchMovies();
  }, [dispatch]);
  return (
    <div>
      <div className="banner-image"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
