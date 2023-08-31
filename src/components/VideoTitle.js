import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold mx-2">{title}</h1>
      <p className="py-6 text-lg w-1/4 hidden md:block">{overview}</p>
      <div className="my-4 md:m-0">
        <button className=" bg-white text-black p-2 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="mx-2  bg-gray-500 text-white p-2 md:p-4  md:px-12  text-xl md:text-xl bg-opacity-50 rounded-lg">
           More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
