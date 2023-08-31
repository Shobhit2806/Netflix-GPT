import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { NETFLIX_BG_IMG } from "../utils/constants";

const GPTSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img className="h-screen object-cover md:w-screen" src={NETFLIX_BG_IMG} alt="background" />
      </div>
      <div className="pt-[25%] md:pt-0">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </div>
  );
};

export default GPTSearchPage;
