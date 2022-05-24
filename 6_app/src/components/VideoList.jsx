import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  // we can also write ({videos}) in order to unpack them and refer with just videos and not props.videos evrytime

  const renderedList = props.videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={props.onVideoSelect}
        video={video}
      />
    );
  });

  return (
    <div>
      <h3
        style={{
          visibility: `${props.isVisible}`,
        }}>
        <p style={{ paddingTop: "10px" }}>
          {" "}
          Trovati {props.videos.length} video:
        </p>
      </h3>
      <div className="ui relaxed divided list"> {renderedList} </div>
    </div>
  );
};

export default VideoList;
