import PropTypes from "prop-types";
import { ThumbsUp, ThumbsDown, Reply, Loader } from "lucide-react";
import ActionButton from "./ActionButton";
import { format } from "timeago.js";
import { useQuery } from "@tanstack/react-query";
import { useState, useId } from "react";
import { findUser } from "../../Service/usersApi";

const Comment = ({ userId, description, timeAgo, likes, dislikes }) => {
  const [owner, setOwner] = useState(null);
  const id = useId();
  const { isLoading } = useQuery([id, userId], findUser, {
    onSuccess: (data) => {
      setOwner(data);
    },
  });

  if (isLoading) {
    return null;
  }

  return (
    <div className="flex flex-col w-full">
      {/* user profile */}
      <div className="flex gap-3">
        <div className="flex flex-row">
          <img
            src={owner.img}
            alt="channel logo"
            className="w-8 h-8 rounded-full"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <div className="flex flex-row justify-start items-center gap-2">
            <h3 className="text-white text-sm font-normal">{owner.name}</h3>
            <span className="text-gray-400 text-xs">{format(timeAgo)}</span>
          </div>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>

      {/* actions */}
      <div className="flex flex-row ">
        <ActionButton Icon={ThumbsUp} text={likes} flag={false} />
        <ActionButton Icon={ThumbsDown} text={dislikes} flag={false} />
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
