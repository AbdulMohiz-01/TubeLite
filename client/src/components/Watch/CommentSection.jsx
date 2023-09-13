import { useState } from "react";
import { Send } from "lucide-react";
import Comment from "./Comment";
import { useSelector } from "react-redux";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getCommentsByVideoId, postComment } from "../../Service/commentsApi";
import Loading from "../Loading";

const CommentSection = () => {
  const [input, setInput] = useState("");
  const [comments, setComments] = useState([]); // [comment1, comment2, ...]
  const [disabled, setDisabled] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  const video = useSelector((state) => state.video.currentVideo);
  const { isLoading } = useQuery(
    ["comments", video._id],
    getCommentsByVideoId,
    {
      onSuccess: (data) => {
        setComments(data);
      },
    },
  );

  const commentMutation = useMutation(postComment, {
    onSuccess: (data) => {
      setComments((prev) => [...prev, data]);
      setInput("");
      setDisabled(false);
    },
    onLoading: () => {
      setDisabled(true);
    },
  });

  const handleAddComment = () => {
    // add comment to db
    commentMutation.mutate({
      text: input,
      videoId: video._id,
    });
  };

  if (isLoading)
    return (
      <>
        <div className="w-full flex justify-center items-center">
          <Loading />
          <p className="text-white text-md">Loading...</p>
        </div>
      </>
    );

  return (
    <>
      {/* Video comments section */}
      <div className="flex flex-col gap-4 justify-start">
        {/* no of comments */}
        <div className="flex justify-start items-center gap-3 font-semibold w-full">
          <span className="text-gray-500 font-normal text-s">
            {" "}
            {comments.length || 0} comments
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
              <button
                className="bg-background text-black px-2 py-0 flex items-center justify-center rounded-full group-focus:border-b-2"
                onClick={handleAddComment}
                disabled={disabled}
              >
                <Send size={24} color="white" />
              </button>
            )}
          </div>
        </div>

        {/* all comments */}
        <div className="flex flex-col gap-4 justify-start">
          {comments.length !== 0 ? (
            comments.map((comment) => (
              <Comment
                key={comment._id} // Use a unique identifier like _id as the key
                userId={comment.userId} // Access the userId using comment.userId
                description={comment.desc} // Access the comment text using comment.desc
                timeAgo={comment.updatedAt} // Access the updatedAt property of the comment
              />
            ))
          ) : (
            <p className="text-white text-md">No comments yet</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CommentSection;
