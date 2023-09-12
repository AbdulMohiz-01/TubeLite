import PropTypes from "prop-types";
import numeral from "numeral";
import { format } from "timeago.js";

const VideoDescription = ({ views, timeAgo, tags, description }) => {
  return (
    <>
      {/* Video Description */}
      <div className="w-full bg-gray-1000 min-h-min overflow-y-scroll custom-scrollbar rounded-xl p-2">
        {/* views time and tags section */}
        <div className="flex justify-start items-center gap-1 font-sans font-semibold w-full">
          <span className="text-white text-s ">
            {numeral(views).format("0a").toUpperCase()} views
          </span>
          <span className="text-white text-s">•</span>

          <span className="text-white text-s">{format(timeAgo)}</span>
          <div className="flex gap-2 ml-3">
            {tags?.map((tag, index) => (
              <span key={index} className="text-white text-s">
                {`#`}
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* description section */}
        <div className="p-2 justify-evenly">
          <p className="text-white text-md">{description}</p>
        </div>
      </div>
    </>
  );
};

VideoDescription.propTypes = {
  views: PropTypes.string.isRequired,
  timeAgo: PropTypes.string.isRequired,
  tags: PropTypes.array,
  description: PropTypes.string.isRequired,
};

export default VideoDescription;
