import PropTypes from "prop-types";
import ActionButton from "./ActionButton.jsx";
import { ThumbsUp, ThumbsDown, Share2, ArrowDownToLine } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VideoActions = ({
  title,
  channelName,
  channelImg,
  channelSubs,
  likes,
  dislikes,
  currentUser,
}) => {
  const navigate = useNavigate();
  const handleLike = () => {};

  return (
    <>
      {/* Video info */}
      <div className="flex flex-col gap-3">
        <h1 className="text-white text-xl font-bold">{title}</h1>
        <div className="flex flex-row items-center justify-between gap-1">
          {/* channel info */}
          <div className="flex flex-row gap-4">
            <img
              src={channelImg}
              alt="channel logo"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="font-bold text-white">{channelName}</h2>
              <p className="text-gray-500 text-sm">{channelSubs} subscribers</p>
            </div>
            <button className="bg-white text-black px-6 rounded-full flex items-center">
              <span className="text-sm font-semibold">SUBSCRIBE</span>
            </button>
          </div>
          {/* actions */}
          <div className="flex justify-around gap-4">
            {/* joint like dislike buttons */}
            <div className="flex flex-row gap-2 bg-gray-1000 px-4 py-2 items-center rounded-full">
              <ActionButton
                Icon={ThumbsUp}
                text={likes.length}
                onClick={handleLike}
                isLiked={likes.includes(currentUser._id)}
              />
              <span className="text-gray-500">|</span>
              <ActionButton Icon={ThumbsDown} text={dislikes.length} />
            </div>

            {/* share button */}
            <div className="bg-gray-1000 px-4 py-2 rounded-full">
              <ActionButton Icon={Share2} text="Share" />
            </div>

            {/* download button */}
            <div className="bg-gray-1000 px-4 py-2 rounded-full">
              <ActionButton Icon={ArrowDownToLine} text="Download" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoActions;

VideoActions.propTypes = {
  title: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  channelImg: PropTypes.string.isRequired,
  channelSubs: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired,
  dislikes: PropTypes.string.isRequired,
  currentUser: PropTypes.object,
};
