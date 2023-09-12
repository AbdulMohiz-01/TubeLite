import PropTypes from "prop-types";
import { ThumbsUp, ThumbsDown, Reply } from "lucide-react";
import ActionButton from "./ActionButton";

const Comment = ({ channelImg, channelName, description, timeAgo }) => {
  return (
    <div className="flex flex-col w-full">
      {/* user profile */}
      <div className="flex gap-3">
        <div className="flex flex-row">
          <img
            src={channelImg}
            alt="channel logo"
            className="w-12 h-12 rounded-full"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <div className="flex flex-row justify-start items-center gap-2">
            <h3 className="text-white text-md font-semibold">{channelName}</h3>
            <span className="text-gray-400 text-sm">{timeAgo}</span>
          </div>
          <p className="text-gray-400 text-md">{description}</p>
        </div>
      </div>

      {/* actions */}
      <div className="flex flex-row ">
        <ActionButton Icon={ThumbsUp} text="99" flag={false} />
        <ActionButton Icon={ThumbsDown} text="999" flag={false} />
        <ActionButton Icon={Reply} text="reply" flag={false} />
      </div>
    </div>
  );
};

Comment.propTypes = {
  channelImg: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  timeAgo: PropTypes.string.isRequired,
};

export default Comment;
