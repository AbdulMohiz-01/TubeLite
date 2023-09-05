import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { findUser } from "../../Service/usersApi.js";
import { format } from "timeago.js";
import numeral from "numeral"; // Import numeral

const Cards = ({ video }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await findUser(video.userId);
        setChannel(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, [video.userId]);

  // Format views using numeral
  const formattedViews = numeral(video.views).format("0a").toUpperCase();

  return (
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
            src={channel.img}
            alt="Channel Avatar"
            className="w-8 h-8 rounded-full"
          />
          <div className="flex flex-col">
            <h3 className="text-white text-md line-clamp-2">{video.title}</h3>
            <p className="text-gray-500 text-sm">{channel.name}</p>
            <p className="text-gray-500 text-sm">
              {formattedViews} views • {format(video.createdAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  video: PropTypes.object.isRequired,
};

export default Cards;
