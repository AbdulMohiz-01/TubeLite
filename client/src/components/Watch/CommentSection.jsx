import PropTypes from "prop-types";
import { useState } from "react";
import { Send } from "lucide-react";
import Comment from "./Comment";
import { useSelector } from "react-redux";

const CommentSection = ({ noOfComments, channelImg, comments }) => {
  const [input, setInput] = useState("");
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <>
      {/* Video comments section */}
      <div className="flex flex-col gap-4 justify-start">
        {/* no of comments */}
        <div className="flex justify-start items-center gap-3 font-semibold w-full">
          <span className="text-gray-500 font-normal text-s">
            {" "}
            {noOfComments} comments
          </span>
        </div>

        {/* comment input */}
        <div className="flex flex-row justify-start items-center gap-3 font-semibold w-full">
          {/* user profile */}
          <div className="flex flex-row gap-4">
            <img
              src={currentUser.img}
              alt={currentUser.name + " profile"}
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div className="flex w-full group">
            <input
              className="w-full bg-background text-white p-2 text-s font-normal outline-none focus:border-b-2 focus:border-b-blue-vivid"
              placeholder="Add a public comment..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            {input && ( // Render the button only if input is not empty
              <button className="bg-background text-black px-2 py-0 flex items-center bg-gradient-to-t from-blue-vivid to-blue-700 transition-all duration-300">
                <Send size={24} color="white" />
              </button>
            )}
          </div>
        </div>

        {/* all comments */}
        <div className="flex flex-col gap-4 justify-start">
          {/* sample comment */}
          {comments ? (
            comments?.map((comment, index) => (
              <Comment key={index} channelImg={channelImg} comment={comment} />
            ))
          ) : (
            <p className="text-white text-md">No comments yet</p>
          )}
        </div>
      </div>
    </>
  );
};

CommentSection.propTypes = {
  noOfComments: PropTypes.string.isRequired,
  channelImg: PropTypes.string.isRequired,
  comments: PropTypes.array,
};

export default CommentSection;
