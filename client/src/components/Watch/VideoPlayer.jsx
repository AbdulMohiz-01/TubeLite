import { Media, Video } from "@vidstack/player-react";
import PropTypes from "prop-types";

export default function VideoPlayer({ sourceURL, thumbnail }) {
  const videoStyle = {
    width: "100%", // Set the width to 100% to make it responsive
    height: "570px", // Let the height adjust based on the aspect ratio
    backgroundColor: "black",
    border: "none",
  };

  return (
    <Media>
      <Video
        loading="visible"
        poster={thumbnail}
        controls
        preload="true"
        style={videoStyle} // Apply the inline styles to the Video component
      >
        <video
          loading="visible"
          poster={thumbnail}
          src={sourceURL}
          preload="none"
          data-video="0"
          controls
          style={videoStyle} // Apply the same styles to the inner video element
        />
      </Video>
    </Media>
  );
}

VideoPlayer.propTypes = {
  sourceURL: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
};
