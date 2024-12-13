'use client';

import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { FaPlay } from 'react-icons/fa';  

export default function YoutubeVideo() {
  const [isPlaying, setIsPlaying] = useState(false);  

  const opts = {
    playerVars: {
      autoplay: 1,  
    },
  };

  const handleVideoClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative z-[10]  bg-gradient-to-b from-black via-gray-900 to-gray-900 flex flex-col gap-6 justify-center items-center py-10">
      <div className="text-center text-3xl md:text-5xl text-white p-4">
        <h1>What would you like to learn today?</h1>
      </div>

      <div className="relative w-full max-w-lg md:max-w-2xl lg:max-w-3xl" style={{ aspectRatio: '16/9' }}>
        {!isPlaying ? (
          <div className="relative cursor-pointer" onClick={handleVideoClick}>
            <img
              src="/assets/Demo/youtube.jpg"
              alt="Play video"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="bg-white text-black p-4 rounded-full">
                <FaPlay className="h-8 w-8" />
              </div>
            </div>
          </div>
        ) : (
          <YouTube
            videoId="8llyUyGxrT4"
            opts={{
              ...opts,
              width: '100%',
              height: '100%',
            }}
            className="w-full h-full rounded-lg"
            onReady={_onReady}
          />
        )}
      </div>

    </div>
  );

  function _onReady(event) {
    event.target.playVideo();
  }
}