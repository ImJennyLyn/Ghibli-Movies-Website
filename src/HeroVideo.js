// src/pages/HeroVideo.jsx
import React from 'react';
import ReactPlayer from 'react-player';

function HeroVideo() {
  return (
    <div className="hero-video">
      <ReactPlayer url="https://www.youtube.com/watch?v=4bG17OYs-GA" playing muted width="100%" height="100%" />
    </div>
  );
}

export default HeroVideo;
