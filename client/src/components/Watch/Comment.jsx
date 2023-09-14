import PropTypes from "prop-types";
import { ThumbsUp, ThumbsDown, Reply, Loader } from "lucide-react";
import ActionButton from "./ActionButton";
import { format } from "timeago.js";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { findUser } from "../../Service/usersApi";

const Comment = ({ userId, description, timeAgo, likes, dislikes }) => {
  const [owner, setOwner] = useState(null);
  const { isLoading } = useQuery([description, userId], findUser, {
    onSuccess: (data) => {
      setOwner(data);
    },
  });

  if (isLoading) {
    return (
      <>
        <Loader color="white" />
      </>
    );
  }

  return (
    <div className="flex flex-col w-full">
      {/* user profile */}
      <div className="flex gap-3">
        <div className="flex flex-row">
          <img
            src={owner.img}
            alt="channel logo"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <div className="flex flex-row justify-start items-center gap-2">
            <h3 className="text-white text-md font-medium">{owner.name}</h3>
            <span className="text-gray-400 text-sm">{format(timeAgo)}</span>
          </div>
          <p className="text-gray-400 text-md">{description}</p>
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
