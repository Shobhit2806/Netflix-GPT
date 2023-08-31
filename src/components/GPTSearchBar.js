import React, { useRef } from "react";
import openai from "../utils/openai";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
const GPTSearchBar = () => {
  const langVal = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  console.log(searchText);
  const dispatch = useDispatch();
  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      

      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGPTSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText?.current?.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    console.log(searchText?.current?.value);
    // Make an api call to gpt api
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // For each movie I will search TMDB API

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="flex justify-center pt-[10%] rounded-lg">
      <form
        className="bg-black grid grid-cols-12 w-1/2 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9 rounded-lg text-lg"
          type="text"
          placeholder={lang[langVal].gptSearchPlaceholder}
        />
        <button
          className="text-white bg-red-700 col-span-3 m-4 px-4 py-2 rounded-lg text-lg"
          onClick={handleGPTSearchClick}
        >
          {lang[langVal].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
