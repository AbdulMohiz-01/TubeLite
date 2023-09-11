import { Navbar } from "../components";
import {
  ThumbsUp,
  ThumbsDown,
  Share2,
  ArrowDownToLine,
  Send,
  Reply,
} from "lucide-react";
import RecommendVideo from "../components/Cards/RecommendVideo";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getVideoById } from "../Service/videosApi";
import Loading from "../components/Loading";
import numeral from "numeral";
import { format } from "timeago.js";

const Watch = () => {
  const { video_id } = useParams();
  const [video, setVideo] = useState(null);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState(null);

  const { isLoading } = useQuery(["watch", video_id], getVideoById, {
    onSuccess: (data) => {
      const { userId, comments, ...videos } = data;
      setUser(userId);
      setVideo(videos);
      setComments(comments);
    },
  });

  if (isLoading)
    return (
      <>
        <div className=" h-screen w-full flex justify-center items-center">
          <Loading />
        </div>
      </>
    );
  return (
    <>
      <Navbar />
      <main className="flex gap-4 min-h-min mx-12 my-6 mt-[4.5rem]">
        {/* Video section */}
        <section className="flex flex-col gap-3 w-7/10">
          <VideoPlayer sourceURL={video.videoUrl} />
          <VideoActions
            title={video.title}
            channelImg={user.img}
            channelSubs={user.subscribers}
            channelName={user.name}
            likes={video.likes}
            dislikes={video.dislikes}
          />
          {/*  views, timeAgo, tags, description */}
          <VideoDescription
            views={video.views}
            tags={video.tags}
            timeAgo={video.createdAt}
            description={video.desc}
          />
          <CommentSection
            noOfComments={comments.length}
            channelImg={user.img}
            comments={comments}
          />
        </section>

        {/* Recommendation section */}
        <section className="flex flex-col gap-4 w-3/10">
          <h2 className="text-white text-xl font-bold">Recommended</h2>
          {/* Recommended videos */}
          <div className="flex flex-col gap-4">
            {/* Sample recommended video */}
            <RecommendVideo />
            <RecommendVideo />
            <RecommendVideo />
            <RecommendVideo />
            {/* Repeat this structure for more recommended videos */}
          </div>
        </section>
      </main>
    </>
  );
};

export default Watch;

import { Media, Video } from "@vidstack/player-react";

export function VideoPlayer({ sourceURL }) {
  return (
    <Media>
      <Video
        loading="visible"
        poster="https://media-files.vidstack.io/poster.png"
        controls
        preload="true"
      >
        <video
          loading="visible"
          poster="https://media-files.vidstack.io/poster-seo.png"
          src={sourceURL}
          preload="none"
          data-video="0"
          controls
        />
      </Video>
    </Media>
  );
}

VideoPlayer.propTypes = {
  sourceURL: PropTypes.string.isRequired,
};

const VideoActions = ({
  title,
  channelName,
  channelImg,
  channelSubs,
  likes,
  dislikes,
}) => {
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
              <ActionButton Icon={ThumbsUp} text={likes.length} />
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

VideoActions.propTypes = {
  title: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  channelImg: PropTypes.string.isRequired,
  channelSubs: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired,
  dislikes: PropTypes.string.isRequired,
};

const ActionButton = ({ Icon, text, flag = true }) => {
  const classNames = clsx(
    flag ? "flex items-center gap-1 text-white" : "comment-actions",
  );
  return (
    <>
      <button className={classNames}>
        <Icon size={20} />
        <span>{text}</span>
      </button>
    </>
  );
};

ActionButton.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
  flag: PropTypes.bool,
};

const VideoDescription = ({ views, timeAgo, tags, description }) => {
  return (
    <>
      {/* Video Description */}
      <div className="w-full bg-gray-1000 min-h-min overflow-y-scroll custom-scrollbar rounded-xl p-2">
        {/* views time and tags section */}
        <div className="flex justify-start items-center gap-1 font-sans font-semibold w-full">
          <span className="text-white text-s ">
            {numeral(views).format("0a").toUpperCase()} views
          </span>
          <span className="text-white text-s">•</span>

          <span className="text-white text-s">{format(timeAgo)}</span>
          <div className="flex gap-2 ml-3">
            {tags?.map((tag, index) => (
              <span key={index} className="text-white text-s">
                {`#`}
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* description section */}
        <div className="p-2 justify-evenly">
          <p className="text-white text-md">{description}</p>
        </div>
      </div>
    </>
  );
};

VideoDescription.propTypes = {
  views: PropTypes.string.isRequired,
  timeAgo: PropTypes.string.isRequired,
  tags: PropTypes.array,
  description: PropTypes.string.isRequired,
};

const CommentSection = ({ noOfComments, channelImg, comments }) => {
  return (
    <>
      {/* Video comments section */}
      <div className="flex flex-col gap-4 justify-start">
        {/* no of comments */}
        <div className="flex justify-start items-center gap-3 font-semibold w-full">
          <span className="text-white text-md"> {noOfComments} Comments</span>
        </div>

        {/* comment input */}
        <div className="flex flex-row justify-start items-center gap-3 font-semibold w-full">
          {/* user profile */}
          <div className="flex flex-row gap-4">
            <img
              src={channelImg}
              alt="channel logo"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="flex w-full">
            <input
              className="w-full bg-gray-1000 text-white p-2 text-s font-normal"
              placeholder="Add a public comment..."
            ></input>
            <button className="bg-gray-1000 text-black px-6 py-0 flex items-center">
              <Send size={24} color="white" />
            </button>
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
