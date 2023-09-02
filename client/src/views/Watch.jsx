import { Navbar } from "../components";
import {
  ThumbsUp,
  ThumbsDown,
  Share2,
  ArrowDownToLine,
  Send,
} from "lucide-react";

const Watch = () => {
  return (
    <>
      <Navbar />
      <main className="flex gap-8 min-h-min mx-16 my-8 ">
        {/* Video section */}
        <section className="flex flex-col gap-4 w-2/3 ">
          {/* Video player */}
          {/* You can add your video player component here */}
          <div className="w-full flex items-center">
            <iframe
              width="1127"
              height="620"
              src="https://www.youtube.com/embed/9yRme0C2pmI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>

          {/* Video info */}
          <div className="flex flex-col gap-5">
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
                <button className="bg-white text-black px-6 py-0 rounded-full flex items-center">
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
                <div className="bg-gray-1000  px-4 py-2 rounded-full">
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
              <div className="flex flex-row gap-4">
                {/* user profile */}
                <div className="flex flex-row gap-4">
                  <img
                    src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="channel logo"
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-row justify-between items-center">
                    <h3 className="text-white text-sm font-semibold">Gamer</h3>
                    <span className="text-gray-400 text-xs">1 day ago</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    This is the best video I have ever watched
                  </p>
                </div>
              </div>
              {/* repeat this structure for more comments */}
            </div>
          </div>
        </section>

        {/* Recommendation section */}
        <section className="flex flex-col gap-4 w-1/4">
          <h2 className="text-white text-xl font-bold">Recommended</h2>
          {/* Recommended videos */}
          <div className="flex flex-col gap-4">
            {/* Sample recommended video */}
            <div className="flex gap-4">
              <div className="w-24 h-14 bg-gray-800">
                {/* Recommended video thumbnail */}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-white text-sm font-semibold">
                  Recommended Video Title 1
                </h3>
                <span className="text-gray-400 text-xs">Channel Name</span>
                <span className="text-gray-400 text-xs">1.2M views</span>
              </div>
            </div>
            {/* Repeat this structure for more recommended videos */}
          </div>
        </section>
      </main>
    </>
  );
};

export default Watch;
