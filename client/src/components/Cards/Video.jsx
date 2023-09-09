import PropTypes from "prop-types";
import { format } from "timeago.js";
import numeral from "numeral"; // Import numeral

const Cards = ({ video }) => {
  // console.log(results.data);

  // Format views using numeral
  const formattedViews = numeral(video.views).format("0a").toUpperCase();

  // useEffect(() => {
  //   if (results.data) setChannel(results.data);
  // }, [results.data]);

  return (
    <>
      <div className="overflow-hidden">
        {/* Video Thumbnail */}
        <div className="relative bg-gray-1000 rounded-xl">
          <img
            src={video.thumbnail}
            alt="Video Thumbnail"
            className="w-full h-48 object-cover rounded-xl"
          />
        </div>

        {/* Video Information */}
        <div className="p-2">
          <div className="flex gap-2">
            <img
              src={video.user.img}
              alt="Channel Avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col">
              <h3 className="text-white text-md line-clamp-2">{video.title}</h3>
              <p className="text-gray-500 text-sm">{video.user.name}</p>
              <p className="text-gray-500 text-sm">
                {formattedViews} views • {format(video.createdAt)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Cards.propTypes = {
  video: PropTypes.object.isRequired,
};

export default Cards;
