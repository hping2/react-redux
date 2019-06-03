import React from 'react';
import './VideoItem.css'
;
// A short cut using {video} instead of 'props'
// you get this structure from debug.
const VideoItem = ({ video, onVideoSelect }) => {
  console.log(video);

  return (
    <div onClick={() => {onVideoSelect(video)}} className="video-item item">
      <img className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  )
};

export default VideoItem;
