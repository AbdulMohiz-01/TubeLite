import PropTypes from "prop-types";
import numeral from "numeral";
import { format } from "timeago.js";
import { useSelector, useDispatch } from "react-redux";

const VideoDescription = () => {
  const video = useSelector((state) => state.video.currentVideo);
  return (
    <>
      {/* Video Description */}
      <div className="w-full bg-gray-1000 min-h-min overflow-y-scroll custom-scrollbar rounded-xl p-2">
        {/* views time and tags section */}
        <div className="flex justify-start items-center gap-1 font-sans font-semibold w-full">
          <span className="text-white text-sm">
            {numeral(video.views).format("0a").toUpperCase()} views
          </span>
          <span className="text-white text-sm">•</span>

          <span className="text-white text-sm">{format(video.createdAt)}</span>
          <div className="flex gap-2 ml-3 text-xs">
            {video.tags?.map((tag, index) => (
              <span key={index} className="text-white text-s">
                {`#`}
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* description section */}
        <div className="p-2 justify-evenly">
          <p className="text-white text-sm">{video.desc}</p>
        </div>
      </div>
    </>
  );
};

export default VideoDescription;
