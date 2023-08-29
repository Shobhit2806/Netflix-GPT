import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movie_id) => {
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/" +
      movie_id +
      "/videos?language=en-US";
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();

    const filterData = json.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData?.length ? filterData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
