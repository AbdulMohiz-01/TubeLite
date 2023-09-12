import { Navbar } from "../components";
import RecommendVideo from "../components/Cards/RecommendVideo";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getVideoById } from "../Service/videosApi";
import Loading from "../components/Loading";
import { useSelector, useDispatch } from "react-redux";
import { set } from "../redux/slices/videoSlice";
import {
  VideoPlayer,
  VideoActions,
  VideoDescription,
  CommentSection,
} from "../components/Watch/index";

const Watch = () => {
  const { video_id } = useParams();
  const currentUser = useSelector((state) => state.user.currentUser);
  const video = useSelector((state) => state.video.currentVideo);
  const dispatch = useDispatch();

  const { isLoading } = useQuery(["watch", video_id], getVideoById, {
    onSuccess: (data) => {
      dispatch(set(data));
    },
  });

  if (isLoading)
    return (
      <>
        <div className=" h-screen w-full flex flex-col gap-1 justify-center items-center">
          <Loading />
          <p className="text-white text-sm font-semibold">Loading...</p>
        </div>
      </>
    );
  return (
    <>
      <Navbar />
      <main className="flex gap-4 min-h-min mx-12 my-6 mt-[4.5rem]">
        {/* Video section */}
        <section className="flex flex-col gap-3 w-7/10">
          <VideoPlayer sourceURL={video.videoUrl} thumbnail={video.thumbnail} />
          <VideoActions
            channelImg={video.user.img}
            channelSubs={video.user.subscribers}
            channelName={video.user.name}
            currentUser={currentUser}
          />
          {/*  views, timeAgo, tags, description */}
          <VideoDescription
            views={video.views}
            tags={video.tags}
            timeAgo={video.createdAt}
            description={video.desc}
          />
          {/* <CommentSection
            noOfComments={comments.length}
            channelImg={user.img}
            comments={comments}
          /> */}
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
