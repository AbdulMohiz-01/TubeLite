import { ThumbsUp, ThumbsDown, Reply } from "lucide-react";

const Comment = () => {
  return (
    <div className="flex flex-col w-full">
      {/* user profile */}
      <div className="flex gap-3">
        <div className="flex flex-row">
          <img
            src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="channel logo"
            className="w-12 h-12 rounded-full"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <div className="flex flex-row justify-start items-center gap-2">
            <h3 className="text-white text-md font-semibold">Gamer</h3>
            <span className="text-gray-400 text-sm">1 day ago</span>
          </div>
          <p className="text-gray-400 text-md">
            This is the best video I have ever watched.
          </p>
        </div>
      </div>

      {/* actions */}
      <div className="flex flex-row ">
        <button className="comment-actions">
          <ThumbsUp size={24} />
          <span className="text-white text-md">99</span>
        </button>
        <button className="comment-actions">
          <ThumbsDown size={24} />
          <span className="text-white text-md">999</span>
        </button>
        <button className="comment-actions">
          <Reply size={24} />
          <span className="text-blue-vivid text-s">reply</span>
        </button>
      </div>
    </div>
  );
};

export default Comment;
