import { Navbar } from "../components";
import {
  ThumbsUp,
  ThumbsDown,
  Share2,
  ArrowDownToLine,
  Send,
} from "lucide-react";
import Comment from "../components/Cards/Comment";
import RecommendVideo from "../components/Cards/RecommendVideo";

const Watch = () => {
  return (
    <>
      <Navbar />
      <main className="flex gap-4 min-h-min mx-12 my-6 ">
        {/* Video section */}
        <section className="flex flex-col gap-3 w-7/10">
          {/* Video player */}
          <div className="w-full h-[550px] bg-black rounded-xl relative flex justify-center items-center">
            <video className="max-w-full max-h-full" controls preload="auto">
              <source src="./assets/test.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="w-full flex items-center"></div>
          {/* Video info */}
          <div className="flex flex-col gap-3">
            <h1 className="text-white text-xl font-bold">
              This is the best video to learn everything.
            </h1>
            <div className="flex flex-row items-center justify-between gap-1">
              {/* channel info */}
              <div className="flex flex-row gap-4">
                <img
                  src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="channel logo"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h2 className="font-bold text-white">Gamer</h2>
                  <p className="text-gray-500 text-sm">12M subscribers</p>
                </div>
                <button className="bg-white text-black px-6 rounded-full flex items-center">
                  <span className="text-sm font-semibold">SUBSCRIBE</span>
                </button>
              </div>
              {/* actions */}
              <div className="flex justify-around gap-4">
                {/* joint like dislike buttons */}
                <div className="flex flex-row gap-2 bg-gray-1000 px-4 py-2 items-center rounded-full">
                  <button className="flex items-center gap-2 text-white">
                    <ThumbsUp size={24} />
                    <span className="font-sans font-semibold">1.2K</span>
                  </button>
                  <span className="text-gray-500">|</span>
                  <button className="flex items-center gap-2 text-white">
                    <ThumbsDown size={24} />
                    <span className="font-sans font-semibold">1.2K</span>
                  </button>
                </div>

                {/* share button */}
                <div className="bg-gray-1000 px-4 py-2 rounded-full">
                  <button className="flex items-center gap-1 text-white">
                    <Share2 size={20} />
                    <span>Share</span>
                  </button>
                </div>

                {/* download button */}
                <div className="bg-gray-1000 px-4 py-2 rounded-full">
                  <button className="flex items-center gap-1 text-white">
                    <ArrowDownToLine size={20} />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Video Description */}
          <div className="w-full bg-gray-1000 min-h-min overflow-y-scroll custom-scrollbar rounded-xl p-2">
            {/* views time and tags section */}
            <div className="flex justify-start items-center gap-3 font-sans font-semibold w-full">
              <span className="text-white text-md">1.2M views</span>
              <span className="text-white text-md">•</span>
              <span className="text-white text-md">1 year ago</span>
              <div className="flex gap-2">
                <span className="text-gray-500 text-sm">#gaming</span>
                <span className="text-gray-500 text-sm">#gta</span>
                <span className="text-gray-500 text-sm">#gta V</span>
              </div>
            </div>

            {/* description section */}
            <div className="p-2 justify-evenly">
              <p className="text-white text-md">
                This is the awesome video someone has ever watched you dont know
                about this video
              </p>
            </div>
          </div>
          {/* Video comments section */}
          <div className="flex flex-col gap-4 justify-start">
            {/* no of comments */}
            <div className="flex justify-start items-center gap-3 font-semibold w-full">
              <span className="text-white text-md">999 Comments</span>
            </div>

            {/* comment input */}
            <div className="flex flex-row justify-start items-center gap-3 font-semibold w-full">
              {/* user profile */}
              <div className="flex flex-row gap-4">
                <img
                  src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="channel logo"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div className="flex w-full">
                <input
                  className="w-full bg-gray-1000 text-white p-2"
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
              <Comment />

              {/* repeat this structure for more comments */}
            </div>
          </div>
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
