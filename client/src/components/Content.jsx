import Cards from "./Cards/Video"; // Import your Cards component
import { getVideos } from "../Service/videosApi";
import { useState } from "react";
import Loading from "./Loading";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Content = () => {
  const [videos, setVideos] = useState([]);
  const type = useSelector((state) => state.sideBar.selected);
  const results = useQuery(["videos", type], getVideos);

  useEffect(() => {
    if (results.data) setVideos(results.data);
  }, [type, results.data]);
  return (
    <>
      {results.isLoading ? (
        <div className=" h-[89.6vh] w-full flex justify-center items-center mt-4 ml-[15rem]">
          <Loading />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full m-3 mt-[4.15rem] ml-[15rem]">
          {videos.map((video, index) => (
            <div key={index}>
              <Cards video={video} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Content;
