import PropTypes from "prop-types";
import { format } from "timeago.js";
import numeral from "numeral"; // Import numeral
import { useNavigate } from "react-router-dom";

const Cards = ({ video }) => {
  const formattedViews = numeral(video.views).format("0a").toUpperCase();
  const navigate = useNavigate();

  const hangleClick = () => {
    navigate(`/watch/${video._id}`);
  };

  return (
    <>
      <button className="overflow-hidden w-full" onClick={hangleClick}>
        {/* Video Thumbnail */}
        <div className="relative bg-gray-1000 rounded-2xl">
          <img
            src={video.thumbnail}
            alt="Video Thumbnail"
            className="w-full h-44 object-cover rounded-2xl"
          />
        </div>

        {/* Video Information */}
        <div className="p-2 flex gap-2">
          <img
            src={video.user.img}
            alt="Channel Avatar"
            className="w-8 h-8 rounded-full"
          />
          <div className="flex flex-col items-start justify-start">
            <h3 className="text-white text-sm line-clamp-2 text-left">
              {video.title}
            </h3>
            <p className="text-gray-400 text-xs">{video.user.name}</p>
            <p className="text-gray-400 text-xs">
              {formattedViews} views • {format(video.createdAt)}
            </p>
          </div>
        </div>
      </button>
    </>
  );
};

Cards.propTypes = {
  video: PropTypes.object.isRequired,
};

export default Cards;
