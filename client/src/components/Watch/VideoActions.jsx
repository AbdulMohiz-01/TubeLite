import PropTypes from "prop-types";
import ActionButton from "./ActionButton.jsx";
import { ThumbsUp, ThumbsDown, Share2, ArrowDownToLine } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { actions } from "../../Service/usersApi.js";
import { useDispatch, useSelector } from "react-redux";
import {
  like,
  dislike,
  incrementSubscribers,
  decrementSubscribers,
} from "../../redux/slices/videoSlice.js";
import { subscription } from "../../redux/slices/userSlice.js";

const VideoActions = ({ channelName, channelImg, currentUser }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const video = useSelector((state) => state.video.currentVideo);

  const handleLike = () => {
    if (currentUser) {
      actions("like", video._id);
      dispatch(like(currentUser._id));
    } else {
      navigate("/signup");
    }
  };

  const handleDislike = () => {
    if (currentUser) {
      actions("dislike", video._id);
      dispatch(dislike(currentUser._id));
    } else {
      navigate("/signup");
    }
  };

  const handleSubscribe = () => {
    if (currentUser) {
      if (!currentUser?.subscribedUsers.includes(video.user._id)) {
        actions("sub", video.user._id);
        dispatch(subscription(video.user._id));
        dispatch(incrementSubscribers());
      } else {
        actions("unsub", video.user._id);
        dispatch(subscription(video.user._id));
        dispatch(decrementSubscribers());
      }
    } else {
      navigate("/signup");
    }
  };

  return (
    <>
      {/* Video info */}
      <div className="flex flex-col gap-3">
        <h1 className="text-white text-xl font-medium">{video.title}</h1>
        <div className="flex flex-row items-center justify-between gap-1">
          {/* channel info */}
          <div className="flex flex-row gap-4">
            <img
              src={channelImg}
              alt="channel logo"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className=" text-white font-medium">{channelName}</h2>
              <p className="text-gray-500 text-sm">
                {video.user.subscribers} subscribers
              </p>
            </div>
            <button
              className="bg-white text-black px-6 rounded-full flex items-center"
              onClick={handleSubscribe}
            >
              {currentUser?.subscribedUsers.includes(video.user._id)
                ? "Subscribed"
                : "Subscribe"}
            </button>
          </div>
          {/* actions */}
          <div className="flex justify-around gap-4">
            {/* joint like dislike buttons */}
            <div className="flex flex-row gap-2 bg-gray-1000 px-4 py-2 items-center rounded-full">
              <ActionButton
                Icon={ThumbsUp}
                text={video.likes.length}
                onClick={handleLike}
                isLiked={video.likes.includes(currentUser._id)}
              />
              <span className="text-gray-500">|</span>
              <ActionButton
                Icon={ThumbsDown}
                text={video.dislikes.length}
                onClick={handleDislike}
                isLiked={video.dislikes.includes(currentUser._id)}
              />
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
  channelName: PropTypes.string.isRequired,
  channelImg: PropTypes.string.isRequired,
  channelSubs: PropTypes.string.isRequired,
  currentUser: PropTypes.object,
};
